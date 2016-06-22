myApp.controller('ProductController', function ($scope, ProductFactory){
  // we don't need a factory for this demo, it wouldn't make a difference if we did.
    $scope.products = [];
    ProductFactory.index(function(data){
      $scope.products = data
    })


    $scope.AddProduct = function () {
      ProductFactory.createProduct($scope.newProduct, function () {
        ProductFactory.index(function (data) {
          $scope.products = data
        })
      });
      $scope.newProduct = {}
    }


  })
