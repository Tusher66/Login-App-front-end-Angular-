import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Route, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
providedIn:'root'
})

export class AuthGuard implements CanActivate{
  constructor(private logInService:LoginService, private router:Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean|UrlTree>|Promise<boolean|UrlTree>|boolean|UrlTree {


    if(this.logInService.isLoggedIn()){

      return true;
    }
    

    this.router.navigate(['login']);

    return false;
  }
}
