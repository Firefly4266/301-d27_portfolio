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
  // $newArticle.find('time[pubdate]').html(this.date);
  $newArticle.find('.body').html(this.body);
  // $newArticle.find('.author').text(this.author);
  // $newArticle.find('time[pubdate]').attr('datetime', this.date);
  // $newArticle.find('time[pubdate]').attr('title', this.date);
  // $newArticle.find('time').html('about ' + parseInt((new Date() - new Date(this.date)) / 60 / 60 / 24 / 1000) + ' days ago');
  return $newArticle;
};
locationData.forEach(function(locationObject){
  locations.push(new Location(locationObject));
});

locations.forEach(function(location){
  $('#locations').append(location.toHtml);
});