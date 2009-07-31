/*
 * FluidJS - fluid.core.js
 * Licensed under the MIT License
 * Copyright (c) 2009 FluidJS Development Team < http://fluidjs.com >
 * Revision 1 - Thu Jul 30 22:42:33 EDT 2009
 */

var Fluid = {
  core: function(){
    return Fluid.fn;
  },
  fn: { // namespace for plugins
    // toString: function(){return "this is toString()";},
    controller: function(action){
      return action;
    }
  }
};

exports.core = Fluid.core;
exports.Fluid = Fluid;

// // Example core extention:
// Fluid.fn.greeter = function(){ return 'Hello'; };
// f = new Fluid.core;
// f.greeter()
