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
  
  app.directive('mainMenu', function() {
    
    
    return {
      restrict: 'E',
      templateUrl: 'aston/templates/main-menu.html',
      controller: function($scope) {

        $scope.page = 'home';

        this.setPage = function(newPage) {
          $scope.page = newPage;
        };

        this.isSet = function(currentPage) {
          return $scope.page === currentPage;
        };

      },
      controllerAs: 'menuCtrl'
    };
    
  });
  
  
  
  
})();