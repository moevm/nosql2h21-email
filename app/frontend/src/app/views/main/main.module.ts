import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { RouterModule } from "@angular/router";
import { routing } from "./main.routing";
import { MenuComponent } from './menu/menu.component';

@NgModule({
    declarations: [
        MainComponent,
        MenuComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routing),
    ],
})
export class MainModule { }
