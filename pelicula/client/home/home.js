import { Template } from 'meteor/templating';

import './home.html';


Template.lasMasPopulares.helpers({
		peliculas: function(){
			return Sistema.Peliculas.get(0,20,"popularity"); 
		}	
});
