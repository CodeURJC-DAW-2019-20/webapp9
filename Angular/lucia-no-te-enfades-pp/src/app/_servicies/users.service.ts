import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { User } from '../profile/user.model';

const BASE_URL = 'https://127.0.0.1:8443/api/user/';

@Injectable({ providedIn: 'root' })
export class UsersService {
  redirectToHome: string = "/index";
  currentUser: Observable<User>;
  currentUserSubject: BehaviorSubject<User>;
  logged: boolean = false;
  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }
  login(user: string, pass: string, oldUser: boolean) {
    var httpOptions = {
      headers: new HttpHeaders({
        'X-Requested-With' : 'XMLHttpRequest',
        'Authorization': 'Basic ' + btoa(user + ':' + pass)
      })
    };
return this.http.get<any>('/api/signin', httpOptions).
pipe(
  map(user => {
    user.authData = window.btoa(user + ':' + pass);
    localStorage.setItem('currentUser', JSON.stringify(user));
    this.currentUserSubject.next(user);
    this.logged = true; 
  })
)
}
getUserByUserName(userName: String): Observable<User>{
  return this.http.get(BASE_URL + "name=" + userName).pipe(
      catchError(error => this.handleError(error))
  )as Observable<User>;
}
private handleError(error: any) {
  console.error(error);
  return Observable.throw("Server error (" + error.status + "): " + error.text())
}
}
