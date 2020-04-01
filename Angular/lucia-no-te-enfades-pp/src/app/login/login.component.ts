import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

//import { AlertService, AuthenticationService } from '@/_services';

@Component({ 
    selector: 'login',
    templateUrl: 'login.component.html' })
export class LoginComponent implements OnInit {
    ngOnInit() {
   

        // get return url from route parameters or default to '/'
       // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    // convenience getter for easy access to form fields


  
}