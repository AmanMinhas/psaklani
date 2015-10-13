/*
Below, you see block of information about each slide within { }.
Each { } is called an object.

Add New Slide:
	A slide is everything you see inside { }. 
	Each object -> { } should be separated with a comma. The last object is an exception, you do not need to put a comma at the end.
	
	Copy any one of the objects, put a comma after the last one and paste it after the comma.
	Change the title, image_url and blog_link. At a time only one object should be active, that is considered as the 1st slide in the slider.
	Unless the new slide you are adding is the 1st slide - keep "active" : ""
	
Remove A Slide:
	Remove the object. Make sure all the objects are separated by commas. There should be no comma after the last object.
*/
var jsonRecentBlogsPosts = [
	{
		"blog_title" : "Caring for your pet during the moonsoons",
		"image_url" : "/img/footer_images/dog.jpg",
		"blog_link" : "http://theanimalhealer.blogspot.in/",
		"active"	: "active" // Active for the 1st slide.
	} 
];

Template.registerHelper('recentBlogPosts',function() {

	return jsonRecentBlogsPosts;
});

Template.registerHelper('isRecentBlogPostsMoreThanOne',function() {
	// console.log(jsonRecentBlogsPosts.length>1);
	return jsonRecentBlogsPosts.length>1;
})