import { Routes } from '@angular/router';
import { MainComponent } from './main.component';
import {ADD_LETTER, EXPORT_PATH, IMPORT_PATH, TABLE_VISUALIZATION_PATH, VISUALIZATION_PATH} from "./main.constants";
import {ImportDBComponent} from "../import-db/import-db.component";
import {ExportDBComponent} from "../export-db/export-db.component";
import {TableComponent} from "../visualization/table/table.component";
import {AddLetterComponent} from "../add-letter/add-letter.component";

export const routing: Routes = [
    {
        path: '',
        component: MainComponent,
        children: [
            { path: IMPORT_PATH, data: { title: 'Import' }, component: ImportDBComponent },
            { path: EXPORT_PATH, data: { title: 'Export' }, component: ExportDBComponent },
            { path: `${VISUALIZATION_PATH}/${TABLE_VISUALIZATION_PATH}`, data: { title: 'Table' }, component: TableComponent },
            { path: ADD_LETTER, data: { title: 'Add letter'}, component: AddLetterComponent },
            { path: '', redirectTo: IMPORT_PATH },
        ]
    }
]
