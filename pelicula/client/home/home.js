import { Template } from 'meteor/templating';

import './home.html';


Peliculas2 =  [
{
	id:'5',
	title: 'Tdortugas Ninja',
	image: 'product-img1.jpg',
	price:'$839.93',
},

{
	id:'6',
	title:'Tarzan',
	image:'product-img2.jpg',
	price:'$839.93'
},

{
	id:'7',
	title:'Ex Machina',
	image: 'product-img7.jpg',
	price: '$839.93',
},

{
	id:'8', 
	title: 'Cautivos',
	image: 'product-img8.jpg',
	price: '$839.93'
}];

Peliculas3 =  [
{
	id:'9',
	title: 'Secret Life of Pets',
	image:'product-img9.jpg',
	price: '$839.93'
},

{
	id:'10',
	title: 'Buscando a Dory',
	image: 'product-img10.jpg',
	price: '$839.93'
},

{
	id: '11',
	title: 'Star Wars',
	image:'product-img11.jpg',
	price:'$839.93'
},

{
	id:'12',
	title: 'Zootopia',
	image:'product-img12.jpg',
	price:'$839.93'
}
];
		
Template.LMP.helpers({
		peliculas1: function(){
			return Peliculas1; 
		}	
});


Template.LMP.helpers({
		peliculas2: function(){
			return Peliculas2; 
		}	
})

Template.LMP.helpers({
		peliculas3: function(){
			return Peliculas3; 
}
	
})
