Template.registerHelper('services',function() {
	return cServices.find().fetch();
});

Template.registerHelper('contactInfo',function() {
	contact = {
		"email" : "priyasaklani@gmail.com",
		"mobile" : "+91 9920 313 294",
		"location" : "Mumbai, India"
	}

	return contact;	
});
