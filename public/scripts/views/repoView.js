'use strict';

var app = app || {};

(function(module){
  const repoView = {};
  const choice = function() {
    let $info = $('#info');
    $info.find('ul').empty();
    $info.show().siblings().hide();
  };
  const render = Handlebars.compile($('#repo-template').text());
  repoView.index = function() {
    choice();
  };

  module.repoView = repoView;
})(app);