import { Template } from 'meteor/templating';

import './preview.html';

specifications = [
{
	nombre:"Protagonistas", 
 	valor: ["Tom Cruise", "Jeremy Renner", "Simon Pegg", "Ving Rhames", "Rebecca Ferguson", "Sean Harris", "Alec Baldwin"]
 },

{
	nombre:"Año",
	 valor:"2015"
	},
{
	nombre:"Distribución", 
	valor:"Paramount Pictures"
},
{
	nombre:"Clasificación", 
	valor:"PG-13"}
];

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

Peliculas1 =  [

{
	id: '1',
	title: 'Civil War',
	price: '8523',
	image: 'product-img5.jpg',
	prota: 'Tom Cruise, Jeremy Renner',
	dura: '131 min.',
	genero: 'Acción',
	descrip: 'Cuando un incidente relacionado con los resultados Vengadores en daños colaterales, aumenta la presión política responsabilizar al equipo. La batalla resultante crea una separación entre el Capitán América y Iron Man, y enfrenta a los Vengadores uno contra el otro.'
},
{
	id: '2',
	title: 'Transformers',
	image: 'product-img6.jpg',
	price: 'Bolivares',	
},

{
	id:'3',
	title: 'The Matrix',
	image: 'product-img3.jpg',
	price:'$839.93'
},

{
	id:'4',
	title: 'Si decido quedarme',
	image: 'product-img4.jpg',
	price:'$839.93',
},

];

Template.productDetail.helpers({
	
	specification: function() {
		return Peliculas1;
	}

})
MasPopulares = 
[
{
	id2:'1',
	title: 'Tarzan',
	image:'product-img2.jpg',
	price: '$899.95',
	descuento: '$839.93'
},

{
	id2:'2',
	title:' The matrix',
	image:'product-img3.jpg',
	price: '$899.95',
	descuento: '$839.93'
},
{
	id2:'3',
	title: 'Si decido quedarme',
	image:'product-img4.jpg',
	price: '$899.95',
	descuento: '$839.93'
}
];

Template.MasP.helpers({
	
	Masp1: function() {
		return MasPopulares;
	}
})
