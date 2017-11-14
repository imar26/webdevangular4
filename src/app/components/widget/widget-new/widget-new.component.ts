import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-widget-new',
  templateUrl: './widget-new.component.html',
  styleUrls: ['./widget-new.component.css']
})
export class WidgetNewComponent implements OnInit {
  //properties
  userId: string;
  websiteId: string;
  pageId: string;
  widgetType: string;
  widgetName: string;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      params => {
        this.userId = params['userId'];
        this.websiteId = params['websiteId'];
        this.pageId = params['pageId'];
        this.widgetType = params['widgetType'];
      }
    );
    
    if(this.widgetType == 'header') {
      this.widgetName = 'HEADING';
    } else if(this.widgetType == 'html') {
      this.widgetName = 'HTML';
    } else if(this.widgetType == 'image') {
      this.widgetName = 'IMAGE';
    } else if(this.widgetType == 'youtube') {
      this.widgetName = 'YOUTUBE';
    }
  }

}
