module.exports = function(app) {
    app.post('/api/page/:pageId/widget', createWidget);
    app.get('/api/page/:pageId/widget', findWidgetsByPageId);
    app.get('/api/widget/:widgetId', findWidgetByWidgetId);
    app.put('/api/widget/:widgetId', updateWidget);
    app.delete('/api/widget/:widgetId', deleteWidget);

    widgets = [
        { "_id": "123", "widgetType": "HEADING", "pageId": "321", "size": "2", "text": "GIZMODO", "width": null, "url": null},
        { "_id": "234", "widgetType": "HEADING", "pageId": "321", "size": "4", "text": "Lorem ipsum", "width": null, "url": null},
        { "_id": "345", "widgetType": "IMAGE", "pageId": "321", "width": "100", "url": "http://lorempixel.com/400/200/", "size": null, "text": null},
        { "_id": "456", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum - <a>CLick here</a></p>", "width": null, "url": null, "size": null},
        { "_id": "567", "widgetType": "HEADING", "pageId": "321", "size": "4", "text": "Lorem ipsum", "width": null, "url": null},
        { "_id": "678", "widgetType": "YOUTUBE", "pageId": "321", "width": "100", "url": "https://www.youtube.com/embed/AM2Ivdi9c4E", "size": null, "text": null},
        { "_id": "789", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>", "width": null, "url": null, "size": null}
    ];

    function createWidget(req, res) {
        var pageId = req.params.pageId;
        var widget = req.body;
        let length = widgets.length;
		widget._id = (length + 1).toString();
		widget.pageId = pageId;
		widgets.push(widget);
		res.json(widgets);
    }

    function findWidgetsByPageId(req, res) {
        var pageId = req.params.pageId;
        var widgetList = [];
        for (let x=0; x < widgets.length; x++) {
            if(widgets[x].pageId === pageId) {
                widgetList.push(widgets[x]);
            }
        }
        res.json(widgetList);
    }

    function findWidgetByWidgetId(req, res) {
        var widgetId = req.params.widgetId;
        for (let x=0; x < widgets.length; x++) {
			if(widgets[x]._id === widgetId) {
				res.json(widgets[x]);
			}
		}
    }

    function updateWidget(req, res) {
        var widgetId = req.params.widgetId;
        var widget = req.body;
        for (let x=0; x < widgets.length; x++) {
			if(widgets[x]._id === widgetId) {
				if(widgets[x].widgetType == 'HEADING') {
					widgets[x].text = widget.text;
					widgets[x].size = widget.size;
					widgets[x].width = null;					
					widgets[x].url = null;
				} else if(widgets[x].widgetType == 'HTML') {
					widgets[x].text = widget.text;
					widgets[x].size = null;
					widgets[x].width = null;					
					widgets[x].url = null;
				} else if(widgets[x].widgetType == 'IMAGE') {
					widgets[x].width = widget.width;					
					widgets[x].url = widget.url;	
					widgets[x].text = widget.text;					
					widgets[x].size = null;				
				} else if(widgets[x].widgetType == 'YOUTUBE') {
					widgets[x].width = widget.width;					
					widgets[x].url = widget.url;
					widgets[x].text = widget.text;					
					widgets[x].size = null;
                }
                res.json(widgets[x]);
			}
		}
    }

    function deleteWidget(req, res) {
        var widgetId = req.params.widgetId;
        for (let x=0; x < widgets.length; x++) {
			if(widgets[x]._id === widgetId) {
				widgets.splice(x,1);
				res.sendStatus(200);
			}
		}
    }

};