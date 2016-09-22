Sistema = {
	
	Peliculas: {
		get:	function(from,to,parameter) {
					return	peliculasList
							.sort( function(a,b){return a.parameter - b.parameter} )
							.slice(from,to);
				}		 	
		},
	
	Nombre: "Club de la Pelicula",
	
}

console.log(Sistema.Nombre);
