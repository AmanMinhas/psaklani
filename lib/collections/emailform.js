cEmailForm = new Mongo.Collection("emailform");

SimpleSchema.messages({  
	"incorrect_answer": "Incorrect Answer"
});

var oEmailFormSchema = new SimpleSchema({
	'name' : {
		'type' 	: String,
		'max'	: 200 // Characters
	},
	'email_address' : {
		'type' 	: String,
		'regEx'	: SimpleSchema.RegEx.Email	
	},
	'subject' : {
		'type' 	: String	
	},
	'message' : {
		'type' 	: String	
	},
	'human_check' : {
		'type'	: Number,
		'label' : 'To protect from spam please answer 8 + 3 = ?',
		custom	: function() { 
			if(this.value !== 11) {
				// return "Incorrect Answer";
				return "incorrect_answer";
			}
		}
	}
});

cEmailForm.attachSchema(oEmailFormSchema);
