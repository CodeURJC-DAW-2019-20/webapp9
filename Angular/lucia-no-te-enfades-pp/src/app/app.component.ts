import { UsersService } from './_servicies/users.service';
import { User} from './models/user.model';
import { Observable } from 'rxjs';
import { Component } from '@angular/core';

import { HttpHeaders } from '@angular/common/http';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./home/carousel.component.css']
})
export class AppComponent {
  title = 'lucia-no-te-enfades-pp';
  userLoggued = new User;
  userLoggedName: String;
  userLoggedId: number;
  imgWebIconUrl = "assets/web-icon-white.png";
  
  logged: boolean;
  notLogged: boolean;

  constructor(private userService: UsersService){
    
  }

  ngOnInit(): void {
    /*
    this.userService.currentUser.subscribe(
      response => {
        let data: any = response;
        this.userLoggedName = data.username;
        this.userLoggedId = data.iduser;
      }
    );
      */

      this.userLoggedName = this.userService.getActualUserName();
      this.logged = this.userService.getLogged();

      if(this.logged){
        this.notLogged = false;
      }else{
        this.notLogged = true;
      }

      if(this.userLoggedName != "undefined" && this.userLoggedName != "null" && this.userLoggedName != null){
        this.setUserId(this.userLoggedName);
      } 
      
  }

  logOut(){
    this.userService.logOut().subscribe(
      response => {
        this.userService.logOutProcedure();
        window.location.reload();
      },
      error => console.error('Error in logOut ' + error)
    )
  }

  setUserId(name: String) {
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
