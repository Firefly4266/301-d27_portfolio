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

articleView.handleNav = () => {
  $('.nav').on('click', '.tab', function(e) {
    e.preventDefault;
    $('.tab-value').hide();
    $('#' + $(this).data('value')).show();
  });
};

articleView.initIndexPage = () => {
  City.all.forEach((city) => {
    $('#cities').append(city.toHtml());
  });  
  articleView.handleCityFilter();
  articleView.populateFilters();
  articleView.handleNav();
};


