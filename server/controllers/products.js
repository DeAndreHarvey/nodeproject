// First add the following two lines at the top of the products controller so that we can access our model through var Product
// need to require mongoose to be able to run mongoose.model()
var mongoose = require('mongoose');
var Product = mongoose.model('Product');

// note the immediate function and the object that is returned
module.exports = (function() {
  return {
// notice how index in the factory(client side) is calling the index method(server side)
    index: function(req, res) {
      Product.find({}, function(err, products) {
        if(err){
          console.log("does not compute");
        }
        else{
          console.log(products);
          res.json(products);
        }
      })
    },
    create: function(req,res){
      console.log(req.body);
      var product= new Product(req.body);
      product.save(function (err) {
        if(err){
          console.log('didnt add');
        }
        else{
          console.log('added');
          res.end();


        }
      })
    },
    update: function (req,res) {
    Product.findOne({name:req.body.product},function (err,product) {
      product.qty = product.qty -req.body.qty;

    product.save(function (err) {
      if(err){
        console.log('error updating');
      }
      else{
        console.log('updated');
      }
    })
  });
    }
}
})();
