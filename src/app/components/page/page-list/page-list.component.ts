import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PageService } from '../../../services/page.service.client';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {
  //properties
  userId: string;
  websiteId: string;
  pages = [{}];
  constructor(private activatedRoute: ActivatedRoute, private pageService: PageService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      params => {
        this.userId = params['userId'];
        this.websiteId = params['websiteId'];
      }
    );

    this.pageService.findPageByWebsiteId(this.websiteId)
      .subscribe((pages) => {
        this.pages = pages;
      });
  }

}
