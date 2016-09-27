Template.cartShow.helpers({
  cart : function(){
    currentCart = Carts.getCart(userKey);
    return currentCart;
  },
  cartitems : function(){
    currentCart = Carts.getCart(userKey);
    console.log(userKey)
    console.log(currentCart)
    return currentCart.items;
  },
  carttotal : function(){
    currentCart = Carts.getCart(userKey);
    return currentCart.total;
  },
  thereAreNo : function(items){
    return items.length == 0;
  }
});
/*
Template.cartShow.onCreated(function(){
  this.subscribe("cart");
})
*/
Template.cartShow.events({
  "click .remove-from-cart" : function(ev){
    ev.preventDefault();
    removeFromCart(this.id, function(err,res){
      if(err){
        console.log(err);
      }else{
        //any items left?
        if(currentCart.items.length === 0){
          Router.go("homeIndex");
        }
      }
    });
  },
  "change .item-qty" : function(ev){
    var rawValue = $(ev.currentTarget).val();

    if(!isNaN(rawValue)){
      var newQty = parseInt(rawValue);
      var name = this.name;
      if(newQty === 0){
        removeFromCart(this.id);
      }else {
        this.quantity = parseInt(newQty);
        updateCart(this.id,this.quantity, function (err, res) {
          if (err) {
            //console.log(err);
            sAlert.error(err);
          } else {
            //alert(name + " updated");
            sAlert.success(name + " updated");
          }
        });
      }
      //just to be sure
      $(ev.currentTarget).val(newQty);
    }else{
      sAlert.error("That's not a number...");
    }
  }
});
