Meteor.publish('postsApproved', function()
{
	return Posts.find({status: 1})
});

Meteor.publish('oldfeeds',function(){
    //Client.Feed.data = Server.Feed.data;
    //var rss = new Rss();
    //var data = rss.parse('http://rss.sensacine.com/actualidad/toda')
    
    //console.log(data);
    
    Feeds.remove();
    
    //Feeds.insert(data);
    
    return Feeds.find();
}); 


Meteor.publish('feeds', function() {
	
	return Feeds.find();
	
});

