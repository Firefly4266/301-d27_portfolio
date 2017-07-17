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
  var $newArticle = $('article.template').clone();
  $newArticle.removeClass('template');
  if(!this.date){
    $newArticle.addClass('draft'); 
  }
  $newArticle.attr('data-city', this.city);
  $newArticle.find('.body').html(this.body);
  $newArticle.find('.template h1').text(this.date);
  return $newArticle;
};

rawData.forEach(function(rawDataObject){
  cities.push(new City(rawDataObject));
});

cities.forEach(function(city){
  $('#cities').append(city.toHtml());
});




