import { HttpInterceptor, HttpRequest, HttpHandler, HttpClient, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor{
    constructor(private router:Router){}
    intercept(req: HttpRequest<any>, next:HttpHandler): Observable<HttpEvent<any>>{
        const idToken = localStorage.getItem("id_token");

        if(idToken){

            const cloned = req.clone({
                headers: req.headers.set("Authorization",
                "Basic "+ idToken)
            });

            return next.handle(cloned);

        }else{
            return next.handle(req).pipe(
                catchError((error: HttpErrorResponse) => {
                    let data = {};
                    data = {
                        reason: error && error.error.reason ? error.error.reason : '',
                        status: error.status
                    };
                    if(status==="401"){
                        this.router.navigate(["/login"]);
                    }              
                    return throwError(error);
                })
              )
        }
       

    }
 
}
   