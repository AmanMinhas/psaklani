Meteor.startup(function () {	
  var oCredentials = {};
  
  oCredentials = Meteor.call('getEmailCredentials');

  smtp = {	
    username  : oCredentials.email,   
    password  : oCredentials.password,   
    server    : 'smtp.gmail.com', 
    port      : 25
  }

  process.env.MAIL_URL = 'smtp://' + encodeURIComponent(smtp.username) + ':' + encodeURIComponent(smtp.password) + '@' + encodeURIComponent(smtp.server) + ':' + smtp.port;
  
});