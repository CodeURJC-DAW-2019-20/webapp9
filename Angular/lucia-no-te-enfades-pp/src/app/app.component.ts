import { UsersService } from './_servicies/users.service';
import { User} from './models/user.model';
import { Observable } from 'rxjs';
import { Component } from '@angular/core';

import { HttpHeaders } from '@angular/common/http';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lucia-no-te-enfades-pp';
  userLoggued = new User;
  userLoggedName: String;
  userLoggedId: number;
  imgWebIconUrl = "assets/web-icon-white.png";
  
  constructor(private userService: UsersService){

  }
  


  logged() { return this.userService.logged; }

  ngOnInit(): void {
    this.userService.currentUser.subscribe(
      response => {
        let data: any = response;
        this.userLoggedName = data.username;
        this.userLoggedId = data.iduser;
      }
    );

  }

  getUserId(name: String) {
    this.userService.getUserByUserName(name).subscribe(
      user => {
        let data: any = user;
        this.userLoggedId = data.iduser;
      },
      error => console.error('Error finding user: ' + error)
    );
  }

  
	logout(): Promise<any> {
		return new Promise((resolve, reject) => {
			this.userService.logout().subscribe(
				res => {
					// remove user from local storage to log user out
					localStorage.removeItem('currentUser');
					this.userService.currentUserSubject.next(null);
					this.userService.logged = false;
					
				},
				error => {
					console.log("marcos");
				}
			)
		})
	}

}
