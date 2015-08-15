Template.emailform.events({
	'submit #sendmailform': function(e){
		e.preventDefault();
		console.log("form submitted");
		console.log(e.target.name.value);
		// Meteor.call('sendEmail','amandeepSinghMinhas@gmail.com','aman.minhas16@gmail.com','test subject','test email');
		Meteor.call('sendEmail','aman.minhas16@gmail.com','','test subject','test email');
	}
});