import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { PageService } from '../../../services/page.service.client';

@Component({
  selector: 'app-page-new',
  templateUrl: './page-new.component.html',
  styleUrls: ['./page-new.component.css']
})
export class PageNewComponent implements OnInit {
  @ViewChild('f') pageForm: NgForm;

  //properties
  userId: string;
  websiteId: string;
  page: Object = {};
  name: string;
  description: string;
  constructor(private activatedRoute: ActivatedRoute, private pageService: PageService, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      params => {
        this.userId = params['userId'];
        this.websiteId = params['websiteId'];
      }
    );
  }

  createPage() {
    this.name = this.pageForm.value.name;
    this.description = this.pageForm.value.description;

    this.page['name'] = this.name;
    this.page['description'] = this.description;

    this.pageService.createPage(this.websiteId, this.page)
      .subscribe((page) => {
        if(page) {
          this.router.navigate(['/user/'+this.userId+'/website/'+this.websiteId+'/page/']);
        }
      });    
  }

}
