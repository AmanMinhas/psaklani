Meteor.methods({
	adjustGreenStripSize: function(strTemplateName) {
		console.log("in function adjustGreenStripSize");

		mqDesktopScreen = window.matchMedia("(min-device-width: 1800px)");
		mqLaptopScreen = window.matchMedia("(min-device-width: 1000px) and (max-device-width: 1400px)");

		if(mqDesktopScreen.matches) {
			console.log("this is mqDesktopScreen");

			switch(strTemplateName) {
				case 'aboutMe' : numGreenForestStripHeight = 1870; break;
				case 'myJourney' : numGreenForestStripHeight = 2970; break;
				case 'tributetocola' : numGreenForestStripHeight = 1040; break;
				default	: numGreenForestStripHeight = 0; break;
			}
			
			$(".greenForestStrip").css("height",numGreenForestStripHeight);
		
		} else if(mqLaptopScreen.matches) {
			console.log("this is mqLaptopScreen");
			switch(strTemplateName) {
				case 'aboutMe' : numGreenForestStripHeight = 2300; break;
				case 'myJourney' : numGreenForestStripHeight = 3370; break;
				case 'tributetocola' : numGreenForestStripHeight = 860; break;
				// default	: numGreenForestStripHeight = 0; break;
			}
			
			$(".greenForestStrip").css("height",numGreenForestStripHeight);
		} else {
			$(".greenForestStrip").css("height",0);
		}
	}	
});