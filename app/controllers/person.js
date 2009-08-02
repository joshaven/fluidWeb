/* 
 * Controller action definations should not be nessassary for the operation of the controller action.
 * The action should only add value through a logical place to modify the controller action...
 * This controller file, however, should also be a place to instantize actions.
 * A controller should not invent content by default (don't render a blank template).
 */

this.action.josh = function(){
  page = new Fluid.core.page; // page variable should be made automatically 
  // return page // controller actions should not need to return the page object, it should only be modified in the controller action
  return "Hello Joshaven"
});