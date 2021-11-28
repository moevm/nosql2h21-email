import { Injectable } from '@angular/core';
import {AccountService} from "../../entities/Account/account.service";
import {MessageService} from "../../entities/Message/message.service";

@Injectable({
    providedIn: 'root'
})
export class VisualizationService {
    constructor(
        private accountService: AccountService,
        private messageService: MessageService,
    ) { }

    public getAllAccounts() {
        return this.accountService.getAllAccounts();
    }

    public getAllMessages() {
        return this.messageService.getAllMessages();
    }
}
