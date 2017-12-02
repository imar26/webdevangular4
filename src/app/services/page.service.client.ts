import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

// injecting service into module
@Injectable()

export class PageService {
	constructor(private http: Http) {}
	baseUrl = environment.baseUrl;
	
	pages = [
	  	{ "_id": "321", "name": "Post 1", "websiteId": "456", "description": "Lorem" },
	  	{ "_id": "432", "name": "Post 2", "websiteId": "456", "description": "Lorem" },
	  	{ "_id": "543", "name": "Post 3", "websiteId": "456", "description": "Lorem" }
	];

	api = {
		'createPage' : this.createPage,
		'findPageByWebsiteId' : this.findPageByWebsiteId,
		'findPageById' : this.findPageById,
		'updatePage' : this.updatePage,
		'deletePage' : this.deletePage
	};

	createPage(websiteId: string, page: any) {
		return this.http.post(this.baseUrl + '/api/website/' + websiteId + '/page', page)
			.map((response: Response) => {
				return response.json();
			});
	}

	findPageByWebsiteId(websiteId: string) {		
		return this.http.get(this.baseUrl + '/api/website/' + websiteId + '/page')
		.map((response: Response) => {
			return response.json();
		});
	}

	findPageById(pageId: string) {
		return this.http.get(this.baseUrl + '/api/page/' + pageId)
			.map((response: Response) => {
				return response.json();
			});
	}

	updatePage(pageId: string, page: any) {
		return this.http.put(this.baseUrl + '/api/page/' + pageId, page)
			.map((response: Response) => {
				return response.json();
			});
	}

	deletePage(pageId: string) {
		return this.http.delete(this.baseUrl + '/api/page/' + pageId)
			.map((response: Response) => {
				return {};
			});
	}
}