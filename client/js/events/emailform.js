Template.emailform.events({
	"submit #send-email-form-id" : function(event) {
		event.preventDefault();

		form_data 		= event.target;
		name 			= form_data.name.value;
		email_address 	= form_data.email_address.value;
		subject 		= form_data.subject.value;
		message 		= form_data.message.value;
		human_check 	= form_data.human_check.value;

		Meteor.call('contactPSaklani',email_address,subject,message,function(err,result){
			if(err) {
				console.log(err);
			} else {
				AutoForm.resetForm('send-email-form-id');
				$("#email-sent-success-id").css("display","block");
			}
		});
	}
});