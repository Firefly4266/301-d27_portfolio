'use strict';

var app = app || {};

(function(module){
  const repoView = {};
  const choice = function() {
    let $info = $('#info');
    $info.find('ul').empty();
    $('.tab-value').hide();
    $info.show();
  };
  const render = Handlebars.compile($('#repo-template').text());
  repoView.index = function() {
    choice();
    $('#info ul').append(app.repos.with('name').map(render)
    );  
  };

  module.repoView = repoView;
})(app);