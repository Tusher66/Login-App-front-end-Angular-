import { Component } from '@angular/core';
import { LoginService } from 'src/app/Service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  creadential={
    username:'',
    password:''
  }

  constructor(private loginService:LoginService){}

  onSubmit(){

    if((this.creadential.username!='' && this.creadential.password!='')&&( this.creadential.username!=null && this.creadential.password!=null)){

      console.log("The form is submitted");
      this.loginService.generateToken(this.creadential).subscribe(
        (response:any)=>{
          console.log("rrrrrrrrrrrrrrr",response.token);
          this.loginService.loginUser(response.token);
          window.location.href="/dashboard"
          
        },
        error=>{
          console.log(error);
          
        }
      )

    }else{
      console.log("The From is not Submitted");
      
    }
    
  }

}
