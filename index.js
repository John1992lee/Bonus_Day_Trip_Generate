"use strict";

let destinations = ['Sacramento, California', 'Denver, Colorado', 'Alberta, Canada', 'Myrtle Beach, South Carolina'];
let restaurant = ["Texas RoadHouse", "Applebees", "McDonalds", "Dmoninoes"]
let transportation = ["Horse Back Riding - slow but you'll get there. ", "Teleport Portal - Fastest but expensive.", "Hitch Hiking - Longest but cheapest.", "Riding T-Rex - Caution Might Get EATEN!"]
let entertainments = ["Music festival", "Skiing/snowboarding", "Beach", "Casino"]

let destList = getRandomList(destinations);
let restList = getRandomList(restaurant);
let transpList = getRandomList(transportation);
let enterList = getRandomList(entertainments);

function myFunction() {
    let generatorDes = 'Destination: ' + destList
    let generatorRest = 'Restaurant: ' + restList
    let generatorTranps = 'Transportation: ' + transpList
    let generatorEnter = 'Entertainments: ' + enterList
    let fullList = [generatorDes, generatorRest, generatorTranps, generatorEnter]
    if (confirm(fullList) == true) {
        yourSatisfy();
    }
}      

function yourSatisfy() {
    let randomTrip = prompt("Will this trip be your satisfaction? Yes/No:");
    if (randomTrip == 'yes') {
        alert('The trip has been book!');
    } else if (randomTrip == 'no') {
        changeList();
    } else {
        alert('Error! Choose another option!');
        yourSatisfy();
    }
}

function changeList() {
    let whichTrip = prompt('Which option you are not satisfy with? Destinations, Restaurant, transportation, entertainments:'); 
    if (whichTrip == "destinations") {
        removeDestList(destList);
        destList = getRandomList(destinations);
        myFunction();
    } else if (whichTrip == "restaurant") {
        removeRestList(restList);
        restList = getRandomList(restaurant);
        myFunction();
    } else if (whichTrip == "transportation") {
        removeTranspList(transpList);
        transpList = getRandomList(transportation);
        myFunction();
    } else if (whichTrip == "entertainments") {
        removeEnterList(enterList);
        enterList = getRandomList(entertainments);
        myFunction();
    } else {
        alert('Error! please choose another option!')
    }
}

function getRandomList(listChoices) {
    let randomList = listChoices[Math.floor(Math.random() * listChoices.length)];
    return randomList;
}

function removeDestList (destRemove) {
    let index = destinations.indexOf(destRemove);
    if (index > -1) {
        destinations.splice(index, 1);
        getRandomList(destinations);
    }    
}
function removeRestList (restRemove) {
    let index = restaurant.indexOf(restRemove);
    if (index > -1) {
        restaurant.splice(index, 1);
        getRandomList(restaurant);
    }
}
function removeTranspList (transpRemove) {
    let index = transportation.indexOf(transpRemove);
    if (index > -1) {
        transportation.splice(index, 1);
        getRandomList(transportation)
    }
}
function removeEnterList (enterRemove) {
    let index = entertainments.indexOf(enterRemove);
    if (index > -1) {
        entertainments.splice(index, 1);
        getRandomList(entertainments);
    }
}
