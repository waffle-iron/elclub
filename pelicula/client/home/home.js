import { Template } from 'meteor/templating';

import './home.html';


Template.lasMasPopulares.helpers({
		peliculas: function(){
			return getPeliculas(orderByPopularity,0,20); 
		}	
});
