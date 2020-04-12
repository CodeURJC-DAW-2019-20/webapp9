import { Component } from '@angular/core';

import { UsersService } from '../_servicies/users.service';

import { HttpClient } from '@angular/common/http';

import { User } from '../models/user.model';

const BASE_URL = 'https://127.0.0.1:8443/api/user/';

@Component({
    selector: 'register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent {
    user = new User;

    constructor(private http: HttpClient , private usersService: UsersService){}

    

}