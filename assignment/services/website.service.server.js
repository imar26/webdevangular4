module.exports = function(app) {
    app.post('/api/user/:userId/website', createWebsite);
    app.get('/api/user/:userId/website', findWebsitesByUserId);
    app.get('/api/website/:websiteId', findWebsiteByWebsiteId);
    app.put('/api/website/:websiteId', updateWebsite);
    app.delete('/api/website/:websiteId', deleteWebsite);

    websites = [
        { "_id": "123", "name": "Facebook", "developerId": "456", "description": "Lorem", "createdOn": "1/2/2017" },
        { "_id": "234", "name": "Tweeter", "developerId": "456", "description": "Lorem", "createdOn": "1/2/2017" },
        { "_id": "456", "name": "Gizmodo", "developerId": "456", "description": "Lorem", "createdOn": "1/2/2017" },
        { "_id": "890", "name": "Go", "developerId": "123", "description": "Lorem", "createdOn": "1/2/2017" },
        { "_id": "567", "name": "Tic Tac Toe", "developerId": "123", "description": "Lorem", "createdOn": "1/2/2017" },
        { "_id": "678", "name": "Checkers", "developerId": "123", "description": "Lorem", "createdOn": "1/2/2017" },
        { "_id": "789", "name": "Chess", "developerId": "234", "description": "Lorem", "createdOn": "1/2/2017" }
    ];

    function createWebsite(req, res) {
        var userId = req.params.userId;
        var website = req.body;
        let length = websites.length;
		website._id = (length + 1).toString();
		website.developerId = userId;
		website.createdOn = Date.now();
		websites.push(website);
		res.json(websites);
    }

    function findWebsitesByUserId(req, res) {
        var userId = req.params.userId;
        var listWebsites = [];
		for (let x=0; x < websites.length; x++) {
			if(websites[x].developerId === userId) {
				listWebsites.push(websites[x]);				
			}
        }
		res.json(listWebsites);
    }

    function findWebsiteByWebsiteId(req, res) {
        var websiteId = req.params.websiteId;
        for (let x=0; x < websites.length; x++) {
			if(websites[x]._id === websiteId) {
				res.json(websites[x]);
			}
		}
    }

    function updateWebsite(req, res) {
        var websiteId = req.params.websiteId;
        var website = req.body;
        for (let x=0; x < websites.length; x++) {
			if(websites[x]._id === websiteId) {
				websites[x].name = website.name;
				websites[x].description = website.description;
				res.json(websites[x]);
			}
		}
    }

    function deleteWebsite(req, res) {
        var websiteId = req.params.websiteId;
        for (let x=0; x < websites.length; x++) {
			if(websites[x]._id === websiteId) {
				websites.splice(x,1);
				res.sendStatus(200);
			}
		}
    }
};