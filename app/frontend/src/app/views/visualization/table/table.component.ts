import { Component, OnInit } from '@angular/core';
import {VisualizationService} from "../visualization.service";
import {Account} from "../../../entities/Account/AccountModel";
import AccountModel = Account.AccountModel;
import {map} from "rxjs";
import createCollection = Account.createCollection;

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
    public isLoading = true;

    public ngOnInit() {
        this.service.getAllAccounts()
            .subscribe(data => {
                for (let a of Object.values(data)) {
                    this.accounts.push(createCollection(a));
                }
                this.isLoading = false;
            });
    }

}
