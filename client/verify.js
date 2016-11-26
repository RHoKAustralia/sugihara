import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './verify.html';

var stringified;

Template.verify.onCreated(function mainOnCreated() {
     this.counter = new ReactiveVar(0);
     this.message = new ReactiveVar("");
     this.map;
    
    
});

Template.verify.onRendered(function mainOnRendered()
{
   if (Meteor.isClient)
   {
      L.Icon.Default.imagePath = '../public/logo.png';
   }

});

Template.verify.helpers({
  counter() {
    return Template.instance().counter.get();
  },
  message() {
    return Template.instance().message.get();
  },
});

/*Template.main.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
    instance.message.set("you pressed the html button");
  },*/
      
Template.verify.events({});
