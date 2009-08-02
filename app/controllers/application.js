/* 
 * This file is only needed to define things that cannot be defined in a controller or are applicable to all controllers.  
 * Everything in this file will have to be loaded for every request made to your application.
*/

// To change the location of the controller set the uri_format... default is '/controler/action/id'
// this.Setting = function(){};

this.ApplicationController = function(){
  // this.uri_format = '/action/controller/id'; // this would work for a url like http://www.dom.tld/show/person/1
};
// exports.settings = settings


// TODO Remove the following development stamp:
if (ENV === 'development') puts("loaded app/controller/application.js "   );
