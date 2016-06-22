myApp.factory('OrderFactory', function ($http){
// The factory is nothing more than a function that returns an object
var orders = [];
var factory = {};
// Add a getStudents key to the factory object with a value of a function.
factory.index = function (callback){
  $http.get('/orders').success(function(output) {
    orders = output;
    callback(orders);
  })
  }
factory.createOrder= function (order,callback) {
  console.log(order);
  $http.post('/orders',order).success(function() {
    callback();
  })
}
return factory;
});
