'use strict';

var app = app || {};

(function(module) {
  const infoController = {};
  infoController.index = () => {
    // $('.tab-value').hide();
    $('#info').show();
    app.repos.requestRepos(app.repoView.index);
  };
  module.infoController = infoController; 
})(app);