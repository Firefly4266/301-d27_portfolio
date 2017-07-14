'use strict';

var locations = [];

function Location(locationObj) {
  this.date = locationObj.date;
  this.category = locationObj.category;
  this.city = locationObj.city;
  this.inspiration = locationObj.inspiration;
  this.body = locationObj.body;
  this.author = locationObj.author;
}


Location.prototype.toHtml = function() {
  var $newArticle = $('article.template').clone();
  $newArticle.removeClass('template');
  $newArticle.find('.body').html(this.body);
  return $newArticle;
};
locationData.forEach(function(locationObject){
  locations.push(new Location(locationObject));
});

locations.forEach(function(location){
  $('#locations').append(location.toHtml);
});