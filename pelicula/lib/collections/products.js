Products = new Mongo.Collection("products");
//para la busqueda
if ( Meteor.isServer ) {
  Products._ensureIndex({title:1, genero:1, price:1});
}

Products.reload = function(){
  //Si producto[i].stock <= 0 entonces producto[i].remover
}

Products.byId = function(id){
  return Products.findOne({id : id});
};

Products.bySku = function(sku){
  return Products.findOne({sku : sku});
};

/*
Products.featured = function(){
  var featuredids = ["honeymoon-mars","johnny-liftoff","one-way-reentry"];
  return Products.find({id : {$in : featuredids}},
    {fields : {inventory : false, cost : false}});
};
//*/

Products.allow({
  update : function(userid, product){
    return isAdmin();
  },
  insert : function(userid, product){
    return isAdmin();
  },
  remove : function(userid, product){
    return isAdmin();
  }
});
