import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { WidgetService } from '../../../../services/widget.service.client';

@Component({
  selector: 'app-widget-image-new',
  templateUrl: './widget-image-new.component.html',
  styleUrls: ['./widget-image-new.component.css']
})
export class WidgetImageNewComponent implements OnInit {
  @ViewChild('f') imageForm: NgForm;
  //properties
  userId: string;
  websiteId: string;
  pageId: string;
  widgetType: string;
  widgetName: string;
  text: string;
  url: string;
  width: string;
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

  createImage() {
    this.text = this.imageForm.value.text;
    this.url = this.imageForm.value.url;
    this.width = this.imageForm.value.width;

    this.widget['widgetType'] = this.widgetName;
    this.widget['text'] = this.text;
    this.widget['size'] = null;
    this.widget['width'] = this.width;
    this.widget['url'] = this.url;

    this.widgetService.createWidget(this.pageId, this.widget)
      .subscribe((widget) => {
        if(widget) {
          this.router.navigate(['/user/'+this.userId+'/website/'+this.websiteId+'/page/'+this.pageId+'/widget/']);
        }
      });  
  }

}
