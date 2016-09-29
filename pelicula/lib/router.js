Router.configure({
	layoutTemplate: "baseLayout",
  //loadingTemplate: 'loading',
	notFoundTemplate: '404',
	waitOn : function(){
    return [Meteor.subscribe("postsApproved"),
      Meteor.subscribe("cart", userKey)];
  },
});

Router.route('/cart', { name: "cartShow"});

// Router.route('/datos', { name: "datos"}); <<<--- POR HACER

// Router.route('/compra', { name: "compra"}); <<<--- GRACIAS POR SU COMPRA


Router.route("/", {
	
	
		name : "home",
  
	  waitOn : function(){
	    
	    Elements.categoria = "Las mejores series y películas" 
	     
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


Router.route("/p/:mysku", {
	
  name : "productDetail",
  
  waitOn : function(){
    return Meteor.subscribe("products-by-sku", this.params.mysku);
  },
  
  data : function(){
    return Products.findOne({sku : this.params.mysku});
  },
  /*
  yieldRegions: {
    'empty': {to: 'bodyheader'},
  	},
  */
});

Router.route("/productos/", {
	
  name : "productos",
  
  
  waitOn : function(){
    return Meteor.subscribe("products");
  },
  
  data : function(){
    return Products.find({} , {"sort" : ['sku', 'asc']} );
  },
  
  template: "bodyProductos",
  
  yieldRegions: {
    'empty': {to: 'bodyheader'},
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
        Elements.categoria = str.charAt(0).toUpperCase() + str.slice(1);
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
