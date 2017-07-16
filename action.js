'use strict';

var articleView = {};

articleView.populateFilters = function() {
  $('article').not('.template').each(function() {
    var template = $('template').html();
    var val = $(this).find();
  });
};

articleView.populateFilters();
