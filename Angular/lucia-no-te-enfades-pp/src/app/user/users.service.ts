
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
  login(un: string, pass: string, oldUser: boolean) {
    var httpOptions = {
      headers: new HttpHeaders({
        'X-Requested-With' : 'XMLHttpRequest',
        'Authorization': 'Basic ' + btoa(un + ':' + pass)
      })
    };


}
}
