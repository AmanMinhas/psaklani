cEmailForm = new Mongo.Collection("emailform");

var oEmailFormSchema = new SimpleSchema({
	'name' : {
		'type' 	: String,
		'max'	: 200 // Characters
	},
	'email_address' : {
		'type' 	: String	
	},
	'subject' : {
		'type' 	: String	
	},
	'message' : {
		'type' 	: String	
	},
	'human_check' : {
		'type'	: Number,
		'label' : 'To protect from spam please answer 8 + 3 = ?'
	}
});

cEmailForm.attachSchema(oEmailFormSchema);
