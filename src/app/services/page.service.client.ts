import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

// injecting service into module
@Injectable()

export class PageService {
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
		let length = this.pages.length;
		page._id = (length + 1).toString();
		page.websiteId = websiteId;
		this.pages.push(page);
		return page;
	}

	findPageByWebsiteId(websiteId: string) {
		let pagesList = [];
		for (let x=0; x < this.pages.length; x++) {
			if(this.pages[x].websiteId === websiteId) {
				pagesList.push(this.pages[x]);
			}
		}
		return pagesList;
	}

	findPageById(pageId: string) {
		for (let x=0; x < this.pages.length; x++) {
			if(this.pages[x]._id === pageId) {
				return this.pages[x];
			}
		}
	}

	updatePage(pageId: string, page: any) {
		for (let x=0; x < this.pages.length; x++) {
			if(this.pages[x]._id === pageId) {
				this.pages[x].name = page.name;
				this.pages[x].description = page.description;
			}
			return this.pages[x];
		}
	}

	deletePage(pageId: string) {
		for (let x=0; x < this.pages.length; x++) {
			if(this.pages[x]._id === pageId) {
				this.pages.splice(x,1);
				return true;
			}
		}
	}
}