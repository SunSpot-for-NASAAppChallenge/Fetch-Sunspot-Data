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
        console.dir(result);
        
        var main_div = document.querySelector("#results");
        main_div.textContent = "";
        
        var p1 = document.createElement("p");
        p1.textContent = "Temperature: " + result.air_temp;
        main_div.appendChild(p1);
        
        var p2 = document.createElement("p");
        p2.textContent = "Percent cloudcover: " + result.clouds.all + "%";
        main_div.appendChild(p2);
        
        var p3 = document.createElement("p");
        p3.textContent = "Wind: " + result.wind.speed + " mph, " + result.wind.deg + " degrees from true north";
        main_div.appendChild(p3);
        
    }
};