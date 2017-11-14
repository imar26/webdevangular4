import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

// injecting service into module
@Injectable()

export class WidgetService {
	widgets = [
	 	{ "_id": "123", "widgetType": "HEADING", "pageId": "321", "size": "2", "text": "GIZMODO", "width": null, "url": null},
	 	{ "_id": "234", "widgetType": "HEADING", "pageId": "321", "size": "4", "text": "Lorem ipsum", "width": null, "url": null},
	 	{ "_id": "345", "widgetType": "IMAGE", "pageId": "321", "width": "100", "url": "http://lorempixel.com/400/200/", "size": null, "text": null},
	 	{ "_id": "456", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum - <a>CLick here</a></p>", "width": null, "url": null, "size": null},
	 	{ "_id": "567", "widgetType": "HEADING", "pageId": "321", "size": "4", "text": "Lorem ipsum", "width": null, "url": null},
	 	{ "_id": "678", "widgetType": "YOUTUBE", "pageId": "321", "width": "100", "url": "https://www.youtube.com/embed/AM2Ivdi9c4E", "size": null, "text": null},
	 	{ "_id": "789", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>", "width": null, "url": null, "size": null}
	];

	api = {
		'createWidget' : this.createWidget,
		'findWidgetsByPageId' : this.findWidgetsByPageId,
		'findWidgetById' : this.findWidgetById,
		'updateWidget' : this.updateWidget,
		'deleteWidget' : this.deleteWidget
	};

	createWidget(pageId: string, widget: any) {
		let length = this.widgets.length;
		widget._id = (length + 1).toString();
		widget.pageId = pageId;
		this.widgets.push(widget);
		return widget;
	}

	findWidgetsByPageId(pageId: string) {
		var widgetList = [];
		for (let x=0; x < this.widgets.length; x++) {
			if(this.widgets[x].pageId === pageId) {
				widgetList.push(this.widgets[x]);
			}
		}
		return widgetList;
	}

	findWidgetById(widgetId: string) {
		for (let x=0; x < this.widgets.length; x++) {
			if(this.widgets[x]._id === widgetId) {
				return this.widgets[x];
			}
		}
	}

	updateWidget(widgetId: string, widget: any) {
		for (let x=0; x < this.widgets.length; x++) {
			if(this.widgets[x]._id === widgetId) {
				if(this.widgets[x].widgetType == 'HEADING') {
					this.widgets[x].text = widget.text;
					this.widgets[x].size = widget.size;
					this.widgets[x].width = null;					
					this.widgets[x].url = null;
				} else if(this.widgets[x].widgetType == 'HTML') {
					this.widgets[x].text = widget.text;
					this.widgets[x].size = null;
					this.widgets[x].width = null;					
					this.widgets[x].url = null;
				} else if(this.widgets[x].widgetType == 'IMAGE') {
					this.widgets[x].width = widget.width;					
					this.widgets[x].url = widget.url;	
					this.widgets[x].text = widget.text;					
					this.widgets[x].size = null;				
				} else if(this.widgets[x].widgetType == 'YOUTUBE') {
					this.widgets[x].width = widget.width;					
					this.widgets[x].url = widget.url;
					this.widgets[x].text = widget.text;					
					this.widgets[x].size = null;
				}
			}
			return this.widgets[x];
		}
	}

	deleteWidget(widgetId: string) {
		for (let x=0; x < this.widgets.length; x++) {
			if(this.widgets[x]._id === widgetId) {
				this.widgets.splice(x,1);
				return true;
			}
		}
	}
}