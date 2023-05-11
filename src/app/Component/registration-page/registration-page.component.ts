import { Component } from '@angular/core';
import { UserService } from 'src/app/Service/user.service';

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
    rol:''
  }
  text:any=null;
  constructor(private userService:UserService){}

  onSubmit(){
     if((this.userData.username!='' && this.userData.password!='')&&( this.userData.username!=null && this.userData.password!=null)){
    this.userService.saveUser(this.userData).subscribe((response:any)=>{
      this.text="Form is Submited";

    },
    error=>{

      this.text="Form is not Submited";
    }
    )
    
  }


}
}
