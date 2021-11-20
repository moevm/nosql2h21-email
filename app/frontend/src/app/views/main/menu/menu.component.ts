import { ChangeDetectionStrategy, Component } from '@angular/core';
import {MenuItemModel} from "./menu.model";
import {EXPORT_PATH, IMPORT_PATH, TABLE_VISUALIZATION_PATH, VISUALIZATION_PATH} from "../main.constants";

const MENU = [
    new MenuItemModel('Import', `/${IMPORT_PATH}`),
    new MenuItemModel('Export', `/${EXPORT_PATH}`),
    new MenuItemModel('Visualization', `/${VISUALIZATION_PATH}`, [
        new MenuItemModel('Table', `/${VISUALIZATION_PATH}/${TABLE_VISUALIZATION_PATH}`),
        new MenuItemModel('Graph', ``),
        new MenuItemModel('Key words', ``)
    ]),
    new MenuItemModel('Add a Letter', ``)
]

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuComponent {

    public menuItems: Array<MenuItemModel> = MENU;

    constructor() { }

}
