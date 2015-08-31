$(window).scroll(function(){
	var numPageTopPos = $(window).scrollTop();
	
	if(numPageTopPos > 92) {
		$("#my-navbar-nav").removeClass("navbar-fixed-bottom");
	} else {
		console.log("in else");
		$("#my-navbar-nav").addClass("navbar-fixed-bottom");
	}
});
