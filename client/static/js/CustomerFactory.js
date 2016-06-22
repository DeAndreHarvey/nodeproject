myApp.factory('customerFactory', function ($http){
  // The factory is nothing more than a function that returns an object
  var customers = []
  var factory = {};
  // Add a getStudents key to the factory object with a value of a function.
  factory.index = function(callback) {
  // Where do we get access to $http?
    $http.get('/customers').success(function(output) {
        customers = output;
        callback(customers);
      })
  }
  // note the use of callbacks!
  // Restful syntax: create = add one to that object
  factory.create = function(info, callback) {
    $http.post('/customers',info).success(function() {
      console.log('test');
      callback();
    })
}
  factory.destroy =function (id, callback) {
    $http.delete('/customers/'+id).success(function() {
      console.log('test2');
      callback();
    })
  }
  return factory;
});
