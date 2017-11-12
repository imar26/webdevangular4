import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

// injecting service into module
@Injectable()

export class WebsiteService {
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
		let length = this.websites.length;
		website._id = (length + 1).toString();
		website.developerId = userId;
		website.createdOn = Date.now();
		this.websites.push(website);
		return website;
	}

	findWebsitesByUser(userId: string) {
		var listWebsites = [];
		for (let x=0; x < this.websites.length; x++) {
			if(this.websites[x].developerId === userId) {
				listWebsites.push(this.websites[x]);				
			}
		}
		return listWebsites;		
	}

	findWebsiteById(websiteId: string) {
		for (let x=0; x < this.websites.length; x++) {
			if(this.websites[x]._id === websiteId) {
				return this.websites[x];
			}
		}
	}

	updateWebsite(websiteId: string, website: any) {
		for (let x=0; x < this.websites.length; x++) {
			if(this.websites[x]._id === websiteId) {
				this.websites[x].name = website.name;
				this.websites[x].description = website.description;
				return this.websites[x];
			}
		}
	}

	deleteWebsite(websiteId: string) {
		for (let x=0; x < this.websites.length; x++) {
			if(this.websites[x]._id === websiteId) {
				this.websites.splice(x,1);
				return true;
			}
		}
	}
}