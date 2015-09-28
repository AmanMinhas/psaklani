Template.registerHelper('services',function() {
	return cServices.find().fetch();
});
