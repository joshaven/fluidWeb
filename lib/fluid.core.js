/*
 * FluidJS - fluid.core.js
 * Licensed under the MIT License
 * Copyright (c) 2009 FluidJS Development Team < http://fluidjs.com >
 * Revision 1 - Thu Jul 30 22:42:33 EDT 2009
 */

include('fluid.core.response.js');

onLoad = function(){
  var self = {},
      // Controller = new coreController,
      Fluid = {
        core: function(){
          return Fluid.fn;
        },
        fn: { // namespace for plugins
          // controller: coreController,
          response: function(uri){
            var response = new fluidCoreResponse(uri);
            
            return response;
          }
        } // end of Fluid.fn object
      }; // end of Fluid object
  
  exports.Fluid = Fluid;
};
// // Example core extention:
// Fluid.fn.greeter = function(){ return 'Hello'; };
// f = new Fluid.core;
// f.greeter()
