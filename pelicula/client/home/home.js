import { Template } from 'meteor/templating';

import './home.html';

Template.bodyProductos.rendered = function(){
	Meteor.subscribe("products")
}

Template.bodyProductos.helpers({
	title : function() { return Elements.categoria},
})

Template.ultimasNoticias.rendered = function(){
	Meteor.subscribe("feeds");
}

Template.ultimasNoticias.helpers({
	noticias: Feeds.find({},{limit:2}),
})