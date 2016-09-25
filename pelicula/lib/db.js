import { Mongo } from 'meteor/mongo';

Feeds = new Mongo.Collection("feeds");

Meteor.startup( function(){
    
    Feeds.remove({});
    if (Meteor.isServer) {
        console.log("feeds reinitialized");
    }
});