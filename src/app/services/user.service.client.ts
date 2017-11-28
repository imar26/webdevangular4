import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';

// injecting service into module
@Injectable()

export class UserService {
	constructor(private http: Http){}
	baseUrl = environment.baseUrl;
	users = [
		{_id: "123", username: "alice",    password: "alice",    firstName: "Alice",  lastName: "Wonder", email: ""  },
		{_id: "234", username: "bob",      password: "bob",      firstName: "Bob",    lastName: "Marley", email: ""  },
		{_id: "345", username: "charly",   password: "charly",   firstName: "Charly", lastName: "Garcia", email: ""  },
		{_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose",   lastName: "Annunzi", email: "" }
    ];
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
		for (let x=0; x < this.users.length; x++) {
			if(this.users[x]._id === userId) {
				this.users[x].firstName = user.firstName;
				this.users[x].lastName = user.lastName;
				this.users[x].email = user.email;
				return this.users[x];
			}
		}
	}

	deleteUser(userId: string) {
		for (let x=0; x < this.users.length; x++) {
			if(this.users[x]._id === userId) {
				this.users.splice(x, 1);
				return true;
			}
		}
	}

}