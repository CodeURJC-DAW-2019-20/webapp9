
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AppComponent } from '../app.component';



@Injectable({providedIn: 'root'})
export class AdminAuthGuardService implements CanActivate{
    role :string;
    constructor(private router: Router){}

    canActivate(/*next:ActivatedRouteSnapshot,state:RouterStateSnapshot */){
        if (localStorage.getItem('role') === "ADMIN"){
            return true;
        }else{
            this.router.navigate(['/']);
            return false;
        }
        
    }

}
@Injectable({providedIn: 'root'})
export class UserAuthGuardService implements CanActivate{
    role :string;
    constructor(private router: Router){}

    canActivate(/*next:ActivatedRouteSnapshot,state:RouterStateSnapshot */){
        if (localStorage.getItem('role') === "ADMIN" || localStorage.getItem('role') === "USER"){
            return true;
        }else{
            this.router.navigate(['/login']);
            return false;
        }
        
    }

}