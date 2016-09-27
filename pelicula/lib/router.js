Router.configure({
	layoutTemplate: "baseLayout",
	notFoundTemplate: '404',
	waitOn: function() 
	{
		return Meteor.subscribe("postsApproved");
	}
});

/*Router.route('/home', {

	name: "home",
	date:{
		posts: function()
		{
			return Post.find();
	    }
	}   
});-*/

Router.route("/", {
	
	
		name : "home",
  
	  waitOn : function(){
	     
	    Sistema.categoria = "Las mejores series y películas" 
	     
	    return Meteor.subscribe("products");
	  },
	  
	  template: "bodyProductos",
	  
	  yieldRegions: {
    'proxEstrenos': {to: 'bodyheader'},
  	},
  	
  	data : function(){
    return Products.find({} , {"sort" : ['id', 'asc']} );
  	},//*/
	  
  
	
});

Router.route('/p', {

	name: "preview",
	date:{
		posts: function()
		{
			return Post.find();
	    }
	}   
});

Router.route('/cart', { name: "cartShow"});

Router.route('/login', { name: "login"});

Router.route('/contact', { 
	 name: "contact",
	 date:{
	 	posts: function()
	 	{
	 		return Post.find();
	 	}
	 }
});

/* ABOUT + PRODUCTOS[id]

Router.route('/about', function () {
  this.render('about');
});

Router.route('/products/:id', function () {
  var that = this;
  var product = _.find(Products, function(prod) {
    return (prod.id === that.params.id);
  });
  this.render('productDetail', {
    data: product
  });
});

/*

Router.route('/preview/:sku', function() {

	var that = this;
	var pelicula = _.find( Products, function(prod){
			return (prod.sku === that.params.sku);
		});

	console.log(that.params.sku);

	this.render('productDetail',{
		data: pelicula,
	});

});

*/


Router.route("/p/:mysku", {
	
  name : "productDetail",
  
  waitOn : function(){
    return Meteor.subscribe("products-by-sku", this.params.mysku);
  },
  
  data : function(){
    return Products.findOne({sku : this.params.mysku});
  }
  
});

Router.route("/productos/", {
	
  name : "productos",
  
  template: "bodyProductos",
  
  waitOn : function(){
    return Meteor.subscribe("products");
  },
  
  data : function(){
    return Products.find({} , {"sort" : ['sku', 'asc']} );
  },
	  
});

Router.route("/productos/:type", {
	
  name : "productos filtrados",
  
  template: "bodyProductos",
  
  waitOn: function(){
      
     if (Meteor.isClient){
	    var str = String(this.params.type);
	    str = str.split("-").join(" ");
	    console.log(str);
        Sistema.categoria = str.charAt(0).toUpperCase() + str.slice(1);
     }
     
    return Meteor.subscribe("products");
  },
  
  data : function(){
    return Products.find({tipo : this.params.type})
  },
  
  title: ":type",
  /*
  
	  */
});


/*
Router.route("/productos/:sku", {
  name : "productDetail",
  waitOn : function(){
    return Meteor.subscribe("products-by-sku", this.params.sku);
  },
  data : function(){
    return Products.findOne({sku : this.params.sku});
  }
});
// */
