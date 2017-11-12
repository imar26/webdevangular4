import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service.client';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @ViewChild('f') registerForm: NgForm;

  //properties
  username: string;
  password: string;
  verifypassword: string;
  user: Object = {};
  errorFlag: boolean;
  errorMessage: string;
  usernameFlag: boolean;
  usernameExists: string;
  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.errorMessage = "Passwords do not match";
    this.usernameExists = "Username already exists.";
  }
  
  register() {
    this.username = this.registerForm.value.username;
    this.password = this.registerForm.value.password;
    this.verifypassword = this.registerForm.value.verifypassword;

    if(this.password === this.verifypassword) {
      this.user['username'] = this.username;
      this.user['password'] = this.password;
      let userExists = this.userService.findUserByUsername(this.username);
      if(userExists) {
        this.usernameFlag = true;
      } else {
        let user = this.userService.createUser(this.user);
        if(user) {
          this.router.navigate(['/user/'+user._id]);
        }
      }
    } else {
      this.errorFlag = true;
    }
  }

}
