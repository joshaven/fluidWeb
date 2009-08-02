/*
 * FluidJS - server.js
 * Licensed under the MIT License
 * Copyright (c) 2009 FluidJS Development Team < http://fluidjs.com >
 * Revision 1 - Thu Jul 30 22:42:33 EDT 2009
 */

// GLOBAL VARIABLES
ENV = ARGV[3] || 'development';
// ROOT = node.path.dirname(__filename)// need to set path to root
// END GLOBAL VARIABLES

var core, i,
    
    libraries = [ // TODO: read library list from external file: libraries.yml
      "fluid.core.js"
    ],
    
    server1_port = ARGV[2] || 7000,
    
    // ENV = ARGV[3] || 'development',
    
    server1 = node.http.createServer(function (req, res) {
      var response = new core.response(req.uri);
      
      if (ENV === 'development'){ // echo the requested info to the console if in development mode
        puts('http version:'+req.httpVersion +' '+ req.method +' '+ req.uri);
        puts(req.headers);
      }
      
      res.sendHeader( response.status(), response.headers() );
      res.sendBody( response.body.toString() );
      res.finish();
    });

// Includes
for (i=0,len=libraries.length; i<len; i++) {
  include("../lib/" + libraries[i]);
}

onLoad = function(){
  core = new Fluid.core;
  server1.listen(server1_port);
};
