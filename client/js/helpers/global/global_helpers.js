Template.registerHelper('services',function() {
	return cServices.find().fetch();
});

Template.registerHelper('contactInfo',function() {
	contact = {
		"email" : "priyasaklani@gmail.com",
		"mobile" : "+91 9920 313 294",
		"location" : "Mumbai, India",
		"facebook_link" : "https://www.facebook.com/Priya-Saklani-Reiki-Healer-169819829875766/timeline/",
		"linkedin_link" : "https://in.linkedin.com/pub/dr-priya-saklani-rmt-chlc/2a/368/875",
		"twitter_link" : "https://twitter.com/BodySoulHealing",
		"blog_link" : "http://theanimalhealer.blogspot.in/"
	}

	return contact;	
});
