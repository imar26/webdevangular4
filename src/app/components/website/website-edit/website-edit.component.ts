import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { WebsiteService } from '../../../services/website.service.client';

@Component({
  selector: 'app-website-edit',
  templateUrl: './website-edit.component.html',
  styleUrls: ['./website-edit.component.css']
})
export class WebsiteEditComponent implements OnInit {
  //properties
  userId: string;
  websiteId: string;
  website: {};
  constructor(private activatedRoute: ActivatedRoute, private websiteService: WebsiteService, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      params => {
        this.userId = params['userId'];
        this.websiteId = params['websiteId'];
      }
    );

    this.websiteService.findWebsiteById(this.websiteId)
      .subscribe((website) => {
        this.website = website;
      });
  }

  update(website) {
    this.websiteService.updateWebsite(this.websiteId, website)
      .subscribe((updateWebsite) => {
        if(updateWebsite) {
          this.router.navigate(['/user/'+this.userId+'/website/']);
        }
      });    
  }

  delete(websiteId) {
    this.websiteService.deleteWebsite(websiteId)
      .subscribe((deletedWebsite) => {
        if(deletedWebsite) {
          this.router.navigate(['/user/'+this.userId+'/website/']);
        }
      });    
  }

}
