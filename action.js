'use strict';

var articleView = {};

articleView.populateFilters = function() {
  $('article').not('.template').each(function() {
    var template = $('.template').html();    
    var val = $(this).attr('data-city');
    var optionTag = `<option value="${val}">${val}</option>`;
    /*This conditional checks to see if the current value is the same as the value we are on.
    if so it will not append it so no dupe in the option tag*/
    if($(`#city-filter option[value="${val}"]`).length === 0) {
      $('#city-filter').append(optionTag);
    }
  });
};

articleView.handleCityFilter = function() {
  $('article.template').hide();
  $('#city-filter').on('change', function(){    
    if($(this).val()){
      $('article').hide();    
      $(`article[data-city="${$(this).val()}"]`).show();
    }else {
      $('article').show();
      $('article.template').hide();
    }
  });
};

$(document).ready(function() {
  articleView.handleCityFilter();
  articleView.populateFilters();
});
