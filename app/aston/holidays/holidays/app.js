(function() {
  
  var app = angular.module('holidays', []);
  
  app.controller('holidaysListController', ['$http', function($http) {
    
    var holidays = this;
    holidays.list = {};
    
    $http.get('http://holidayapi.com/v1/holidays?country=FR&year=2016')
      .success(function(data) {
        holidays.list = data.holidays;
      })
      .error(function() {
        alert('Les données n\'ont pas été récupérées !');
      });
    
  }]);
  
  
})();