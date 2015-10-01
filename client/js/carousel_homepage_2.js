Template.carousel_homepage_2.helpers({
	json_homepage_2_carousel_data : function() {
		
		console.log(cServices.find().fetch());
		carouselData = [
				{
					"title" : "Essential Oil Therapy",
					"image"	: "/img/homepage_images/services-carousel/banner-essential-oil-therapy.jpg",
					"active": "active"
				},
				{
					"title" : "Essential Oil Therapy",
					"image"	: "/img/homepage_images/services/slide2.png",
					"active": ""
				},
				{
					"title" : "Essential Oil Therapy",
					"image"	: "/img/homepage_images/services/slide3.png",
					"active": ""
				},
				{
					"title" : "Essential Oil Therapy",
					"image"	: "/img/homepage_images/services/slide4.png",
					"active": ""
				}];

		return carouselData;	
	}
});









