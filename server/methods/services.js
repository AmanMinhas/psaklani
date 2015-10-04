Meteor.methods({
	setup_services : function() {

		var reiki_for_pets = getReikiForPets();
		cServices.insert(reiki_for_pets);

		var reiki_for_humans = getReikiForHumans();
		cServices.insert(reiki_for_humans);

		var hollistic_life_coaching = getHollisticLifeCoaching();
		cServices.insert(hollistic_life_coaching);

		var essential_oil_therapy = getEssentialOilTherapy();
		cServices.insert(essential_oil_therapy);

		var flower_essence_therapy = getFlowerEssenceTherapy();
		cServices.insert(flower_essence_therapy);

		var orgone_therapy = getOrgoneTherapy();
		cServices.insert(orgone_therapy);

	}
});

/*
*	@desc : function will return json Object with all data for service Reiki for Pets
*	@return : json Object
*/
function getReikiForPets() {
	var reiki_for_pets_faqs = [
		{
			"question" : "FAQ Question 1",
			"answer_paragraphs" : [
				{
					"has_image" : 1,
					"img_url"	: "/img/url/",
					"answer_text" : "In economics, BRIC is a grouping acronym that refers to the countries of Brazil, Russia, India and China, which are all deemed to be at a similar stage of newly advanced economic development. It is typically rendered as the BRICs or the BRIC countries or the BRIC economies or alternatively as the Big Four. A related acronym, BRICS, includes South Africa."
				},
				{
					"has_image" : 0,
					"answer_text" : "This is para 2 of the answer"
				}
			]
		},
		{
			"question" : "FAQ Question 2",
			"answer_paragraphs" : [
				{
					"has_image" : 1,
					"img_url"	: "/img/url/",
					"answer_text" : "This is para 1 of the answer"
				},
				{
					"has_image" : 0,
					"answer_text" : "This is para 2 of the answer"
				}
			]
		},
		{
			"question" : "FAQ Question 3",
			"answer_paragraphs" : [
				{
					"has_image" : 1,
					"img_url"	: "/img/url/",
					"answer_text" : "This is para 1 of the answer"
				},
				{
					"has_image" : 0,
					"answer_text" : "This is para 2 of the answer"
				}
			]
		},
		{
			"question" : "FAQ Question 4",
			"answer_paragraphs" : [
				{
					"has_image" : 1,
					"img_url"	: "/img/url/",
					"answer_text" : "This is para 1 of the answer"
				},
				{
					"has_image" : 0,
					"answer_text" : "This is para 2 of the answer"
				}
			]
		}
	];
	
	var reiki_for_pets = {
		"service_title" : "Reiki For Pets",
		"slug"	: "reiki_for_pets",
		"banner_img"	: "/img/services/reiki_for_pets.jpg",
		"active"	: "active",
		"faqs"	: reiki_for_pets_faqs 
	};

	return reiki_for_pets;
}

/*
*	@desc : function will return json Object with all data for service Reiki for humans
*	@return : json Object
*/
function getReikiForHumans() {
	var reiki_for_humans_faqs = [
		{
			"question" : "FAQ Question 1",
			"answer_paragraphs" : [
				{
					"has_image" : 1,
					"img_url"	: "/img/url/",
					"answer_text" : "This is para 1 of the answer"
				},
				{
					"has_image" : 0,
					"answer_text" : "This is para 2 of the answer"
				}
			]
		}
	];
	
	var reiki_for_humans = {
		"service_title" : "Reiki For Humans",
		"slug"	: "reiki_for_humans",
		"banner_img"	: "/img/services/reiki_for_humans.jpg",
		"faqs"	: reiki_for_humans_faqs 
	};

	return reiki_for_humans;
}

/*
*	@desc : function will return json Object with all data for hollistic Life Coaching
*	@return : json Object
*/
function getHollisticLifeCoaching() {
	var hollistic_life_coaching_faqs = [
		{
			"question" : "FAQ Question 1",
			"answer_paragraphs" : [
				{
					"has_image" : 1,
					"img_url"	: "/img/url/",
					"answer_text" : "This is para 1 of the answer"
				},
				{
					"has_image" : 0,
					"answer_text" : "This is para 2 of the answer"
				}
			]
		}
	];
	
	var hollistic_life_coaching = {
		"service_title" : "hollistic Life Coaching",
		"slug"	: "hollistic_life_coaching",
		"banner_img"	: "/img/services/hollistic_life_coaching.jpg",
		"faqs"	: hollistic_life_coaching_faqs 
	};

	return hollistic_life_coaching;
}

/*
*	@desc : function will return json Object with all data for service Essential Oil Therapy
*	@return : json Object
*/
function getEssentialOilTherapy() {
	var essential_oil_therapy_faqs = [
		{
			"question" : "FAQ Question 1",
			"answer_paragraphs" : [
				{
					"has_image" : 1,
					"img_url"	: "/img/url/",
					"answer_text" : "This is para 1 of the answer"
				},
				{
					"has_image" : 0,
					"answer_text" : "This is para 2 of the answer"
				}
			]
		}
	];
	
	var essential_oil_therapy = {
		"service_title" : "Essential Oil Therapy",
		"slug"	: "essential_oil_therapy",
		"banner_img"	: "/img/services/essential_oil_therapy.jpg",
		"faqs"	: essential_oil_therapy_faqs 
	};

	return essential_oil_therapy;
}

/*
*	@desc : function will return json Object with all data for service Flower Essence Therapy
*	@return : json Object
*/
function getFlowerEssenceTherapy() {
	var flower_essence_therapy_faqs = [
		{
			"question" : "FAQ Question 1",
			"answer_paragraphs" : [
				{
					"has_image" : 1,
					"img_url"	: "/img/url/",
					"answer_text" : "This is para 1 of the answer"
				},
				{
					"has_image" : 0,
					"answer_text" : "This is para 2 of the answer"
				}
			]
		}
	];
	
	var flower_essence_therapy = {
		"service_title" : "Flower Essence Therapy",
		"slug"	: "flower_essence_therapy",
		"banner_img"	: "/img/services/flower_essence_therapy.jpg",
		"faqs"	: flower_essence_therapy_faqs 
	};

	return flower_essence_therapy;
}

/*
*	@desc : function will return json Object with all data for service orgone Therapy
*	@return : json Object
*/
function getOrgoneTherapy() {
	var orgone_therapy_faqs = [
		{
			"question" : "FAQ Question 1",
			"answer_paragraphs" : [
				{
					"has_image" : 1,
					"img_url"	: "/img/url/",
					"answer_text" : "This is para 1 of the answer"
				},
				{
					"has_image" : 0,
					"answer_text" : "This is para 2 of the answer"
				}
			]
		}
	];
	
	var orgone_therapy = {
		"service_title" : "Orgone Therapy",
		"slug"	: "orgone_therapy",
		"banner_img"	: "/img/services/orgone_therapy.jpg",
		"faqs"	: orgone_therapy_faqs 
	};

	return orgone_therapy;
}