Sistema = {
	
	Peliculas: {
		get:	function(from,to,parameter) {
					return	peliculasList
							.sort( function(a,b){return a.parameter - b.parameter} )
							.slice(from,to);
				}		 	
		},
	
	Nombre: "Club de la Pelicula",
	
	Feed: {
		reload: function(){
			if (Meteor.isServer){
				
				Feeds.remove({});
				var self = this;
				
				try {
					var response = HTTP.get("http://rss.sensacine.com/actualidad/toda");
					// parse
					xml2js.parseString(response.content, function (err, result) {
			            
			            var items = result.rss.channel[0].item.slice(0,5);
			            
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
			}
		}
	}
}

console.log(Sistema.Nombre);
