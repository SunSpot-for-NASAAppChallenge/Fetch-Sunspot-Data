/**
 * main.js
 * (C) 2017 by Brian Sandon (bxs9775@rit.edu)
 * Released under GPL-3.0
**/

"use strict";

var app = app || {};

app.main = {
    fetch: undefined,
    
    setup: function(){
        this.fetch.returnResults = this.displayTestResults;
        this.fetch.fetch.apply(this.fetch);
        
    },
    
    //Display results and display them in the console.
    displayTestResults: function(result){
        console.dir(result)
        document.querySelector("#results").textContent = result;
    }
};