module.exports = function(app) {
    app.post('/api/user/:userId/website/:websiteId/page', createPage);
    app.get('/api/user/:userId/website/:websiteId/page', findPagesByWebsiteId);
    app.get('/api/user/:userId/website/:websiteId/page/:pageId', findPageByPageId);
    app.put('/api/user/:userId/website/:websiteId/:pageId', updatePage);
    app.delete('/api/user/:userId/website/:websiteId/:pageId', deletePage);
};