
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from "./user.model";
import { map } from "rxjs/operators";
import { BehaviorSubject, Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})

@Injectable()
export class UserService {
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
}
