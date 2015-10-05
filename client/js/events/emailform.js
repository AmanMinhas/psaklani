Template.emailform.events({
	"submit #send-email-form-id" : function(event) {
		event.preventDefault();
		console.log("form submit");
	}
});