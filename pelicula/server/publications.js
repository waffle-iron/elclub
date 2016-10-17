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

/*Meteor.publish("products",function(){
 return Products.find({});//////////7AQJUI 
  
});*/

Meteor.publish( 'products', function( header ) {
  check( header, Match.OneOf( String, null, undefined ) );
  console.log(header);

  let query      = {},
      projection = { limit: 10, sort: { title: 1 } };

  if ( header ) {
    let regex = new RegExp( header, 'i' );

    query = {
      $or: [
        { title: regex },
        { genero: regex },
        { price: regex }
      ]
    };

    projection.limit = 12;
    
  }

  return Products.find( query, projection );
});