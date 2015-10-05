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

Template.registerHelper('recentBlogPosts',function() {
	recentBlogPosts = [
		{
			"blog_title" : "Caring for your pet during the moonsoons",
			"image_url" : "https://",
			"blog_link" : "https://",
		},
		{
			"blog_title" : "Blog post 2",
			"image_url" : "https://",
			"blog_link" : "https://",
		}, 
	];

	return recentBlogPosts;
});