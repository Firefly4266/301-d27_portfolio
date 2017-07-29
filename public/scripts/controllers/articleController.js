'use strict';

var app = app || {};

(function(module) {
  const articleController = {}; 
  articleController.index = () => {
    $('.tab-value').hide();
    $('#cities').show();
  };
  module.articleController = articleController;
})(app);