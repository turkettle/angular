(function() {
  
  var app = angular.module('aston', [
    'ngRoute',
    'gemStore',
//    'holidays',
  ]);
  
  app.config(['$routeProvider', function($routeProvider) {
    
    $routeProvider
      .when(
        '/',
        {
          templateUrl: 'aston/gemStore/gemStore/templates/store.html',
          controller: 'StoreController',
          controllerAs: 'store',
        }
      )
//      .when(
//        '/holidays',
//        {
//          templateUrl: '',
//          controller: '',
//          controllerAs: '',
//        }
//      )
      .when(
        '/404',
        {
          templateUrl: '404.html',
        }
      )
      .otherwise({
        redirectTo: '/404',
    });
    
  }]);
  
  
  
  
})();