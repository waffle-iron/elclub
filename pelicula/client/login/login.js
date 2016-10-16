import { Template } from 'meteor/templating';
import './login.html';

Template.userManagement.events({  
  'click #signup': function() {
    var user = {
      username: $('#signup-username').val(),
      password: $('#signup-password').val(),
      profile: {
        fullname: $('#signup-fullname').val()
      }
    };

    Accounts.createUser(user, function (error) {
      if(error) alert(error);
    });
  }
});

Template.userManagement.events({  
  'click #login': function() {
    var username = $('#login-username').val();
    var password = $('#login-password').val();

    Meteor.loginWithPassword(username, password, function(error) {
      if(error) alert(error);
    });
  }
});


Template.userManagement.events({  
	'click #logout': function() {  
  	Meteor.logout();
}
  
});