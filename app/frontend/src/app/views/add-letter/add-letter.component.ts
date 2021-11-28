import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AccountService} from "../../entities/Account/account.service";
import {MessageService} from "../../entities/Message/message.service";
import {Message} from "../../entities/Message/MessageModel";

@Component({
    selector: 'app-add-letter',
    templateUrl: './add-letter.component.html',
    styleUrls: ['./add-letter.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddLetterComponent implements OnInit {

    public form: FormGroup;
    public accounts: Object = [];
    public messages: Object[] = [];
    public isLoading = true;
    public messageIsSend = false;

    constructor(
        private fb: FormBuilder,
        private cdr: ChangeDetectorRef,
        private accountService: AccountService,
        private messageService: MessageService,
    ) { }

    public ngOnInit() {
        this.accountService.getAllAccounts()
            .subscribe(accounts => {
                if (accounts) {
                    this.accounts = accounts;
                }
            })
        this.messageService.getAllMessages()
            .subscribe(data => {
                if (data) {
                    for (let a of Object.values(data)) {
                        this.messages.push(Message.createCollection(a));
                    }
                    this.createForm();
                    this.isLoading = false;
                    this.cdr.detectChanges();
                }
            });
    }

    public createForm() {
        this.form = this.fb.group({
            sender: [null, Validators.required],
            recipient: [null, Validators.required],
            subject: [null, Validators.required],
            text: ['', Validators.required],
            replyTo: ['']
        })
    }

    public onApply() {
        const value = this.form.value;

        const message = {
            sender: value.sender,
            recipient: value.recipient,
            subject: value.subject,
            text: value.text,
            date: new Date(),
            replyTo: value?.replyTo,
        };

        this.messageService.addMessage(message);
        this.messageIsSend = true;

        this.cdr.detectChanges();
    }

    public isDisabled() {
        return !this.form.valid;
    }

}
