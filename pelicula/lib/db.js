import { Mongo } from 'meteor/mongo';

Feeds = new Mongo.Collection("feeds");

Meteor.startup( function(){
    
    
    Sistema.Feed.reload();
    if (Meteor.isServer) {
        console.log("feeds reinitialized");
    }
});