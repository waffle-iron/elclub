Meteor.publish('postsApproved', function()
{
	return Posts.find({status: 1})
})
