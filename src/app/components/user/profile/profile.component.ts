import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service.client';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  //properties
  userId: string;
  user: {};
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  successFlag: boolean;
  success: string;
  constructor(private userService: UserService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      params => {
        this.userId = params['userId'];
      }
    );

    this.userService.findUserById(this.userId)
      .subscribe((user) => {
        this.user = user;
      }, (error) => {
        console.log(error);
      });
  }

  updateUser(user) {
    this.userService.updateUser(user._id, user)
      .subscribe((user) => {
        this.successFlag = true;
        this.success = "Profile updated successfully.";
        setTimeout(function(){ 
          location.reload(); 
        }, 2000);
      }, (error) => {
        console.log(error);
      });
  }

  deleteUser(userId) {
    this.userService.deleteUser(userId)
      .subscribe((status) => {
        console.log(status);
        this.router.navigate(['/login']);
      }, (error) => {
        console.log(error);
      });
  }

  goToWebsites() {
    this.router.navigate(['/user/'+this.userId+'/website/']);
  }

  goToProfile() {
    this.router.navigate(['/user/'+this.userId]);
  }
}
