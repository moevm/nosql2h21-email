import { Injectable } from '@angular/core';
import {AccountService} from "../../entities/Account/account.service";
import {Account} from "../../entities/Account/AccountModel";

@Injectable({
    providedIn: 'root'
})
export class VisualizationService {
    constructor(
        private accountService: AccountService,
    ) { }

    public getAllAccounts() {
        return this.accountService.getAllAccounts();
    }
}
