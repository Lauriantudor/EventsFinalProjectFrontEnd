import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = "api/api/v1/auth"
  constructor(private httpClient:HttpClient) { }

  public login(email:string, password:string){
    const body={
      "email": email,
      "password": password
    }
    return this.httpClient.post(`${this.baseUrl}/authenticate`,body)
  }
  public register(firstName:string, lastName:string, email:string, password:string){
    const body={
      "firstName":firstName,
      "lastName":lastName,
      "email": email,
      "password": password
    }
    return this.httpClient.post(`${this.baseUrl}/register`,body)
  }
}
