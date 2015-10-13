
Template.home.rendered = function() {
	//To stick the menu to the bottom of the page till it reaches its actual location at the bottom of the image. Remove the class "navbar-fixed-bottom" once the page is scrolled to appropriate position
	$(".homepage_1 #my-navbar-nav").addClass("navbar-fixed-bottom");

	$(window).scroll(function(){
		var numScreenHeight = $(window).height();
		var numHomepageImageHeight = $("#homepage_1").height();
		var numNavHeight = $(".homepage_1_nav_bottom").height();

		var numPageTopPos = $(window).scrollTop();
		var numPageBottomPos = $(window).scrollTop() + numScreenHeight;
		
		var numNavTopPos = numHomepageImageHeight - numNavHeight;
		// console.log("screen height "+ numScreenHeight);
		
		if(numPageBottomPos > numHomepageImageHeight) {
			$("#homepage_1 #my-navbar-nav").removeClass("navbar-fixed-bottom");
		} else {
			$("#homepage_1 #my-navbar-nav").addClass("navbar-fixed-bottom");
		}

		if(numPageTopPos >= numNavTopPos ) {
			$("#homepage_1 #my-navbar-nav").addClass("navbar-fixed-top");
		} else {
			$("#homepage_1 #my-navbar-nav").removeClass("navbar-fixed-top");
		}

	});
}