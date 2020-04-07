import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';
import {UserService} from '../_servicies/user.service'

//import { AlertService, AuthenticationService } from '@/_services';

@Component({ 
    selector: 'login',
    templateUrl: 'login.component.html' })
export class LoginComponent implements OnInit {
   
    credentials = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    });
    message = ('');
    wrongInput: string = ('qwrong Input');
    emptyPassword: string;
    emptyUsername: string;
    error: boolean;
    returnUrl:string;
     
    constructor(public userService: UserService, public router: Router, public route:ActivatedRoute) {
        
     }

      login(username: string, password: string, event: Event) {

        if(this.credentials.controls['username'].value == ('')){
            return
        }
        if (this.credentials.controls['password'].value == ('')) {
            return
        }
        this.userService.login(username, password).subscribe(
            res => {
              console.log(res);
              this.navigate();
            },
            error => {
              this.error = true;
              this.message = "Wrong data.";
              console.error(error);
            }
          );
    
        }
   
    ngOnInit() {
        this.error = false; 
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/index';//tocar esto
   
    }
    navigate() {
        this.router.navigate([this.returnUrl]);
      }

    // convenience getter for easy access to form fields


  
}