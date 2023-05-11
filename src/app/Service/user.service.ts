import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url="http://localhost:8080/api"

  constructor(private http:HttpClient) { }

  getData(){
    return this.http.get(`${this.url}/welcome`)
  }

  saveUser(userData:any){
    return this.http.post(`${this.url}/signup`,userData);
  }

}
