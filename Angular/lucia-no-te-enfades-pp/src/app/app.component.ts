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
  userLoggued: User;
  
  
  constructor(private userService: UsersService){

  }
  imgWebIconUrl = "assets/web-icon-white.png";


  logged() { return this.userService.logged; }

  ngOnInit(): void {
    this.userService.currentUser.subscribe(x => this.userLoggued = x);
    this.userService.getUserByUserName(this.userLoggued.username).subscribe(
            user => {
              let data: any = user;
              this.userLoggued = user;
          },
          );
      }  
  }
