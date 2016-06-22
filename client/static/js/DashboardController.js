myApp.controller('DashboardController', function ($scope, customerFactory, OrderFactory, ProductFactory, moment){
  // we don't need a factory for this demo, it wouldn't make a difference if we did.
    $scope.customers = [];
    customerFactory.index(function(data){
      $scope.customers = data
    })

    $scope.products = [];
    ProductFactory.index(function(data){
      $scope.products = data
    })

    $scope.orders= [];
    OrderFactory.index(function (data) {
      $scope.orders = data
    })

  })
