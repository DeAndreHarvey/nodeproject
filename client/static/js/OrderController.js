myApp.controller('OrderController', function ($scope, customerFactory, OrderFactory, ProductFactory){
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
    $scope.newOrder = function () {
      OrderFactory.createOrder($scope.order, function () {
        OrderFactory.index(function (data) {
          $scope.orders = data
        })
      });
      $scope.order = {}
    }


  })

  
