import { Template } from 'meteor/templating';

import './home.html';


peliculasList =  [

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
	price: 'Bolivares'
},

{
	id:'3',
	title: 'The Matrix',
	image: 'product-img3.jpg',
	price:'$839.93',
	previous_price: '$899.95',
	popularity: '2'
},

{
	id:'4',
	title: 'Si decido quedarme',
	image: 'product-img4.jpg',
	price:'$839.93',
	previous_price: '$899.95',
	popularity: '3'
},

{
	id:'5',
	title: 'Tdortugas Ninja',
	image: 'product-img1.jpg',
	price:'$839.93'
},

{
	id:'6',
	title:'Tarzan',
	image:'product-img2.jpg',
	price:'$839.93',
	previous_price: '$899.95',
	popularity: '4'
},

{
	id:'7',
	title:'Ex Machina',
	image: 'product-img7.jpg',
	price: '$839.93'
},

{
	id:'8', 
	title: 'Cautivos',
	image: 'product-img8.jpg',
	price: '$839.93'
},

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
		peliculas: function(){
			return peliculasList; 
		}	
});
