import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';

// injecting service into module
@Injectable()

export class UserService {
	constructor(private http: Http){}
	baseUrl = environment.baseUrl;
	api = {
		'createUser': this.createUser,
		'findUserById' : this.findUserById,
		'findUserByUsername' : this.findUserByUsername,
		'findUserByCredentials' : this.findUserByCredentials,
		'updateUser' : this.updateUser,
		'deleteUser' : this.deleteUser
	};

	createUser(user: any) {		
		return this.http.post(this.baseUrl + '/api/user', user)
			.map((response: Response) => {
				return response.json();
			});
	}

	findUserById(userId: string) {
		return this.http.get(this.baseUrl + '/api/user/' + userId)
			.map((response: Response) => {
				return response.json();
			});
	}

	findUserByUsername(username: string) {
		return this.http.get(this.baseUrl + '/api/user/?username=' + username)
			.map((response: Response) => {
				return response.json();
			});
	}

	findUserByCredentials(username: string, password: string) {
		return this.http.get(this.baseUrl + '/api/user/?username=' + username + '&password=' + password)
			.map((response: Response) => {
				return response.json();
			});
	}

	updateUser(userId: string, user: any) {
		return this.http.put(this.baseUrl + "/api/user/"+userId, user)
			.map((response: Response) => {
				return response.json();
			});
	}

	deleteUser(userId: string) {		
		return this.http.delete(this.baseUrl + '/api/user/'+userId)
			.map((response: Response) => {
				if(response) {
					return {};
				}
			});
	}

}