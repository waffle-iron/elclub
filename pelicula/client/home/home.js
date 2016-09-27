import { Template } from 'meteor/templating';

import './home.html';
/*
Template.lasMasPopulares.helpers({
	peliculas: function(){
		return Products.find({});//	return Sistema.Peliculas.get(0,20,"popularity"); 
	}	
});
*/
Template.bodyProductos.rendered = function(){
	Meteor.subscribe("products")
}

Template.bodyProductos.helpers({
	title : function() { return Sistema.categoria},
})

Template.ultimasNoticias.rendered = function(){
	Meteor.subscribe("feeds");
}

Template.ultimasNoticias.helpers({
	noticias: Feeds.find({},{limit:2}),
})