import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, share} from "rxjs";
import {API_BASE_URL} from "../../constants";

@Injectable({
    providedIn: 'root'
})
export class AccountService {
    constructor(private http: HttpClient) { }

    public getAllAccounts(): Observable<Object> {
        return this.http.get(`${API_BASE_URL}/accounts`)
            .pipe(
                share()
            )
    }
}
