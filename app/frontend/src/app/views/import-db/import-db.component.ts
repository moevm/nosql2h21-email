import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-import-db',
    templateUrl: './import-db.component.html',
    styleUrls: ['./import-db.component.scss']
})
export class ImportDBComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    public file: File;

    public isImportDisabled(): boolean {
        return !this.file;
    }

    public onFileSelected(event: any) {
        const file = event?.target?.files[0];
        this.file = file;
        if (file) {
            console.log('File was select!')
        }
    }

}
