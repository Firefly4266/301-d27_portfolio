'use strict';

var app = app || {};

(function(module) {
  const articleController = {}; 
  articleController.index = () => {
    app.City.fetchAll(app.articleView.initIndexPage);
    $('.tab-value').hide();
    $('#cities').show();
  };
  module.articleController = articleController;
})(app);