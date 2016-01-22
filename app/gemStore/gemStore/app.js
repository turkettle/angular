(function(){ 
  
  var app = angular.module('gemStore', ['store-directives']);
  
  app.controller('StoreController', ['$http',function($http){
    var store = this;
    store.products = [];
    
//    http://dhg7upb7j7jqa.cloudfront.net/store-products.json
//    http://127.0.0.1/site_git/store-products.json
//    http://holidayapi.com/v1/holidays?country=FR&year=2016
    
    
    $http
      .get('http://127.0.0.1/site_git/store-products.json')
      .success(function(data) {
        store.products = data;
        console.log(store.products);
      })
      .error(function() {
        alert('Les données n\'ont pas pu être récupérées!!');
    });
    
  }]);
    
  app.controller('TabController', TabCtrl);
  
  app.controller('ReviewController', function() {
    
    this.review = {};
    this.addReview = function(product) {
      this.review.createdOn = Date.now();
      product.reviews.push(this.review);
      this.review = {};
    };
    
  });
  
  function TabCtrl() {
    
    this.tab = 1;
    
    this.setTab = function(newValue) {
      
      this.tab = newValue;
      
    };
    
    this.isSet = function(tabName) {
      
      return this.tab === tabName;
      
    };
    
  }
  
  
})();