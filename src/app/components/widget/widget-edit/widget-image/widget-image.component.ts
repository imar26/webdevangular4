import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { WidgetService } from '../../../../services/widget.service.client';

@Component({
  selector: 'app-widget-image',
  templateUrl: './widget-image.component.html',
  styleUrls: ['./widget-image.component.css']
})
export class WidgetImageComponent implements OnInit {
  //properties
  userId: string;
  websiteId: string;
  pageId: string;
  widgetId: string;
  widget: {};
  constructor(private router:Router, private widgetService: WidgetService, private activatedRoute: ActivatedRoute) { }

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
      });
  }

  update(widget) {
    this.widgetService.updateWidget(this.widgetId, widget)
      .subscribe((updateWidget) => {
        if(updateWidget) {
          this.router.navigate(['/user/'+this.userId+'/website/'+this.widgetId+'/page/'+this.pageId+'/widget']);
        }
      });
  }

  delete(widgetId) {
    this.widgetService.deleteWidget(widgetId)
      .subscribe((deletedWidget) => {
        if(deletedWidget) {
          this.router.navigate(['/user/'+this.userId+'/website/'+this.widgetId+'/page/'+this.pageId+'/widget']);
        }
      });
  }

}
