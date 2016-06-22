myApp.controller('CustomersController', function ($scope, customerFactory){
    $scope.dup_msg = "";
    $scope.customers = [];

    customerFactory.index(function(data){
      $scope.customers = data
    })

    $scope.AddnewCustomer= function () {
      if($scope.isDouble()){
      $scope.dup_msg = "can\'t add the name because it is already used!";
    }
    else{
      customerFactory.create($scope.newCustomer,function () {
        customerFactory.index(function(data){
          $scope.customers = data
        })
      })
    };
      $scope.newCustomer ={};
    }
    $scope.DeleteCustomer = function (id) {
      customerFactory.destroy(id, function () {
        customerFactory.index(function(data){
          $scope.customers = data
        })
      });
    }

    $scope.isDouble = function(){
      for(var i=0;i<$scope.customers.length;i++){
        if($scope.newCustomer !== undefined){
          if($scope.newCustomer.name == $scope.customers[i].name){
            $scope.dup_msg = "name is already used!";
            return true;
          }
        }
      }
      return false;
    }
  })
