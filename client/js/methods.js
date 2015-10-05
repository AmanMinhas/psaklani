Meteor.methods({
	adjustGreenStripSize: function(strTemplateName) {
		console.log("in function adjustGreenStripSize");

		mqDesktopScreen = window.matchMedia("(min-device-width: 1800px)");
		mqLaptopScreen = window.matchMedia("(min-device-width: 1000px) and (max-device-width: 1400px)");

		if(mqDesktopScreen.matches) {
			console.log("this is mqDesktopScreen");

			switch(strTemplateName) {
				case 'aboutMe' : numGreenForestStripHeight = 1550; break;
				case 'myJourney' : numGreenForestStripHeight = 2400; break;
				case 'tributetocola' : numGreenForestStripHeight = 1000; break;
				default	: numGreenForestStripHeight = 0; break;
			}
			
			$(".greenForestStrip").css("height",numGreenForestStripHeight);
		}

		if(mqLaptopScreen.matches) {
			console.log("this is mqLaptopScreen");
		}
	}	
});