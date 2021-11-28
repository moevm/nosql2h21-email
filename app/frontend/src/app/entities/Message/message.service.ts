import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, share} from "rxjs";
import {API_BASE_URL} from "../../constants";

@Injectable({
    providedIn: 'root'
})
export class MessageService {
    constructor(private http: HttpClient) { }

    public getAllMessages(): Observable<Object> {
        return this.http.get(`${API_BASE_URL}/messages`)
            .pipe(
                share()
            )
    }

    public addMessage(message: Object) {
        this.http.post<any>(`${API_BASE_URL}/messages/add`, { message: message })
            .subscribe();
    }
}
