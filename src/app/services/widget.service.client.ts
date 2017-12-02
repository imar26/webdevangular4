import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

// injecting service into module
@Injectable()

export class WidgetService {
	constructor(private http: Http){}
	baseUrl = environment.baseUrl;
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
		return this.http.post(this.baseUrl + '/api/page/' + pageId + '/widget', widget)
			.map((response: Response) => {
				return response.json();
			});
	}

	findWidgetsByPageId(pageId: string) {
		return this.http.get(this.baseUrl + '/api/page/' + pageId + '/widget')
			.map((response: Response) => {
				return response.json();
			});
	}

	findWidgetById(widgetId: string) {
		return this.http.get(this.baseUrl + '/api/widget/' + widgetId)
			.map((response: Response) => {
				return response.json();
			});
	}

	updateWidget(widgetId: string, widget: any) {
		return this.http.put(this.baseUrl + '/api/widget/' + widgetId, widget)
			.map((response: Response) => {
				return response.json();
			});
	}

	deleteWidget(widgetId: string) {
		return this.http.delete(this.baseUrl + '/api/widget/' + widgetId)
			.map((response: Response) => {
				return {};
			});
	}
}