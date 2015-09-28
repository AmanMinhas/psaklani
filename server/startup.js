Meteor.startup(function() {
	
	cServices.remove({});

	/*Set up services if not already set*/
	if(cServices.find().count() === 0) {
		console.log("setting up services");
		Meteor.call("setup_services");
	}

	/*	
	cServices.find().fetch().forEach(function(service) {
		console.log(service.service_title);
		service.faqs.forEach(function(faq) {
			console.log("question : ",faq.question);
			faq.answer_paragraphs.forEach(function(paragraph) {
				console.log("has image ? " + paragraph.has_image);
				console.log("text : " + paragraph.answer_text);
			});
		});

	});
	*/

});