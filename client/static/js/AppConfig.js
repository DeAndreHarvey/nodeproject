myApp.config(function ($routeProvider) {
      $routeProvider
        .when('/',{
            templateUrl: 'partials/Dashboard.html'
        })
        .when('/orders',{
            templateUrl: 'partials/Orders.html'
        })
        .when('/customers',{
              templateUrl: 'partials/Customers.html'
          })
        .when('/products',{
            templateUrl: 'partials/Products.html'
        })
        .otherwise({
          redirectTo: '/'
        });
    });
