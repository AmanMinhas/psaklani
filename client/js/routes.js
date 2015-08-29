
/*Register Routes*/
Router.route('/',{
	template: 'home', // route "/" to template home.
	layoutTemplate : 'homePageLayout' // layout template for the home page.
});
Router.route('/about');
Router.route('/contact');

/*Configure Layouts*/
Router.configure({
	layoutTemplate: 'homePageLayout'
});

Router.configure({
	layoutTemplate: 'nonHomePageLayout'
});

Router.route('/main',{
	layoutTemplate : 'nonHomePageLayout' 
});
