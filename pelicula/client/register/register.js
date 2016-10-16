
Template.userManagement1.events({  
  'click #signup': function() {
    var user = {
      username: $('#signup-username').val(),
      password: $('#signup-password').val(),
      profile: {
        fullname: $('#signup-fullname').val(),
        fullname1: $('#signup-apellido').val(),
        fullname2: $('#signup-correo').val(),
        fullname3: $('#signup-direccion').val()
      }
    };

    Accounts.createUser(user, function (error) {
      if(error) alert(error);
    });
  }
});


Template.userManagement1.events({  
	'click #logout': function() {  
  	Meteor.logout();
}
  
});