import { Component, OnInit } from '@angular/core';
import {VisualizationService} from "../visualization.service";
import {Account} from "../../../entities/Account/AccountModel";
import AccountModel = Account.AccountModel;
import {Message} from "../../../entities/Message/MessageModel";
import MessageModel = Message.MessageModel;

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

    constructor(
      private service: VisualizationService
    ) { }

    public accounts: AccountModel[] = [];
    public messages: MessageModel[] = [];
    public isLoading = true;

    public ngOnInit() {
        this.service.getAllAccounts()
            .subscribe(data => {
                for (let a of Object.values(data)) {
                    this.accounts.push(Account.createCollection(a));
                }
            });
        this.service.getAllMessages()
            .subscribe(data => {
                for (let a of Object.values(data)) {
                    this.messages.push(Message.createCollection(a));
                }
                this.isLoading = false;
            });
    }

}
