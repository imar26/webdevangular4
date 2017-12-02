import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

// injecting service into module
@Injectable()

export class WebsiteService {
	constructor(private http: Http) {}
	baseUrl = environment.baseUrl;
	websites = [
	  	{ "_id": "123", "name": "Facebook", "developerId": "456", "description": "Lorem", "createdOn": "1/2/2017" },
	  	{ "_id": "234", "name": "Tweeter", "developerId": "456", "description": "Lorem", "createdOn": "1/2/2017" },
	  	{ "_id": "456", "name": "Gizmodo", "developerId": "456", "description": "Lorem", "createdOn": "1/2/2017" },
	  	{ "_id": "890", "name": "Go", "developerId": "123", "description": "Lorem", "createdOn": "1/2/2017" },
	  	{ "_id": "567", "name": "Tic Tac Toe", "developerId": "123", "description": "Lorem", "createdOn": "1/2/2017" },
	  	{ "_id": "678", "name": "Checkers", "developerId": "123", "description": "Lorem", "createdOn": "1/2/2017" },
	  	{ "_id": "789", "name": "Chess", "developerId": "234", "description": "Lorem", "createdOn": "1/2/2017" }
	];

	api = {
		'createWebsite' : this.createWebsite,
		'findWebsitesByUser' : this.findWebsitesByUser,
		'findWebsiteById' : this.findWebsiteById,
		'updateWebsite' : this.updateWebsite,
		'deleteWebsite' : this.deleteWebsite
	};

	createWebsite(userId: string, website: any) {
		return this.http.post(this.baseUrl + '/api/user/' + userId + '/website', website)
			.map((response: Response) => {
				return response.json();
			});
	}

	findWebsitesByUser(userId: string) {
		return this.http.get(this.baseUrl + '/api/user/' + userId + '/website')
			.map((response: Response) => {
				return response.json();
			});	
	}

	findWebsiteById(websiteId: string) {
		return this.http.get(this.baseUrl + '/api/website/' + websiteId)
			.map((response: Response) => {
				return response.json();
			});
	}

	updateWebsite(websiteId: string, website: any) {
		return this.http.put(this.baseUrl + '/api/website/' + websiteId, website)
			.map((response: Response) => {
				return response.json();
			});
	}

	deleteWebsite(websiteId: string) {
		return this.http.delete(this.baseUrl + '/api/website/' + websiteId)
			.map((response: Response) => {
				return {};
			});
	}
}