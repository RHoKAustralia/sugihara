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
      
Template.verify.events({
    'click #submit'(event, instance) {
        var date = document.getElementById("date");
        var username = document.getElementById("username");
        var evidenceLink = document.getElementById("link");
        var importance = document.getElementById("importance");
        var location = document.getElementById("location");
        var twness = document.getElementById("twness"); // Trustworthiness
        var content = document.getElementById("content");
        var submit = document.getElementById("submit");
        
        var evaluationData = {
            date: date.innerText,
            username: username.innerText,
            link: evidenceLink.innerText,
            importance: Number(importance.value),
            location: Number(location.value),
            twness: Number(twness.value),
            content: Number(content.value)
        };
        
        console.log(evaluationData);
        
        stringified = JSON.stringify(evaluationData);
    }
});
