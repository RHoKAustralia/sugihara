import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

var stringified;

Template.main.onCreated(function mainOnCreated() {
     this.counter = new ReactiveVar(0);
     this.message = new ReactiveVar("");
     this.map;
    
    
});

Template.test.onCreated(function mainOnCreated() {
     this.counter = new ReactiveVar(0);
     this.message = new ReactiveVar("");
     this.map;
    
    
});

Template.main.onRendered(function mainOnRendered()
{
   if (Meteor.isClient)
   {
      L.Icon.Default.imagePath = 'packages/bevanhunt_leaflet/images';

      var bgn = [-37.802470, 144.966725];
      var map = Template.instance().map;
      var opt = { doubleClickZoom: true,
                  zoomControl: false,
                  touchZoom: true,
                  scrollWheelZoom: true,
                  maxZoom: 20 }
      map = L.map('map', opt)
         .setView(bgn, 13);

      L.tileLayer.provider('Thunderforest.Transport').addTo(map);

      // var bgnMsg = "<b>Hello!</b><br>Search a location above.<br>Pinpoint your current location with the button below.";
      // var marker = L.marker(bgn);
      // marker.addTo(map);
      // marker.bindPopup(bgnMsg).openPopup();

      L.control.zoom().setPosition('bottomright').addTo(map);

      var popup = L.popup();

      map.on('click', function(e){
         popup
             .setLatLng(e.latlng)
             .setContent("This location is:<br>" + e.latlng.toString())
             .openOn(map);
      });

      var circle = L.circle([-37.78998, 144.93662], 500, {
         color: 'red',
         fillColor: '#f03',
         fillOpacity: 0.5
      });
      circle.addTo(map);
      circle.bindPopup("I am a circle.");


      Template.instance().message.set("Map Loaded");
      Template.instance().map = map;
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

Template.test.onRendered(function mainOnRendered()
{
   if (Meteor.isClient)
   {
      L.Icon.Default.imagePath = 'packages/bevanhunt_leaflet/images';

      var bgn = [-37.802470, 144.966725];
      var map = Template.instance().map;
      var opt = { doubleClickZoom: true,
                  zoomControl: false,
                  touchZoom: true,
                  scrollWheelZoom: true,
                  maxZoom: 20 }
      map = L.map('map', opt)
         .setView(bgn, 13);

      L.tileLayer.provider('Thunderforest.Transport').addTo(map);

      // var bgnMsg = "<b>Hello!</b><br>Search a location above.<br>Pinpoint your current location with the button below.";
      // var marker = L.marker(bgn);
      // marker.addTo(map);
      // marker.bindPopup(bgnMsg).openPopup();

      L.control.zoom().setPosition('bottomright').addTo(map);

      var popup = L.popup();

      map.on('click', function(e){
         popup
             .setLatLng(e.latlng)
             .setContent("This location is:<br>" + e.latlng.toString())
             .openOn(map);
      });

      var circle = L.circle([-37.78998, 144.93662], 500, {
         color: 'red',
         fillColor: '#f03',
         fillOpacity: 0.5
      });
      circle.addTo(map);
      circle.bindPopup("I am a circle.");


      Template.instance().message.set("Map Loaded");
      Template.instance().map = map;
   }

});

Template.test.helpers({
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
      
Template.main.events({
  'click #submit-button'(event, instance) {
      // This code runs when submit is clicked
      console.log("Submit clicked!");
      
      var linkRef = document.getElementById("link");
      var commentsRef = document.getElementById("comments");
      
      var nameRef = document.getElementById("name");
      var postcodeRef = document.getElementById("postcode");
      var emailRef = document.getElementById("email");
      var contactRef = document.getElementById("contact");
    
      var formData = {
          link: linkRef.value,
          comments: commentsRef.value,
          name: nameRef.value,
          postcode: postcodeRef.value,
          email: emailRef.value,
          contact: contactRef.value
      };
      
      stringified = JSON.stringify(formData);
      console.log(stringified);
  },
      
  "click [data-action='polka']"(event, instance) {
    instance.counter.set(instance.counter.get() + 1);
    instance.message.set("you pressed the nice button");
  },
});

Template.test.events({
  'click #submit-button-test'(event, instance) {
      // This code runs when submit is clicked
      console.log("Submit clicked!");
      
      var linkRefTest = document.getElementById("link-test");
      console.log(linkRefTest);
      var commentsRefTest = document.getElementById("comments-test");
      
      var nameRefTest = document.getElementById("name-test");
      var postcodeRefTest = document.getElementById("postcode-test");
      var emailRefTest = document.getElementById("email-test");
      var contactRefTest = document.getElementById("contact-test");
      
      var formData = JSON.parse(stringified);
    
      console.log(formData);
      
      /*
      var linkRefTest.value = formData.link;
      var commentsRefTest.value = formData.comments;
      
      var nameRefTest.value = formData.name;
      var postcodeRefTest.value = formData.postcode;
      var emailRefTest.value = formData.email;
      var contactRefTest.value = formData.contact;
      */
  },
      
  "click [data-action='polka']"(event, instance) {
    instance.counter.set(instance.counter.get() + 1);
    instance.message.set("you pressed the nice button");
  },
});