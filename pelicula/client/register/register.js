import { Template } from 'meteor/templating';
import './register.html';

Template.userManagement1.events({  
  'click #signup': function() {

    usuarioValido = function(username) {
      return /^[0-9a-zA-Z_.-]+$/.test(username);
    }

    emailValido = function(email) {
      var re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      return re.test(email);
    }
    
    var user = {
      username: $('#signup-username').val(),
      password: $('#signup-password').val(),
      profile: {
        nombre: $('#signup-fullname').val(),
        apellido: $('#signup-apellido').val(),
        correo: $('#signup-correo').val(),
        direccion: $('#signup-direccion').val()
      }
    };
    
    check(user.username       ,String);
    check(user.password       ,String);
    check(user.profile.nombre ,String);
    check(user.profile.apellido   ,String);
    check(user.profile.correo     ,String);
    check(user.profile.direccion  ,String);
    
    console.log(user);
    
    if (!usuarioValido(user.username)) {
      alert("Usuario inválido");
      return;
    }
    
    if (!emailValido(user.profile.correo)) {
      alert("Correo inválido");
      return;
    }
    else{
      Meteor.call('sendEmail',
            user.profile.correo,
            'soporte@elclubdelapelicula.com.ve',
            'Registro Exitoso!',
            'Te has registrado al ClubDelaPelicula .' );
    }
    
    Accounts.createUser(user, function (error) {
      if(error) alert(error);
    });
    
    
    Router.go('/')
  }
});

Template.userManagement1.events({  
	'click #logout': function() {  
  	Meteor.logout();
}
  
});