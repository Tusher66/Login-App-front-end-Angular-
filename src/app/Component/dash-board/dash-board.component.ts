import { Component } from '@angular/core';
import { LoginService } from 'src/app/Service/login.service';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss']
})
export class DashBoardComponent {

  
  userName:any;

  constructor(private userservice:UserService, private loginservice:LoginService){}

  getdata(){
    this.userservice.getData().subscribe(
      response=>{
        this.userName=response;
        console.log("Resssssss: ",response);
        
      },
      error=>{
        console.log("Error From Component:",error);
        
      }
    )
  }

}
