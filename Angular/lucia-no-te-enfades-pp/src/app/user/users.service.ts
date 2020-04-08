import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { User } from '../profile/user.model';

const BASE_URL = 'https://127.0.0.1:8443/api/user/';

@Injectable({ providedIn: 'root' })
export class UsersService {

    constructor(private httpClient: HttpClient){}

    getUserByUserName(userName: String): Observable<User>{
        return this.httpClient.get(BASE_URL + "name=" + userName).pipe(
            catchError(error => this.handleError(error))
        )as Observable<User>;
    }

    private handleError(error: any) {
		console.error(error);
		return Observable.throw("Server error (" + error.status + "): " + error.text())
	}

}