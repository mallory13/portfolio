"use strict";

//global variables
//var missionStatement = "";
//projects array
var projects = "";
var awards = "";
var education = "";
var skills = "";
var volunteer = "";
var work = "";
var goals = "";
var contact = "";



//iife immediately invoked function expression
//annonymous self executed functions
(function () {
    //code block being called by this function
    console.log("App started...");
    
    //named function way
    // function replaceFirstParagraph() {
        
    //     console.log("inside replaceFirstParagraph function");
    //     var firstParagraph;
    //     firstParagraph = document.getElementById("firstParagraph");
    //     firstParagraph.innerHTML = "My new paragraph data";

    // }
    
    function missionStatement() {
        
        console.log("inside missionStatement function");
        var missionStatement;
        missionStatement = document.getElementById("missionStatement");
        missionStatement.innerHTML = "Mission statement information here";

    }
    
    function awards() {
        
        console.log("inside awards function");
        var awards;
        awards = document.getElementById("awards");
        awards.innerHTML = "Awards information here";

    }
    
    function education() {
        
        console.log("inside education function");
        var education;
        education = document.getElementById("education");
        education.innerHTML = "Education information here";

    }
    
    function skills() {
        
        console.log("inside skills function");
        var skills;
        skills = document.getElementById("skills");
        skills.innerHTML = "Skills information here";

    }
    
    function volunteer() {
        
        console.log("inside volunteer function");
        var volunteer;
        volunteer = document.getElementById("volunteer");
        volunteer.innerHTML = "Volunteer information here";

    }
    
    function work() {
        
        console.log("inside work function");
        var work;
        work = document.getElementById("work");
        work.innerHTML = "My new paragraph data";

    }
    
    function goals() {
        
        console.log("inside goals function");
        var goals;
        goals = document.getElementById("goals");
        goals.innerHTML = "Goals information here";

    }
    
    function projects() {
        
        console.log("inside projects function");
        var projects;
        projects = document.getElementById("projects");
        projects.innerHTML = "Projects information here";

    }
    
    function contact() {
        
        console.log("inside contact function");
        var contact;
        contact = document.getElementById("contact");
        contact.innerHTML = "Contact information here";

    }
    
    function branding() {
        
        console.log("inside contact function");
        var branding;
        branding = document.getElementById("branding");
        branding.innerHTML = "Branding information here";

    }
    
    function styleGuide() {
        
        console.log("inside styleGuide function");
        var styleGuide;
        styleGuide = document.getElementById("styleGuide");
        styleGuide.innerHTML = "Style guide information here";

    }
    //declare anonymous function with named alias
    /*
    var replaceFirstParagraph = function(){
        var firstParagraph;
        
        firstParagraph = document.getElementByID("first paragraph");
        firstParagraph.innerHTML = "first para data";
        
    };
*/


//call the functions
missionStatement();
awards();
education();
skills();
volunteer();
goals();
projects();
contact();
branding();
styleGuide();


})();