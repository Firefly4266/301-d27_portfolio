'use strict';

var cities = [];

function City(rawDataObj) {
  this.date = rawDataObj.date;
  this.category = rawDataObj.category;
  this.city = rawDataObj.city;
  this.inspiration = rawDataObj.inspiration;
  this.body = rawDataObj.body;
  this.author = rawDataObj.author;
}

City.prototype.toHtml = function() {
  var template = Handlebars.compile($('#article-template').text());
  return template(this);
};

rawData.forEach(function(rawDataObject){
  cities.push(new City(rawDataObject));
});

cities.forEach(function(city){
  $('#cities').append(city.toHtml());
});




