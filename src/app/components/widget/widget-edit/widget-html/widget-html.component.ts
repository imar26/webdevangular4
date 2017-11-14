import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { WidgetService } from '../../../../services/widget.service.client';

@Component({
  selector: 'app-widget-html',
  templateUrl: './widget-html.component.html',
  styleUrls: ['./widget-html.component.css']
})
export class WidgetHtmlComponent implements OnInit {
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

    this.widget = this.widgetService.findWidgetById(this.widgetId);
  }

  update(widget) {
    let updateWidget = this.widgetService.updateWidget(this.widgetId, widget);
    if(updateWidget) {
      this.router.navigate(['/user/'+this.userId+'/website/'+this.widgetId+'/page/'+this.pageId+'/widget']);
    }
  }

  delete(widgetId) {
    let deletedWidget = this.widgetService.deleteWidget(widgetId);
    if(deletedWidget) {
      this.router.navigate(['/user/'+this.userId+'/website/'+this.widgetId+'/page/'+this.pageId+'/widget']);
    }
  }

}
