import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url="http://localhost:8080/api"

  constructor(private http:HttpClient) { }

  //Calling the server to generate the token
  generateToken(creadential:any){
    // console.log("hghghj",creadential);
    // console.log("req hhhh",this.http.post(`${this.url}/token`,creadential));
    
    
    return this.http.post(`${this.url}/token`,creadential);

  }

  //For login user
  loginUser(token:any){

    localStorage.setItem('token',token)
    return true;

  }

  //For check user is login or not
  isLoggedIn(){
    let token=localStorage.getItem("token");
    console.log("isLoggedIn",token);
    
    if(token==undefined ||token==""||token==null){
      return false;
    }else{
      return true;
    }
  }


  //For logout the user
  logout(){
    localStorage.removeItem('token');
    return true; 
  }

  getToken(){
    return localStorage.getItem('token');
  }

}
