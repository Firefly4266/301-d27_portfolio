'use strict';

var articleView = {};

articleView.populateFilters = function() {
  $('article').not('.template').each(function() {
    var template = $('template').html();
    console.log($('.template')); 
    var val = $(this).find();
  });
};

articleView.populateFilters();
