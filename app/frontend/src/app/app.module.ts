import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {EMAILS_ROUTES} from "./routes";
import {HttpClientModule} from "@angular/common/http";
import { ImportDBComponent } from './views/import-db/import-db.component';
import { ExportDBComponent } from './views/export-db/export-db.component';
import { TableComponent } from './views/visualization/table/table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddLetterComponent } from './views/add-letter/add-letter.component';


@NgModule({
  declarations: [
      AppComponent,
      ImportDBComponent,
      ExportDBComponent,
      TableComponent,
      AddLetterComponent,
  ],
  imports: [
      BrowserModule,
      ReactiveFormsModule,
      RouterModule.forRoot(EMAILS_ROUTES),
      HttpClientModule,
      BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
