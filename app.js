'use strict';

var locations = [];

function Location(localData) {
  this.date = localData.date;
  this.category = localData.category;
  this.city = localData.city;
  this.inspiration = localData.inspiration;
  this.body = localData.body;
  this.author = localData.author;
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