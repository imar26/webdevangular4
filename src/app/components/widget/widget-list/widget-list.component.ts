import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { WidgetService } from '../../../services/widget.service.client';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})
export class WidgetListComponent implements OnInit {
  //properties
  userId: string;
  websiteId: string;
  pageId: string;
  widgets = [{}];
  constructor(private activatedRoute: ActivatedRoute, private router: Router, private widgetService: WidgetService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      params => {
        this.userId = params['userId'];
        this.websiteId = params['websiteId'];
        this.pageId = params['pageId'];
      }
    );

    this.widgetService.findWidgetsByPageId(this.pageId)
      .subscribe((widgets) => {
        this.widgets = widgets;
      });
  }

}
