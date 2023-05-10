import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LoginService } from "./login.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private loginservice:LoginService){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let newReq=req;
        let token=this.loginservice.getToken();

        console.log("INTERCEPTOR:",token);
        

        if(token!=null){
            newReq=newReq.clone({setHeaders:{Authorization:`Bearer ${token}`}})
            console.log("New Request:",newReq);
            
        }

        return next.handle(newReq)
    }
}