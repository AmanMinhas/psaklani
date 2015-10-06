Template.emailform.events({
	"submit #send-email-form-id" : function(event) {
		event.preventDefault();
		form_data = event.target;
		name = form_data.name.value;
		email_address = form_data.email_address.value;
		subject = form_data.subject.value;
		message = form_data.message.value;
		human_check = form_data.human_check.value;

		console.log(event);
		console.log(event.target.name.value);
		console.log(event.target.email_address.value);
		console.log(event.target.subject.value);
		console.log(event.target.message.value);
		console.log(event.target.human_check.value);

		console.log("form submit");

		// Meteor.call('sendEmail','aman.minhas16@gmail.com','','test subject','test email');
		Meteor.call('sendEmail','aman.minhas16@gmail.com',email_address,subject,message);
	}
});