import { Component } from '@angular/core';
import { UserService } from 'src/app/Service/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss']
})
export class RegistrationPageComponent {

  userData={
    username:'',
    password:'',
    email:'',
    rol:'',
    statusCode:0,
    statusMessage:''
  }
  text:any=null;
  constructor(private toaster:ToastrService, private userService:UserService){}

  onSubmit(){
     if((this.userData.username!='' && this.userData.password!='')&&( this.userData.username!=null && this.userData.password!=null)){
    this.userService.saveUser(this.userData).subscribe((response:any)=>{
      this.userData=response;
      this.toaster.success(this.userData.statusMessage);
      // window.location.href="/login"
      this.reset();

    },
    error=>{
      this.text="Form is not Submited";
      this.toaster.error("The From is not submitted");
    }
    )
    
  }
}

  reset(){
    this.userData.username="";
    this.userData.email="";
    this.userData.rol="";
    this.userData.password="";
  }

}
