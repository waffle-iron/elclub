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
});