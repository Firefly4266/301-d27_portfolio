'use strict';

var app = app || {};

page('/', app.articleController.index);
page('/info', app.infoController.index);

page();