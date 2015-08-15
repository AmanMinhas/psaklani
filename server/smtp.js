Meteor.startup(function () {	
  var oCredentials = {};
  oCredentials = JSON.parse(Assets.getText("data.json"));
  
  smtp = {
    username  : oCredentials.email,   
    password  : oCredentials.password,   
    server    : 'smtp.gmail.com', 
    port      : 25
  }

  process.env.MAIL_URL = 'smtp://' + encodeURIComponent(smtp.username) + ':' + encodeURIComponent(smtp.password) + '@' + encodeURIComponent(smtp.server) + ':' + smtp.port;
  
});