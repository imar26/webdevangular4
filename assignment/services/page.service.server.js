module.exports = function(app) {
    app.post('/api/website/:websiteId/page', createPage);
    app.get('/api/website/:websiteId/page', findPagesByWebsiteId);
    app.get('/api/page/:pageId', findPageByPageId);
    app.put('/api/page/:pageId', updatePage);
    app.delete('/api/page/:pageId', deletePage);

    pages = [
        { "_id": "321", "name": "Post 1", "websiteId": "456", "description": "Lorem" },
        { "_id": "432", "name": "Post 2", "websiteId": "456", "description": "Lorem" },
        { "_id": "543", "name": "Post 3", "websiteId": "456", "description": "Lorem" }
    ];

    function createPage(req, res) {
        var websiteId = req.params.websiteId;
        var page = req.body;
        let length = pages.length;
		page._id = (length + 1).toString();
		page.websiteId = websiteId;
		pages.push(page);
		res.json(page);
    }
    
    function findPagesByWebsiteId(req, res) {
        var websiteId = req.params.websiteId;
        let pagesList = [];
		for (let x=0; x < pages.length; x++) {
			if(pages[x].websiteId === websiteId) {
				pagesList.push(pages[x]);
			}
		}
		res.json(pagesList);
    }

    function findPageByPageId(req, res) {
        var pageId = req.params.pageId;
        for (let x=0; x < pages.length; x++) {
			if(pages[x]._id === pageId) {
				res.json(pages[x]);
			}
		}
    }

    function updatePage(req, res) {
        var pageId = req.params.pageId;
        var page = req.body;
        for (let x=0; x < pages.length; x++) {
			if(pages[x]._id === pageId) {
				pages[x].name = page.name;
				pages[x].description = page.description;
			}
			res.json(pages[x]);
		}
    }

    function deletePage(req, res) {
        var pageId = req.params.pageId;
        for (let x=0; x < pages.length; x++) {
			if(pages[x]._id === pageId) {
				pages.splice(x,1);
				res.sendStatus(200);
			}
		}
    }
};