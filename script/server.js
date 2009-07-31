/*
 * FluidJS - server.js
 * Licensed under the MIT License
 * Copyright (c) 2009 FluidJS Development Team < http://fluidjs.com >
 * Revision 1 - Thu Jul 30 22:42:33 EDT 2009
 */
// require("../lib/fluid.core.js");
// require("../lib/circle.js");
// include("../lib/fluid.core.js");



var core, i,
    libraries = [ // TODO: read library list from external file: libraries.yml
      "fluid.core.js"
    ],
    server1_port = ARGV[2] || 7000,
    environment = ARGV[3] || 'development',
    server1 = node.http.createServer(function (req, res) {
      if (environment === 'development'){ // echo the requested info to the console if in development mode
        puts('http version:'+req.httpVersion +' '+ req.method +' '+ req.uri);
        puts(req.headers);
      }
      res.sendHeader(200, [["content-type", "text/plain"]]);
//TODO make controller more functional
      res.sendBody(core.controller(req.uri + '\n'));
      res.sendBody(core.controller( JSON.stringify(req)));
//
      res.finish();
    });

// Includes
for (i=0,len=libraries.length; i<len; i++) {
  include("../lib/" + libraries[i]);
}




onLoad = function(){
  core = new Fluid.core;
  server1.listen(server1_port);
}
