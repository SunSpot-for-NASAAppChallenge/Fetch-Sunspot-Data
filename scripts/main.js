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
        var response = this.fetch.sunspotResponse();
        
        document.querySelector("#results").textContent = response;
    }
};