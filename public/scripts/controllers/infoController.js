'use strict';

var app = app || {};

(function(module) {
  const infoController = {};
  infoController.index = () => {
    $('.tab-value').hide();
    $('.info').show();
  };
  module.infoController = infoController; 

})(app);