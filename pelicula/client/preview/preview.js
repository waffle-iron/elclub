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
		return peliculasList;
	}

})

Template.masPopulares.helpers({
	peliculasMasPopulares: Sistema.Peliculas.get(0,20,"popularity")
})
/*
Template.review.rendered({
	
	 template.$(".rating").starRating({
		minus: true // step minus button
	});
	
})*/


