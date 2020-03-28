import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { User } from '../login/user.model';



const BASE_URL = 'https://localhost:8443/api/logIn';

@Injectable({ providedIn: 'root' })
export class UserService {

	constructor(private httpClient: HttpClient) { }

    login(username:string, password:string) {
        return this.httpClient.post(BASE_URL, {
          email: username, //poner aqui usuario y contraseña
          password: password,     
        });     
      }

	private handleError(error: any) {
		console.error(error);
		return Observable.throw("Server error (" + error.status + "): " + error.text())
	}
}