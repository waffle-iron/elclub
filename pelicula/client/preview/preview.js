import { Template } from 'meteor/templating';

import './preview.html';

specifications = [
{nombre:"Protagonistas", 
 valor: ["Tom Cruise", "Jeremy Renner", "Simon Pegg", "Ving Rhames", "Rebecca Ferguson", "Sean Harris", "Alec Baldwin"]
 },
{nombre:"Año", valor:"2015"},
{nombre:"Distribución", valor:"Paramount Pictures"},
{nombre:"Clasificación", valor:"PG-13"}
];

Template.specs.helpers({
	
	specification: function() {
		return specifications;
	}

})

Template.tabs.rendered = function () {
	document.getElementById('tab2'). style.display='none';
	document.getElementById('tab1'). style.display='initial';
	document.getElementById('tab3')		. style.display='none';
};

Template.tabs.events({

	'onload': function() {
		document.getElementById('tab2'). style.display='none';
		document.getElementById('tab1'). style.display='initial';
		document.getElementById('tab3')		. style.display='none';

	},
	
	'click .tab1': function() {
		document.getElementById('tab2'). style.display='none';
		document.getElementById('tab1'). style.display='initial';
		document.getElementById('tab3')		. style.display='none';

	},

	'click .tab2': function() {
		document.getElementById('tab2'). style.display='initial';
		document.getElementById('tab1'). style.display='none';
		document.getElementById('tab3')		. style.display='none';


				
	},

	'click .tab3': function() {
		document.getElementById('tab2'). style.display='none';
		document.getElementById('tab1'). style.display='none';
		document.getElementById('tab3')		. style.display='initial';

	}
})
