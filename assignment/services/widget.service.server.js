module.exports = function(app) {
    app.post('/api/user/:userId/website/:websiteId/page/:pageId/widget', createWidget);
    app.get('/api/user/:userId/website/:websiteId/page/:pageId/widget', findWidgetsByPageId);
    app.get('/api/user/:userId/website/:websiteId/page/:pageId/widget/:widgetId', findWidgetByWidgetId);
    app.put('/api/user/:userId/website/:websiteId/:pageId/widget/:widgetId', updateWidget);
    app.delete('/api/user/:userId/website/:websiteId/:pageId/widget/:widgetId', deleteWidget);
};