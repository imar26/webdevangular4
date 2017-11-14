import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { WidgetService } from '../../../../services/widget.service.client';

@Component({
  selector: 'app-widget-header-new',
  templateUrl: './widget-header-new.component.html',
  styleUrls: ['./widget-header-new.component.css']
})
export class WidgetHeaderNewComponent implements OnInit {
  @ViewChild('f') headerForm: NgForm;
  //properties
  userId: string;
  websiteId: string;
  pageId: string;
  widgetType: string;
  widgetName: string;
  text: string;
  size: string;
  widget = {};

  constructor(private router:Router, private activatedRoute: ActivatedRoute, private widgetService: WidgetService) { }

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

  createHeader() {
    this.text = this.headerForm.value.text;
    this.size = this.headerForm.value.size;

    this.widget['widgetType'] = this.widgetName;
    this.widget['text'] = this.text;
    this.widget['size'] = this.size;
    this.widget['width'] = null;
    this.widget['url'] = null;

    let widget = this.widgetService.createWidget(this.pageId, this.widget);
    if(widget) {
      this.router.navigate(['/user/'+this.userId+'/website/'+this.websiteId+'/page/'+this.pageId+'/widget/']);
    }
  }

}
