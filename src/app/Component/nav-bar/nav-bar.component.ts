import { Component } from '@angular/core';
import { LoginService } from 'src/app/Service/login.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  public loggedin=false;

  constructor( private loginservice:LoginService){}

  ngOnInit():void{
    this.loggedin=this.loginservice.isLoggedIn()
  }
  logoutUser(){
    this.loginservice.logout();
    location.reload();
  }




}


