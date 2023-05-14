import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
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

  successMsg:any;

  constructor(private toaster:ToastrService, private loginService:LoginService){}

  onSubmit(){

    if((this.creadential.username!='' && this.creadential.password!='')&&( this.creadential.username!=null && this.creadential.password!=null)){

      console.log("The form is submitted");
      this.loginService.generateToken(this.creadential).subscribe(
        (response:any)=>{
          // console.log("rrrrrrrrrrrrrrr",response.token);
          this.successMsg="LOGIN SUCCESSFULLY";
          // alert("LOGIN SUCCESSFULLY");
          this.loginService.loginUser(response.token);
          this.toaster.success(this.successMsg);
          window.location.href="/dashboard" 
        },
        error=>{
          this.successMsg="WRONG USERNAME OR PASSWORD";
          // this.toaster.error(this.successMsg ,'Major Error', {
          //   timeOut: 9000,
          // });
          this.toaster.error(this.successMsg);
          console.log(error);
          
        }
      )

    }else{
      this.toaster.error("The From is not Submitted");
      
    }
    
  }

}
