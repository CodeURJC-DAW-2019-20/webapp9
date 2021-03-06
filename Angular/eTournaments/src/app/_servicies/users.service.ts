import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';

import { Router } from '@angular/router';

import { User } from '../models/user.model';

const BASE_URL = '/api/user/';

@Injectable({ providedIn: 'root' })
export class UsersService {

  actualUser: string;
  actualUserName: string;
  actualPass: string;
  loggedUser: User;
  redirectToHome: string = "/index";
  currentUser: Observable<User>;
  currentUserSubject: BehaviorSubject<User>;
  logged: boolean = false;

  constructor(private http: HttpClient, private router:Router) {
    //this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    //this.currentUser = this.currentUserSubject.asObservable();
  }

  login(user: string, pass: string, oldUser: boolean) {
    
    var basic = btoa(user + ':' + pass);
    localStorage.setItem('id_token' ,basic);

    var httpOptions = {
      headers: new HttpHeaders({
        'X-Requested-With' : 'XMLHttpRequest',
        'Authorization': 'Basic ' + basic
      })
    };

    
    
    return this.http.get<any>('/api/logIn', httpOptions).pipe(
      map(user => {
        //user.authData = window.btoa(user + ':' + pass);
        localStorage.setItem('currentUser', JSON.stringify(user));
        //localStorage.setItem('currentUser', user.authData);
        //this.currentUserSubject.next(user);
        this.loggedUser = user;
        this.logged = true;
        this.actualUser = user;
        this.actualUserName = user.username;
        this.actualPass = pass;
        
        localStorage.setItem('loggedString' , "true");
        localStorage.setItem('actualUserName', this.actualUserName);
        localStorage.setItem('role',this.loggedUser.rol.rolDes);
      })
    )
  }

  logOut():Observable<any>{
    return this.http.get<any>('/api/logOut').pipe(
      catchError(error => this.handleError(error))
    ) as Observable<any>
  }

  logOutProcedure(){
    localStorage.setItem('id_token' ,'');

    this.logged = false;
    this.actualUser = null;
    this.actualUserName = null;
    this.actualPass = null;

    localStorage.setItem('loggedString' , "false");
    localStorage.setItem('actualUserName', this.actualUserName);
    localStorage.setItem('role',"");
  }

  getLogged(){

    var loggedS = localStorage.getItem('loggedString');

    if(loggedS === "true"){
      return true;
    }else{
      return false;
    }
  }

  getActualUserName(){

    var userNameString = localStorage.getItem('actualUserName');

    return userNameString;
  }

  getUserByUserName(userName: String): Observable<User>{
    return this.http.get(BASE_URL + "name=" + userName).pipe(
      catchError(error => this.handleError(error))
    )as Observable<User>;
  }

  createUser(user: User): Observable<User>{
    return this.http.post(BASE_URL, user).pipe(
      catchError(error => this.handleError(error))
    )as Observable<User>;
  }

  private handleError(error: any) {
    console.error(error);
    if(error.status === 403 || error.status === 401 || error.status === 0){
      this.router.navigate(["/login"]);
    }
    return throwError("Server error (" + error.status + "): " + error.text);
  }

  logout() {
    return this.http.get('/api/logout');
  }

}
