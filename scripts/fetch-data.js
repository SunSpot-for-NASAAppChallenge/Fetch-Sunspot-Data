/**
 * fetch-data.js
 * (C) 2017 by Brian Sandon (bxs9775@rit.edu)
 * Released under GPL-3.0
**/

"use strict";

var app = app || {};

app.fetch = {
    ///////////////////////FIELDS///////////////////////
    location: Object.seal({
        city: "Rochester",
        state: "NY"
    }),
    //Lists all the sites we are getting data from
    //For each site there are the following parameters:
    //  dataType - what the data is being returned as
    //  url - the url of the site
    //  format - a format string for the site. Different elements are seperated by spaces, variables are in brackets.
    //      (accepted variables: [url], [city])
    //  callback - the callback methods for the function
    sites: Object.seal({
        weather: Object.seal({
            dataType: "jsonp",
            url:"http://api.openweathermap.org/data/2.5/weather?q=",
            format: "[url] [city] &appid= [key]",
            callback: undefined, //This must be set in setup
            key: "eae1d0e8e3975649ee03a83327f96fcf"
        })
    }),
    
    result: Object.seal({
        air_temp: undefined,
        wind: undefined,
        clouds: undefined,
        clear: function(){
            this.air_temp = undefined;
            this.wind = undefined;
            this.clouds = undefined;
        }
    }),
    numItemsLoaded: 0,
    itemsExpected: 1,
    
    //Function pointer for when the program is done loading
    returnResults: undefined,
    
    ///////////////////////METHODS///////////////////////
    //Completes any initialization for the project
    setup: function(){
        this.sites.weather.callback = this.processWeather.bind(this);
    },
    
    //Fetches the data for the project
    fetch: function(){
        this.reset();
        
        this.retrieveData(this.sites.weather);
        
    },
    
    //Clears result and numItemsLoaded
    reset: function(){
        this.result.clear();
        this.numItemsLoaded = 0;
    },
    
    ///////////////////////API FETCHES///////////////////////
    //Retrieves data from a given site
    retrieveData: function(site){
        console.dir(site);
        
        var url = "";
        var elements = site.format.split(" ");
        for(var i = 0; i < elements.length;i++){
            switch(elements[i]){
                case "[url]":
                    url += site.url;
                    break;
                case "[city]":
                    url += this.location.city;
                    break;
                case "[key]":
                    url += site.key;
                    break;
                default:
                    url += elements[i];
                    break;
            }
        }
        
        $.ajax({
            dataType: site.dataType,
            url: url,
            data: null,
            success: site.callback
        })
    },
    
    ///////////////////////CALLBACK///////////////////////
    //Increments the number of items loaded by one, and 
    updateNumItems(){
        this.numItemsLoaded++;
        if(this.numItemsLoaded >= this.itemsExpected){
            if(this.returnResults != undefined){
                this.returnResults(this.result);
            }
        }
    },
    
    //Takes the data from the 
    processWeather: function(obj){
        this.result.air_temp = obj.main.temp;
        this.result.wind = obj.wind;
        this.result.clouds = obj.clouds;
    
        console.log("Weather loaded!");
        
        this.updateNumItems();
    },
    
};