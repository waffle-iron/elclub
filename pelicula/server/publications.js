Meteor.publish('postsApproved', function()
{
	return Posts.find({status: 1})
});

Meteor.publish('feeds', function() {
	return Feeds.find();
});

Meteor.publish("cart", function(key){
  check(key, String);
  return Carts.find({userKey : key});
});


Meteor.publish("products-by-sku", function(msku){
  check(msku, String);
  return Products.find({sku : msku});
});

Meteor.publish("products",function(){
 return Products.find({});//////////7AQJUI 
 
  /*var cursor = Products.findOne({}, {sort: {id: 1}});
  console.log("_id of products " + cursor.title +": " + cursor.id);
  return Products.find({id:{$gte:cursor.id}}, {sort:{id:1}, skip:6, limit:6});*/ //PAG hacía adelante
  
  /*var lastSeen = null;

  var cursor = Products.find({}, {sort: {id: 1}, limit:12});

  cursor.forEach(function (products) {
    console.log("_id of products " + products.title + ": " + products.id);
    lastSeen = products.id;
  });

  return Products.find({id:{$lte:lastSeen}}, {sort:{id:-1}, skip:6, limit:6});*///Pag hacía atrás
});