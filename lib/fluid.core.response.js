// var settings;
include('../app/controllers/application.js');

function onLoad(){
  var application = new ApplicationController;
      cache = {
        uri_format: application.uri_format || '/controller/action/id'
      };
}


this.fluidCoreResponse = function(uri) {
  var self = this;//,
      // cache = {};
  cache.uri = uri;
    parseURI(uri);

  self.headers = function(){ // TODO needs to return intelegent headers
    return [["Content-Length", self.body.toString().length],
            ["Content-Type", "text/plain"]];
  };

  self.status = function(statusCode){ // returns the status code... ie 
    return statusCode === undefined ? cache.statusCode || 200 : statusCode;
  };

  self.body = function(){
    var controller = require( controller_path() );    
  };
  self.body.toString = function(force){
    // This method is cached because toString may be called on a page multiple times, to check size & rendering time, etc...
    // Setting force to true will ignore the cached version of body.toString()
    if (cache.string === undefined) return cache.string = self.body.stringify();
    return force === true ? self.body.stringify() : cache.string;
  };
  self.body.stringify = function(){ return "From fluidCoreResponse.stringify()... loading: " + JSON.stringify(cache.controller); };
};


/*
 * Private Functions
 */
function controller_path(uri){
  return '../app/controllers/' + cache.controller + '.js';
};
function parseURI(uri){
  uri_array = uri.toString().split('?')[0].split('/');
  format_array = (cache.uri_format).split('/');
  cache.controller = uri_array[format_array.indexOf('controller')];
  cache.action = uri_array[format_array.indexOf('action')];
  cache.id = uri_array[format_array.indexOf('id')];
  cache.query = uri.toString().split('?')[1];
  return true;
}
