// First add the following two lines at the top of the orders controller so that we can access our model through var Order
// need to require mongoose to be able to run mongoose.model()
var mongoose = require('mongoose');
var Order = mongoose.model('Order');

// note the immediate function and the object that is returned
module.exports = (function() {
  return {
// notice how index in the factory(client side) is calling the index method(server side)
    index: function(req, res) {
      Order.find({}, function(err, orders) {
        if(err){
          console.log("does not compute");
        }
        else{
          console.log(orders);
          res.json(orders);
        }
      })
    },
    create: function(req,res){
      console.log(req.body);
      var order= new Order(req.body);
      order.save(function (err) {
        if(err){
          console.log('didnt add');
        }
        else{
          console.log('added');
          res.end();


        }
      })
    }

  }
})();
