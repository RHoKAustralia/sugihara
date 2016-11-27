import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './verify.html';

var STORAGE_KEY = "issues";

var login="Bob Jones";

var issue = new Issue();
console.log(issue.viewEvidence());

/* Commented out while I look for an easier way to achieve the same goal

function createIssueTemplate {
    var container = document.getElementById("container");

    var row = document.createElement("div");
    row.setAttribute("class", "row");
    container.appendChild(row);

    var col = document.createElement("div");
    col.setAttribute("class", "col s12 m12 l12");
    row.appendChild(col);

    var card = document.createElement("div");
    card.setAttribute("class", "card-panel center-align");
    card.setAttribute("id", "evidence");
    col.appendChild(card);

    var section1 = document.createElement("div");
    section1.setAttribute("class", "evidence-top");
    card.appendChild(section1);

    var section2 = document.createElement("div");
    section2.setAttribute("class", "left-align evidence-padding");
    section2.setAttribute("class", "left-align evidence-padding");
    card.appendChild(section2);
}*/

Template.verify.onCreated(function mainOnCreated() {



});

Template.verify.onRendered(function mainOnRendered()
{
    var username = document.getElementById("username");
    username.innerHTML = "<b>" + login + "</b>";
    console.log(issue.evidenceToEvaluate());

});

// Template.verify.onRendered(function mainOnRendered()
// {
//    if (Meteor.isClient)
//    {
//       L.Icon.Default.imagePath = '../public/logo.png';
//    }
//
// });

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

        var evaluation = new Evaluation(login, importance.value, location.value, twness.value, content.value);

        console.log(evaluation.toString());

        /*issue.addEvidence(evaluationData);
        issue.saveData();*/
    }
});

function Evaluation(evaluatorStr, impRatStr, locRatStr, trustRatStr, contentRatStr) {

    // PRIVATE ATTRIBUTES
    var evaluator = evaluatorStr;
    var impRating = impRatStr;
    var locRating = locRatStr;
    var trustRating = trustRatStr;
    var contentRating = contentRatStr;

    // PUBLIC METHODS
    this.getEvaluator = function() {
        return evaluator;
    }

    this.getImpRating = function() {
        return impRating;
    }

    this.getLocRating = function() {
        return locRating;
    }

    this.getTrustRating = function() {
        return trustRating;
    }

    this.getContentRating = function() {
        return contentRating;
    }

    this.toString = function() {
        return this.getEvaluator() + " " + this.getImpRating() + " " + this.getLocRating() + " " +
            this.getTrustRating() + " " + this.getContentRating();
    }

}

function Evidence(authorStr, dateAddedStr, urlStr) {

    // PRIVATE ATTRIBUTES
    var author = authorStr;
    var dateAdded = dateAddedStr;
    var url = urlStr;
    var evaluationList = [];

    // PUBLIC METHODS
    this.getAuthor = function() {
        return author;
    }

    this.getDateAdded = function() {
        return dateAdded;
    }

    this.getUrl = function() {
        return url;
    }

    this.getEvaluationList = function() {
        return evaluationList;
    }

    this.toString = function() {
        return this.getAuthor() + " " + this.getDateAdded() + " " + this.getUrl;
    }

    this.addEvaluation = function(obj) {

        if (obj instanceof Evaluation)
        {
            evaluationList.push(obj);
            return true; // Success
        }
        else
        {
            return false; // Failed; incorrect data type
        }

    }
}

function Issue(dateAddedStr, locationStr, descriptionStr)
{
    // PRIVATE ATTRIBUTES
    var dateAdded = dateAddedStr;
    var location = locationStr;
    var description = descriptionStr;
    var evidenceList = [];

    // PUBLIC METHODS

    this.getDateAdded = function() {
        return dateAdded;
    }

    this.getLocation = function() {
        return location;
    }

    this.getDescription = function() {
        return description;
    }

    this.getEvidenceList = function() {
        return evidenceList;
    }

    this.addEvidence = function(obj) {

        if (obj instanceof Evidence)
        {
            evidenceList.push(obj);
            return true; // Success
        }
        else
        {
            return false; // Failed; incorrect data type
        }

    }

    this.saveData = function() {
        var issuesJSON = JSON.stringify(evidenceList);
        localStorage.setItem(STORAGE_KEY, issuesJSON);
    }

    this.evidenceToEvaluate = function() {
        // Returns an evidence object for the user to evaluate

        for(var i=0; i<evidenceList.length; i++) {
            if(evidenceList[i].author !== login) {
                return evidenceList[i];
            }
        }
        return null;
    }

    // PRIVATE METHODS
    function loadData() {
        console.log("Data loading begins");
        var issuesJSON = localStorage.getItem(STORAGE_KEY);

        // Check if app data is present in local storage
        if (issuesJSON)
        {
            console.log("App data present");
            var issuesParsed = JSON.parse(issuesJSON);
            evidenceList = issuesParsed;
        }
    }

    // RUN ON INITIALISE
    loadData();
}
