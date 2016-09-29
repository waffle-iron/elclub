
/*   //////TRABAJANDO AQUI/////////////
 Your request should have atleast 1 of the following parameters: 
'Keywords','Title','Power','BrowseNode','Artist','Author','Actor',
'Director','AudienceRating','Manufacturer','MusicLabel','Composer',
'Publisher','Brand','Conductor','Orchestra','TextStream','Cuisine',
'City','Neighborhood'.*/

/*
client.itemSearch({
  director: 'Quentin Tarantino',
  actor: 'Samuel L. Jackson',
  searchIndex: 'DVD',
  audienceRating: 'R',
  responseGroup: 'ItemAttributes,Offers,Images'
}).then(function(results){
	
	for (var i = 0; i < 2; i++) { //results.length
		toInsert.push({

			sku: results[i].ASIN[0],
			title: results[i].ItemAttributes[0].Title[0],
			//duracion: results[i].ItemAttributes[0].RunningTime[0],
			prota: results[i].ItemAttributes[0].Actor,
			clasificacion: results[i].ItemAttributes[0].AudienceRating[0],
			genero: results[i].ItemAttributes[0].Genre,
			tipo: results[i].ItemAttributes[0].ProductGroup[0],
			price: results[i].OfferSummary[0].LowestNewPrice[0].Amount[0],
			image: results[i].SmallImage[0].URL[0],
			imageMedium: results[i].MediumImage[0].URL[0]
		
		})
	}
	
    Products.remove({});

	if (Products.find().count() === 0) {
    
    	for (var i = 0; i < toInsert.length; i++) {
        	Products.insert(toInsert[i]);
        	console.log("Inserted ", toInsert[i].title);
    	}
	}

}).catch(function(err){
  console.log(err);
});*/

var productSeeds = [

{
	sku: 'civil-war',
	tipo:'peliculas',id: '1',
	title: 'Civil War',
	price: '852.35',
	image: 'product-img5.jpg',
	prota: 'Tom Cruise, Jeremy Renner',
	dura: '131 min.',
	genero: 'Acción',
	descrip: 'Cuando un incidente relacionado con los resultados Vengadores en daños colaterales, aumenta la presión política responsabilizar al equipo. La batalla resultante crea una separación entre el Capitán América y Iron Man, y enfrenta a los Vengadores uno contra el otro.'
},
{
	sku: 'transformers',
	tipo:'peliculas',id: '2',
	title: 'Transformers',
	image: 'product-img6.jpg',
	price: '749.99'
},

{
	sku: 'the-matrix',
	tipo:'peliculas',id:'3',
	title: 'The Matrix',
	image: 'product-img3.jpg',
	price:'839.93',
	previous_price: '899.95',
	popularity: '2'
},

{
	sku: 'si-decido-quedarme',
	tipo:'peliculas',id:'4',
	title: 'Si decido quedarme',
	image: 'product-img4.jpg',
	price:'839.93',
	previous_price: '899.95',
	popularity: '3'
},

{
	sku: 'tmnt',
	tipo:'peliculas',id:'5',
	title: 'Tortugas Ninja',
	image: 'product-img1.jpg',
	price:'839.93'
},

{
	sku: 'tarzan',
	tipo:'peliculas',id:'6',
	title:'Tarzan',
	image:'product-img2.jpg',
	price:'839.93',
	previous_price: '899.95',
	popularity: '4'
},

{
	sku: 'ex-machina',
	tipo:'peliculas',id:'7',
	title:'Ex Machina',
	image: 'product-img7.jpg',
	price: '839.93'
},

{
	sku: 'cautivos',
	tipo:'peliculas',id:'8', 
	title: 'Cautivos',
	image: 'product-img8.jpg',
	price: '839.93'
},

{
	sku: 'pi',
	tipo:'peliculas',id:'9',
	title: 'Secret Life of Pets',
	image:'product-img9.jpg',
	price: '839.93'
},

{
	sku: 'dory',
	tipo:'peliculas',id:'10',
	title: 'Buscando a Dory',
	image: 'product-img10.jpg',
	price: '839.93'
},

{
	sku: 'star-wars',
	tipo:'peliculas',id: '11',
	title: 'Star Wars',
	image:'product-img11.jpg',
	price:'839.93'
},

{
	sku: 'zootopia',
	tipo:'peliculas',id:'12',
	title: 'Zootopia',
	image:'product-img12.jpg',
	price:'839.93'
}
];
//*/


Products.remove({});

if (Products.find().count() === 0) {
    
    for (var i = 0; i < productSeeds.length; i++) {
        Products.insert(productSeeds[i]);
        console.log("Inserted ", productSeeds[i].sku);
    }
}

if(Meteor.users.find().count() === 0){
  var id = Accounts.createUser({
    username : "Administrator",
    email: "admin@test.com",
    password: "admin123",
    profile: { name: "Big Admin" },
    roles : []
  });

  Roles.addUsersToRoles(id, ["Administrator"]);
  console.log("Agregado Admin");
}

////***FEEDS***////

Meteor.startup( function(){
    Feeds.reload();
    console.log("feeds reinitialized");
});
