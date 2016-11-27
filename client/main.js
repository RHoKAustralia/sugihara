import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
import './verify.html';

var stringified;

Template.main.onCreated(function mainOnCreated() {
     this.counter = new ReactiveVar(0);
     this.message = new ReactiveVar("");
});

Template.main.onRendered(function mainOnRendered()
{
   if (Meteor.isClient)
   {
      console.log("Rendered!")
   }
});

Template.main.helpers({
  counter() {
    return Template.instance().counter.get();
  },
  message() {
    return Template.instance().message.get();
  },
});

Template.main.events({
  'click #submit-button'(event, instance) {
      // This code runs when submit is clicked
      console.log("Submit clicked!");

      var formData = {
         link: document.getElementById("link").value,
         author: document.getElementById("author").value,
         postcode: document.getElementById("postcode").value,
         tags: document.getElementById("tags").value,
         importance:  document.getElementById("importance").value,
      };

      stringified = JSON.stringify(formData);
      console.log(stringified);
  },

  "click [data-action='polka']"(event, instance) {
    instance.counter.set(instance.counter.get() + 1);
    instance.message.set("you pressed the nice button");
  },
});
