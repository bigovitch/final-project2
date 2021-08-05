import { Component, OnInit } from '@angular/core';
import {FormBuilder , Validators , FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import {User} from '../../models/user.model'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm:FormGroup;
  currentUser:User = new User();
  loggedInUser :any;
  constructor(private formBuilder:FormBuilder, private userService:UserService , private router:Router) { }

  ngOnInit() {
this.loginForm = this.formBuilder.group({
  email:[null , Validators.compose([Validators.required , Validators.email])],
  password:[null , Validators.required],
})
  }
  login(){
    console.log(this.loginForm.value)

let loginObj = this.loginForm.value;

this.userService.login(loginObj).subscribe(res=>{
  this.loggedInUser = res;
  alert(this.loggedInUser.email +" has logged In");
 this.router.navigate(['home/dash-board'])
})
  }
  
 
}
