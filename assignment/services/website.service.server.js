module.exports = function(app) {
    app.post('/api/user/:userId/website', createWebsite);
    app.get('/api/user/:userId/website', findWebsitesByUserId);
    app.get('/api/user/:userId/website/:websiteId', findWebsiteByWebsiteId);
    app.put('/api/user/:userId/website/:websiteId', updateWebsite);
    app.delete('/api/user/:userId/website/:websiteId', deleteWebsite);
};