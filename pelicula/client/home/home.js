import { Template } from 'meteor/templating';

import './home.html';

Template.lasMasPopulares.helpers({
	peliculas: function(){
		return Sistema.Peliculas.get(0,20,"popularity"); 
	}	
});

Template.ultimasNoticias.rendered = function(){
	Meteor.subscribe("feeds");
}

Template.ultimasNoticias.helpers({
	noticias: Feeds.find({},{limit:2}),
})