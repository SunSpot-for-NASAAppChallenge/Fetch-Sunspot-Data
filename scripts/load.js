/**
 * load.js
 * (C) 2017 by Brian Sandon (bxs9775@rit.edu)
 * Released under GPL-3.0
 *
 *Loads the other scripts
**/

"use strict";

var app = app || {};

(function(){
    window.onload = function(){
        Object.seal(app.fetch);
        app.fetch.setup();
        
        app.main.fetch = app.fetch;
        Object.seal(app.main);
        app.main.setup();
    }
}());