myApp.factory('ProductFactory', function ($http){
// The factory is nothing more than a function that returns an object
var products = []
var factory = {};
// Add a getStudents key to the factory object with a value of a function.
factory.index = function (callback){
  $http.get('/products').success(function(output) {
    products = output;
    callback(products);
  })
  }
factory.createProduct= function (product,callback) {
  console.log(product);
  $http.post('/products',product).success(function() {
    callback();
  })
}
return factory;
});
