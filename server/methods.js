Meteor.methods({

	contactPSaklani : function(from,subject,text) {
		check([from, subject, text], [String]);
		oCredentials = Meteor.call('getEmailCredentials');
	 	Meteor.call('sendEmail',oCredentials.email,from,subject,text);

	},

	sendEmail : function(to,from,subject,text) {
		
		check([to, from, subject, text], [String]);

		// Let other method calls from the same client start running,
		// without waiting for the email sending to complete.
		this.unblock();

		Email.send({
			to: to,
			from: from,
			replyTo: from, 
			subject: subject,
			text: text
		});

	},

	getEmailCredentials : function() {
		var oCredentials = {};
  		oCredentials = JSON.parse(Assets.getText("emailData.json"));
  		return oCredentials;
	}
});