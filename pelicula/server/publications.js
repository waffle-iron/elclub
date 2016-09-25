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
	var self = this;


	try {
		var response = HTTP.get("http://rss.sensacine.com/actualidad/toda");

		// parse
		xml2js.parseString(response.content, function (err, result) {
            
            var items = result.rss.channel[0].item.slice(0,2);
            
            for (var i = 0; i < items.length; i++) {
                delete items[i].enclosure;
                delete items[i].guid;
                delete items[i].category;
                delete items[i].pubDate;
                
                currentItem = {
                    title: items[i].title[0], 
                    description: items[i].description[0].split("<")[0], 
                    link: items[i].link[0]
                }
                
                Feeds.insert(currentItem);
            }
            
            console.log(items);
        });
	}

	catch(error) {
		console.log(error);
	}
	
	return Feeds.find();
	
});

