import { Component } from '@angular/core';
import { LoginService } from './Service/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'loginApp';

  public loggedin=false;

  constructor( private loginservice:LoginService){}

  ngOnInit():void{
    this.loggedin=this.loginservice.isLoggedIn()
  }

}
