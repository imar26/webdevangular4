module.exports = function(app) {
    app.post('/api/user', createUser);
    app.get('/api/user', findUser);
    app.get('/api/user/:userId', findUserById);
    app.put('/api/user/:userId', updateUser);
    app.delete('/api/user/:userId', deleteUser);
    
    var users = [
		{_id: "123", username: "alice",    password: "alice",    firstName: "Alice",  lastName: "Wonder", email: ""  },
		{_id: "234", username: "bob",      password: "bob",      firstName: "Bob",    lastName: "Marley", email: ""  },
		{_id: "345", username: "charly",   password: "charly",   firstName: "Charly", lastName: "Garcia", email: ""  },
		{_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose",   lastName: "Annunzi", email: "" }
    ];
    
    function findUser(req, res) {
        var username = req.query.username;
        var password = req.query.password;
        if(username && password) {
            var user = findUserByCredentials(username, password);
            if(user) {
                res.json(user);                
            } else {
                res.sendStatus(404);
            }
        } else if(username) {
            var user = findUserByUsername(username);
            if(user) {
                res.json(user);                
            } else {
                res.sendStatus(404);
            }
        }
    }

    function findUserByCredentials(username, password) {
        for (let x=0; x < users.length; x++) {
			if(users[x].username === username && users[x].password === password) {
				return users[x];
			}
		}
    }

    function findUserByUsername(username) {
        for (let x=0; x < users.length; x++) {
			if(users[x].username === username) {
				return users[x];
			}
		}
    }

    function createUser(req, res) {
        let length = users.length;
        var user = req.body;
	    user._id = (length + 1).toString();
	    users.push(user);
		res.json(user);
    }
    
    function findUserById(req, res) {
        var userId = req.params.userId;
        for (let x = 0; x < users.length; x++) {
	    	if (users[x]._id === userId) {
				res.json(users[x]);
	    	}
		}
    }
    
    function updateUser(req, res) {
        var userId = req.params.userId;
        var user = req.body;
        for (let x=0; x < users.length; x++) {
			if(users[x]._id === userId) {
				users[x].firstName = user.firstName;
				users[x].lastName = user.lastName;
				users[x].email = user.email;
				res.json(users[x]);
			}
		}
    }
    
    function deleteUser(req, res) {
        var userId = req.params.userId;
        console.log(userId);
        // for (let x=0; x < users.length; x++) {
		// 	if(users[x]._id === userId) {
		// 		users.splice(x, 1);
		// 		res.sendStatus(200);
		// 	}
		// }
    }
};