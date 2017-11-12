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

    this.website = this.websiteService.findWebsiteById(this.websiteId);
  }

  update(website) {
    let updateWebsite = this.websiteService.updateWebsite(this.websiteId, website);
    if(updateWebsite) {
      this.router.navigate(['/user/'+this.userId+'/website/']);
    }
  }

  delete(websiteId) {
    let deletedWebsite = this.websiteService.deleteWebsite(websiteId);
    if(deletedWebsite) {
      this.router.navigate(['/user/'+this.userId+'/website/']);
    }
  }

}
