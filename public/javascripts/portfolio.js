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
var missionParagraph = "";
var missionStatement = "";



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
    
    
    // mission statement section
    function missionStatement() {
        
        console.log("inside missionStatement function");
        var missionStatement;
        var missionParagraph;
        missionStatement = document.getElementById("missionStatement");
        missionStatement.innerHTML = "Mission Statement:";
        
        missionParagraph = document.getElementById("missionParagraph");
        missionParagraph.innerHTML = "I am currently a web accessibility consultant for the Ministry of Education. My professional mission is to strive to be a life long learner and continually develop a variety of skills. I will seek and take advantage of opportunities to gain experience in the web development industry as well as confront and learn from every challenge presented in the process. I will continue to expand my portfolio while creating and maintaining positive personal and working relationships.";

    }
    
    
    // accomplishments section
    function awards() {
        
        console.log("inside awards function");
        var awards;
        var award1;
        var award2;
        var award3;
        var award4;
        var award5;
        awards = document.getElementById("awards");
        awards.innerHTML = 

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