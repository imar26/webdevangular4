import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service.client';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('f') loginForm: NgForm;

  //properties
  username: string;
  password: string;
  errorFlag: boolean;
  errorMessage: string;
  notFoundFlag: boolean;
  userNotFound: string;
  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.errorMessage = "Invalid username or password";
  }

  login() {
    this.username = this.loginForm.value.username;
    this.password = this.loginForm.value.password;
    let user = this.userService.findUserByCredentials(this.username, this.password);
    if(user) {
      this.router.navigate(['/user/'+user._id]);
    } else {
      this.notFoundFlag = true;
      this.userNotFound = "User not found.";
    }
  }

}
