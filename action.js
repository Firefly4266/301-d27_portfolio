'use strict';

var articleView = {};

articleView.populateFilters = function() {
  $('article').each(function() {
    var optionTag, city;
