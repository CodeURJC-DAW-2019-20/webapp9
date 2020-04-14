import { HttpInterceptor, HttpRequest, HttpHandler, HttpClient, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

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

            const cloned2 = req.clone({
                headers: req.headers.set("Authorization",
                "Basic "+ idToken)
            });

            if(req.method === "POST"){
                return next.handle(req);
            }else{
                return next.handle(cloned2);
            }

            
            
        }

    }
}