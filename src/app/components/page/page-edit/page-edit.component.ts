import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PageService } from '../../../services/page.service.client';

@Component({
  selector: 'app-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.css']
})
export class PageEditComponent implements OnInit {
  //properties
  userId: string;
  websiteId: string;
  pageId: string;
  page: {};
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private pageService: PageService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      params => {
        this.userId = params['userId'];
        this.websiteId = params['websiteId'];
        this.pageId = params['pageId'];
      }
    );

    this.pageService.findPageById(this.pageId)
      .subscribe((page) => {
        this.page = page;
      });
  }

  update(page) {
    this.pageService.updatePage(this.pageId, page)
      .subscribe((updatePage) => {
        if(updatePage) {
          this.router.navigate(['/user/'+this.userId+'/website/'+this.websiteId+'/page/']);
        }
      });    
  }

  delete(pageId) {
    this.pageService.deletePage(pageId)
      .subscribe((deletedPage) => {
        if(deletedPage) {
          this.router.navigate(['/user/'+this.userId+'/website/'+this.websiteId+'/page/']);
        }
      });    
  }
}
