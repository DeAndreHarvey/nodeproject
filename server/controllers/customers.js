// First add the following two lines at the top of the customers controller so that we can access our model through var Customers
// need to require mongoose to be able to run mongoose.model()
var mongoose = require('mongoose');
var Customer = mongoose.model('Customer');

// note the immediate function and the object that is returned
module.exports = (function() {
  return {
// notice how index in the factory(client side) is calling the index method(server side)
    index: function(req, res) {
      Customer.find({}, function(err, customers) {
        if(err){
          console.log("does not compute");
        }
        else{
          console.log(customers);
          res.json(customers);
        }
      })
    },
    create: function(req,res){
      var customer= new Customer(req.body);
      customer.save(function (err) {
        if(err){
          console.log('didnt add');
        }
        else{
          console.log('added');
          res.end();

        }
      })
    },
    destroy:function (req, res) {
      console.log(req.params.id);
      Customer.remove({_id :req.params.id}, function (err) {
        if(err){
          console.log("error");
        }
        else {
          console.log('sucess');
        };
      });
      res.end();
    }

  }
})();
