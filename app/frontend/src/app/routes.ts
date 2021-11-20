import { Routes } from "@angular/router";

export const EMAILS_ROUTES: Routes = [
    {
        path: '',
        loadChildren: () => import('./views/main/main.module').then(m => m.MainModule)
    }
]
