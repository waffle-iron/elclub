import { Template } from 'meteor/templating';

import './preview.html';

Template.specs.helpers({
	
	specification: function() {
		return specifications;
	}

})

Template.tabs.rendered = function () {
	document.getElementById('tab2'). style.display='none';
	document.getElementById('tab1'). style.display='initial';
	document.getElementById('tab3')	. style.display='none';
};

Template.tabs.events({

	'onload': function() {
		document.getElementById('tab2'). style.display='none';
		document.getElementById('tab1'). style.display='initial';
		document.getElementById('tab3')	. style.display='none';
	},
	
	'click .tab1': function() {
		document.getElementById('tab2'). style.display='none';
		document.getElementById('tab1'). style.display='initial';
		document.getElementById('tab3')	. style.display='none';

	},

	'click .tab2': function() {
		document.getElementById('tab2'). style.display='initial';
		document.getElementById('tab1'). style.display='none';
		document.getElementById('tab3')	. style.display='none';
	},

	'click .tab3': function() {
		document.getElementById('tab2'). style.display='none';
		document.getElementById('tab1'). style.display='none';
		document.getElementById('tab3')	. style.display='initial';
	}
})

Template.productDetail.helpers({
	
	specification: function() {
		return Products.findOne({sku : this.params.mysku});//Sistema.Peliculas.get;//(0,1,sku);
	}

})

Template.masPopulares.helpers({
	peliculasMasPopulares: function(){
		return Products.find({});//	return Sistema.Peliculas.get(0,20,"popularity"); 
	},//Sistema.Peliculas.get(0,20,"popularity")
})
/*
Template.review.rendered({
	
	 template.$(".rating").starRating({
		minus: true // step minus button
	});
	
})*/

Template.productDetail.rendered = function(){
	Meteor.subscribe("products");
}

Template.productDetail.events({
  "click #add-to-cart" : function(ev){
    ev.preventDefault();
    console.log(this );
    console.log("EL SKU AHORA MISMO ES: " + this.sku );
    addToCart(this.sku, function(err,res){
      if(err){
        console.log(err);
      }else{
        Router.go("cartShow");
      }
    });
  }
});


