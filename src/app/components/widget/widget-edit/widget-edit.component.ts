import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WidgetService } from '../../../services/widget.service.client';

@Component({
  selector: 'app-widget-edit',
  templateUrl: './widget-edit.component.html',
  styleUrls: ['./widget-edit.component.css']
})
export class WidgetEditComponent implements OnInit {
  //properties
  userId: string;
  websiteId: string;
  pageId: string;
  widgetId: string;
  widgetName: string;
  widget: {};
  constructor(private activatedRoute: ActivatedRoute, private widgetService: WidgetService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      params => {
        this.userId = params['userId'];
        this.websiteId = params['websiteId'];
        this.pageId = params['pageId'];
        this.widgetId = params['widgetId'];
      }
    );
    
    this.widgetService.findWidgetById(this.widgetId)
      .subscribe((widget) => {
        this.widget = widget;
        if(this.widget['widgetType'] == 'HEADING') {
          this.widgetName = 'header';
        } else if(this.widget['widgetType'] == 'HTML') {
          this.widgetName = 'html';
        } else if(this.widget['widgetType'] == 'IMAGE') {
          this.widgetName = 'image';
        } else if(this.widget['widgetType'] == 'YOUTUBE') {
          this.widgetName = 'youtube';
        }
      });    
  }

}
