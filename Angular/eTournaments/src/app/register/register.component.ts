import { Component } from '@angular/core';

import { UsersService } from '../_servicies/users.service';

import { User } from '../models/user.model';
import { Rol } from '../models/rol.model';

const BASE_URL = '/api/user/';

@Component({
    selector: 'register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent {
    user = new User;
    rol = new Rol;
    password: String;
    notEqualPass: boolean = false;

    constructor(private usersService: UsersService){}

    send(name: string, email: string, username: string, userpassword: string, password: string){
        if(userpassword === password){
            this.notEqualPass = false;

            this.user.name = name;
            this.user.username = username;
            this.user.email = email;
            this.user.password = userpassword;
            this.rol.idRol = 2;
            this.rol.rolDes = 'USER';
            this.user.rol = this.rol;

            this.usersService.createUser(this.user).subscribe(
                response =>{
                    window.history.back();
                },
                error => console.error('Error creating new user: ' + error)
                
            );

        }else{
            this.notEqualPass = true;
        }
    }

}