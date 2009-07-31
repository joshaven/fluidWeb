/*
 * FluidJS - server.js
 * Licensed under the MIT License
 * Copyright (c) 2009 FluidJS Development Team < http://fluidjs.com >
 * Revision 1 - Thu Jul 30 22:42:33 EDT 2009
 */

 var server1_port = 7000;

 var server1 = node.http.createServer(function (req, res) {
   // node.debug("backend");
   res.sendHeader(200, [["content-type", "text/plain"]]);
   res.sendBody("hello world\n");
   res.finish();
 });
 
 server1.listen(server1_port);
