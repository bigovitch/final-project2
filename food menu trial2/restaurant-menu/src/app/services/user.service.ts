import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  login(loginObj:User){
    return this.http.post('http://localhost:5000/login', loginObj);
  }

  register(registerObj:User){
    return this.http.post('http://localhost:5000/register', registerObj);
  }
}
