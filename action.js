'use strict';

var articleView = {};

articleView.populateFilters = function() {
  $('article').not('.template').each(function() {
    var template = $('template').html();
    var val = $(this).attr('data-city');
    console.log($(this).attr('data-city'));
    
    var optionTag = '<option value="' + val + '">' + val + '</option>';
    $('#city-filter').append(optionTag);
  });
};

articleView.populateFilters();
