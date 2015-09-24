Template.navigation.helpers({
	activeIfTemplateIs: function(template) {
		var currentRoute = Router.current();
		return currentRoute && template.toLowerCase() === currentRoute.lookupTemplate().toLowerCase() ? 'active' : '' ;
	}
});