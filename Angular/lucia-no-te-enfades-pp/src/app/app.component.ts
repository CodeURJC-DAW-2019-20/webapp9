import { UsersService } from './_servicies/users.service';
import { User} from './models/user.model';
import { Observable } from 'rxjs';
import { Component } from '@angular/core';


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
        this.userLoggedName = response.username;
        this.getUserId(this.userLoggedName);
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

}
