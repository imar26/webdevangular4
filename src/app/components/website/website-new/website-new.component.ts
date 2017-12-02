import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { WebsiteService } from '../../../services/website.service.client';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-website-new',
  templateUrl: './website-new.component.html',
  styleUrls: ['./website-new.component.css']
})
export class WebsiteNewComponent implements OnInit {
  @ViewChild('f') websiteForm: NgForm;

  //properties
  userId: string;
  website: Object = {};
  name: string;
  description: string;
  errorFlag: boolean;
  errorMsg: string;
  constructor(private activatedRoute: ActivatedRoute, private websiteService: WebsiteService, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      params => {
        this.userId = params['userId'];
      }
    );

    this.errorMsg = "Website could not be created successfully.";
  }

  createWebsite() {
    this.name = this.websiteForm.value.name;
    this.description = this.websiteForm.value.description;

    this.website['name'] = this.name;
    this.website['description'] = this.description;

    this.websiteService.createWebsite(this.userId, this.website)
      .subscribe((website) => {
        if(website) {
          this.router.navigate(['/user/'+this.userId+'/website/']);
        } else {
          this.errorFlag = true;
        }
      });
  }

}
