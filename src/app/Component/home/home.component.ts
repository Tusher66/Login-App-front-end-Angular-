import { Component } from '@angular/core';
import { LoginService } from 'src/app/Service/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public loggedin=false;

  constructor(private loginservice:LoginService){}

  ngOnInit():void{
    this.loggedin=this.loginservice.isLoggedIn()
  }
}
