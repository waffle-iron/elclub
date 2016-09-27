Carts = new Mongo.Collection("carts");

Carts.getCart = function(myuserKey){

  var cart = Carts.findOne({userKey : myuserKey});
  if(!cart){
    cart = {
      userKey : myuserKey,
      email : null,
      name :null,
      ip : null,
      created_at : new Date(),
      items : [],
      notes : [{
        note : "Cart created",
        created_at : new Date()
      }],
      status : "open",
      itemCount : 0,
      total : 0
    };

  }
  return cart;
};