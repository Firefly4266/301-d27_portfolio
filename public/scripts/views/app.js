'use strict';

var app = app || {};

(function(module){
  function City(rawDataObj) {
    this.date = rawDataObj.date;
    this.category = rawDataObj.category;
    this.city = rawDataObj.city;
    this.inspiration = rawDataObj.inspiration;
    this.body = rawDataObj.body;
    this.author = rawDataObj.author;
  }

  City.all = [];

  City.prototype.toHtml = function() {
    var template = Handlebars.compile($('#article-template').text());
    // TODO: this.body = marked(this.body);
    return template(this);
  };

  City.loadAll = function(rawData) {
    rawData.forEach(function(ele){
      City.all.push(new City(ele));
    });
  };

  City.numWordsAll = () => {
    return City.all.map(City => City.body.match(/\b\w+/g).length)
                      .reduce((a, b) => a + b);                      
  };

  City.fetchAll = function(){
    if (localStorage.rawData) {
      City.loadAll(JSON.parse(localStorage.rawData));
      app.articleView.initIndexPage();
    }else {    
      $.getJSON('/contents/contents.json')
      .then(function(rawData) {
        City.loadAll(rawData);
        localStorage.rawData = JSON.stringify(rawData);
        app.articleView.initIndexPage();
      }, function(err){
        console.error(err);
      });
    }
  };
  module.City = City;
})(app);






