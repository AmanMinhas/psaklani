
/*Register Routes*/
Router.route('/',{
	template: 'home', // route "/" to template home.
	layoutTemplate : 'homePageLayout' // layout template for the home page.
});
// Router.route('/aboutMe');
// Router.route('/myJourney');
// Router.route('/contact');
Router.route('/services');
Router.route('/press');
Router.route('/eventsandworkshop');

/*Configure Layouts*/
Router.configure({
	layoutTemplate: 'homePageLayout'
});

Router.configure({
	layoutTemplate: 'flowerBgPageLayout'
});

Router.configure({
	layoutTemplate: 'nonHomePageLayout'
});


Router.route('/aboutMe',{
	layoutTemplate : 'flowerBgPageLayout' 
});

Router.route('/myJourney',{
	layoutTemplate : 'flowerBgPageLayout' 
});

Router.route('/tributetocola',{
	layoutTemplate : 'flowerBgPageLayout' 
});

Router.route('/contact',{
	layoutTemplate : 'nonHomePageLayout' 
});