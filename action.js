'use strict';

var articleView = {};

articleView.populateFilters = function() {
  var template = $('template').html();
  console.log(template); 
  $('article').each(function(entry) {
    // var optionTag, city;
    var existiingEntry = new Entry({
      body = entry.body,
      inspiration = entry.inspiration
    });
  });
}

articleView.populateFilters();
