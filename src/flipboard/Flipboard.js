import React, { Fragment } from "react";
import "./flipboard.css"
import $ from 'jquery';

/* 
 * ================================================================|
 * Global Variables                                                |
 * ================================================================|
 */
var stackAnimating = [];
var globalFlipBoardState = [];
var SLMap = new Map();
var startUp = true;
var globalBoolState = [];
var componentLocations = [];
// Length is 65
var characterList = [
    "p", "b", "g", "y", "o", "r", "w", "%", "?", ">", "<", ".", ",",
    "*", ":", ";", "=", "&", "+", "_", "-", "^", ")", "(", "$", "#",
    "@", "!", "0", "9", "8", "7", "6", "5", "4", "3", "2", "1", "Z",
    "Y", "X", "W", "V", "U", "T", "S", "R", "Q", "P", "O", "N", "M",
    "L", "K", "J", "I", "H", "G", "F", "E", "D", "C", "B", "A", " "
];
// Total time for the MAX FLIP is 2.00 seconds, total length is 64
var timingDataMedium = [
    300, 200, 200, 100,
    100, 100, 20, 20, 20, 20, 20, 20, 20, 20,
    20, 20, 20, 20, 20, 20, 20, 20, 20, 20,
    20, 20, 20, 20, 20, 20, 20, 20, 20, 20,
    20, 20, 20, 20, 20, 20, 20, 20, 20, 20,
    20, 20, 20, 20, 20, 20, 20, 20, 20, 20,
    20, 20, 20, 20, 20, 20, 20, 20, 20, 20,
];

var totalComponents = 64;
var speed = 1000;


/* 
 * ================================================================|
 * Initializtion Methods                                           |
 * ================================================================|
 */
function initializeBoard() {
    initializeBoolState();
    populateSLMap();
    populateState();
    initializeLocations();
    setLocations();
    setAllZ();
    //animateStartScreen();
}
function initializeBoolState() {
    for (var i = 0; i < totalComponents; i++) {
        globalBoolState.push(true);
    }
}
// Populate sprite locations
function populateSLMap() {
    var spriteLength = 7740;
    var i = 0;
    for (var j = spriteLength; j >= 0; j -= 120) {
        var locations = [];
        locations.push("-" + j + "px");
        locations.push("-" + (j - 60) + "px");
        SLMap.set(characterList[i], locations);
        i++;
    }
}
function populateState() {
    for (var i = 0; i < totalComponents; i++) {
        var spriteLength = 7740;
        var componentState = []
        for (var j = spriteLength; j >= 0; j -= 60) {
            var location = "-" + j + "px";
            componentState.push(location);
        }
        globalFlipBoardState.push(componentState);
    }
}
function initializeLocations() {
    var page_height = $(document).height();
    var page_width = $(document).width();

    if (page_width < 1300) {
        return;
    }
    $("#flipboard-row-0").css({ "top": "0px" });
    $("#flipboard-row-1").css({ "top": "80px" });
    $("#flipboard-row-2").css({ "top": "160px" });
    $("#flipboard-row-3").css({ "top": "240px" });
    $("#flipboard-row-4").css({ "top": "320px" });
    // Calculate Locations of the actual Flip Components
    for (var r = 0; r < 4; r++) {
        for (var c = 0; c < 16; c++) {
            var coords = [];
            coords.push(20 + (c * 80));
            coords.push(80 + (r * 160));
            componentLocations.push(coords);
        }
    }
}
// Function for initializing the locations of the flip board components
function setLocations() {
    for (var i = 0; i < totalComponents; i++) {
        $("#FS_0_0_" + i).css({ "left": componentLocations[i][0] + "px", "top": componentLocations[i][1] + "px", "background-position": globalFlipBoardState[i][globalFlipBoardState[i].length - 1] });
        $("#FS_1_0_" + i).css({ "left": componentLocations[i][0] + "px", "top": componentLocations[i][1] + 40 + "px", "background-position": globalFlipBoardState[i][globalFlipBoardState[i].length - 2] });
        $("#FS_0_1_" + i).css({ "left": componentLocations[i][0] + "px", "top": componentLocations[i][1] + "px", "background-position": globalFlipBoardState[i][globalFlipBoardState[i].length - 3] });
        $("#FS_1_1_" + i).css({ "left": componentLocations[i][0] + "px", "top": componentLocations[i][1] + 40 + "px", "background-position": globalFlipBoardState[i][globalFlipBoardState[i].length - 4] });
    }
}

function setAllZ() {
    for (var i = 0; i < totalComponents; i++) {
        setIndexZ(i);
    }
}
// Function that will layer the React Elements based on the current positioning in the state array
function setIndexZ(component) {
    var i = component;
    if (globalBoolState[i]) {
        $("#FS_0_0_" + i).css({ "z-index": "3" });
        $("#FS_1_0_" + i).css({ "z-index": "4" });
        $("#FS_0_1_" + i).css({ "z-index": "1" });
        $("#FS_1_1_" + i).css({ "z-index": "2" });
    } else {
        $("#FS_0_0_" + i).css({ "z-index": "1" });
        $("#FS_1_0_" + i).css({ "z-index": "2" });
        $("#FS_0_1_" + i).css({ "z-index": "3" });
        $("#FS_1_1_" + i).css({ "z-index": "4" });
    }
    globalBoolState[i] = !globalBoolState[i];
}

/* 
 * ================================================================|
 * Text Proccessing and Display Methods                            |
 * ================================================================|
 */
// Refactors a word to a valid string of chars for the flip board to process and covert
function refactorWord(word) {
    var inputChars = word.split("");
    var newChars = [];
    var color = false;
    for (var i = 0; i < inputChars.length; i++) {
        if (color) {
            switch (inputChars[i]) {
                case "w":
                case "r":
                case "o":
                case "y":
                case "g":
                case "b":
                case "p":
                    newChars.push(inputChars[i]);
                    color = false;
                    break;
                default:
                    console.log(inputChars[i]);
                    break;
            }
        }
        else if (inputChars[i] == inputChars[i].toUpperCase()) {
            if (inputChars[i] == "~") {
                color = true;
                if (i == (inputChars.length - 1)) {
                    alert("Cannot end with ~");
                }
            }
            else {
                newChars.push(inputChars[i]);
            }
        } else {
            newChars.push(inputChars[i].toUpperCase());
        }
    }
    return newChars;
}
// Handles the new line char from strings
function refactorNL(charArray) {
    var newChars = [];
    var newLinesBefore = 1;
    var i = 0;
    for (var l = 0; l < charArray.length; l++) {
        if (charArray[l] == "|") {
            var j = i;
            while ((j + 1) % 16 != 0) {
                j++;
            }
            var spaces = j - i + newLinesBefore;
            for (var k = 0; k < spaces; k++) {
                newChars.push(" ");
                i++;
            }
            newLinesBefore++;
        } else {
            newChars.push(charArray[l]);
        }
        i++;
    }
    return newChars;
}
function fullRefactorWord(word) {
    var letters;
    letters = refactorWord(word);
    if (letters.length <= 32) {
        letters.unshift("|");
    }
    letters = refactorNL(letters);
    if (letters.length > totalComponents) {
        alert("Word is too long");
    }
    for (var i = letters.length; i < totalComponents; i++) {
        letters.push(" ");
    }
    return letters;
}

// Displays the word on the screen by calling flips to the correct elements
function displayWord(letters, timingData) {
    for (var i = 0; i < letters.length; i++) {
        var locations = SLMap.get(letters[i]);
        var r = (globalFlipBoardState[i].length / 2) - (globalFlipBoardState[i].indexOf(locations[0]) / 2) - 1;
        // r is how many times being flipped, i is component
        flipRepeat(r, i, timingData);
    }
}
/* 
 * ================================================================|
 * Animation Functions and Helper Methods                          |
 * ================================================================|
 */
function animateStartScreen(i) {
    displayWord(fullRefactorWord("web developer.  programmer.     entrepreneur."), timingDataMedium);
}

function shiftSpritePosition(component) {
    var i = component;
    var T1 = globalFlipBoardState[i][globalFlipBoardState[i].length - 2];
    var T2 = globalFlipBoardState[i][globalFlipBoardState[i].length - 1];
    for (var j = globalFlipBoardState[i].length - 1; j > 1; j--) {
        globalFlipBoardState[i][j] = globalFlipBoardState[i][j - 2];
    }
    globalFlipBoardState[i][0] = T1;
    globalFlipBoardState[i][1] = T2;

    if (globalBoolState[i]) {
        $("#FS_0_1_" + i).css({ "background-position": globalFlipBoardState[i][globalFlipBoardState[i].length - 3] });
        $("#FS_1_1_" + i).css({ "background-position": globalFlipBoardState[i][globalFlipBoardState[i].length - 4] });
    }
    else {
        $("#FS_0_0_" + i).css({ "background-position": globalFlipBoardState[i][globalFlipBoardState[i].length - 3] });
        $("#FS_1_0_" + i).css({ "background-position": globalFlipBoardState[i][globalFlipBoardState[i].length - 4] });
    }
}
// Timing data is going to be an array that is passed in
function flipRepeat(x, component, timingData) {
    if (x <= 0) {
        return;
    }
    flip(component, timingData[x - 1]);
    setTimeout(function () {
        flipRepeat(x - 1, component, timingData);
    }, timingData[x - 1] + (timingData[x - 1] / 2));
}

function flip(component, s) {
    var i = component;
    var TID; var BID;
    if (!globalBoolState[i]) {
        TID = "#FS_0_0_" + i;
        BID = "#FS_1_0_" + i;
    } else {
        TID = "#FS_0_1_" + i;
        BID = "#FS_1_1_" + i;
    }
    var animateSpeed = s / 2;
    $(TID).animate({ 'top': componentLocations[i][1] + 40 + "px" }, animateSpeed, function () {
        $(TID).animate({ 'top': componentLocations[i][1] + 80 + "px" }, animateSpeed);
        $(BID).animate({ 'top': componentLocations[i][1] + 80 + "px" }, animateSpeed, function () {
            shiftSpritePosition(component);
            setIndexZ(component);
            $(TID).animate({ 'top': componentLocations[i][1] + "px" }, 1); // Might not need to animate
            $(BID).animate({ 'top': componentLocations[i][1] + 40 + "px" }, 1);
        });
    });
}

/* 
 * ================================================================|
 * Buttton Handlers                                                |
 * ================================================================|
 */

// Handle "?" Button, shows the pop-up for the help button
function handleKeyHelpButton() {
    displayWord(fullRefactorWord("Built from      scratch using   react componentstutorial below"), timingDataMedium);
}

/* 
 * ================================================================|
 * MAIN FUNCTION                                                   |
 * ================================================================|
 */
// Handle the "Encrypt!" "Decrypt!" or "Display!" Button
function handleDisplayButton() {
    // First grab input data
    var textInput = document.getElementById("Message-Text-Box").value;
    // Check if user only wants to display
    displayWord(fullRefactorWord(textInput), timingDataMedium);
    return;
}

// Handle Clear Button
function handleClearButton() {
    displayWord(fullRefactorWord(" "), timingDataMedium);
}

// Handle Random Button
function handleRandomButton() {
    var word = "";
    for (var i = 0; i < 64; i++) {
        var r = Math.floor(Math.random() * 65);
        var letter = characterList[r];
        if (letter.toUpperCase() != letter) {
            letter = "~" + letter;
        }
        word += letter;
    }
    displayWord(fullRefactorWord(word), timingDataMedium);
}

// Handle All Button
function handleAllButton() {
    displayWord(fullRefactorWord("ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$()^-_+=;:*,.<>?%~w~r~o~y~g~b~p"), timingDataMedium);
}

// Handle Wave Button Function, will return to string before when animation is done
function handleWaveButton() {
    animateClearWave(0);
}
// Helper Method
function animateClearWave(component) {
    if (component >= 64) {
        return;
    }
    //if (stackAnimating.indexOf(component) == -1) {
    flipRepeat(65, component, timingDataMedium);
    setTimeout(function () {
        animateClearWave(component + 1);
    }, 100);
}

// Handle Checker Button, 
function handleCheckerButton() {
    var i = 0;
    for (var r = 0; r < 64; r += 16) {
        for (var c = r + i; c < r + 16; c += 2) {
            flipRepeat(65, c, timingDataMedium);
        }
        i = (i == 0) ? 1 : 0;
    }
    setTimeout(function () {
        i = 1;
        for (var r = 0; r < 64; r += 16) {
            for (var c = r + i; c < r + 16; c += 2) {
                flipRepeat(65, c, timingDataMedium);
            }
            i = (i == 0) ? 1 : 0;
        }
    }, 300);
}

function FlipSquare(props) {
    return (
        <div className="flip-square" id={props.id}></div>
    );
}
function FlipCard(props) {
    var id1 = "FS_0_" + props.cardNum + "_" + props.componentNum;
    var id2 = "FS_1_" + props.cardNum + "_" + props.componentNum;
    console.log(id1 + " " + id2)
    return (
        <Fragment>
            <FlipSquare
                id={id1}
            />
            <FlipSquare
                id={id2}
            />
        </Fragment>
    );
}
class FlipComponent extends React.Component {
    renderFlipCard(cardNum) {
        return (
            <FlipCard
                componentNum={this.props.componentNum}
                cardNum={cardNum}
            />
        );
    }
    render() {
        return (
            <Fragment>
                {this.renderFlipCard(0)}
                {this.renderFlipCard(1)}
            </Fragment>
        );
    }
}
class Flipboard extends React.Component {
    renderFlipComponent(componentNum) {
        return (
            <FlipComponent
                componentNum={componentNum}
            />
        );
    }
    renderFlipBoardRow(num) {
        var n = num * 16;
        return (
            <Fragment>
                {this.renderFlipComponent(0 + n)}
                {this.renderFlipComponent(1 + n)}
                {this.renderFlipComponent(2 + n)}
                {this.renderFlipComponent(3 + n)}
                {this.renderFlipComponent(4 + n)}
                {this.renderFlipComponent(5 + n)}
                {this.renderFlipComponent(6 + n)}
                {this.renderFlipComponent(7 + n)}
                {this.renderFlipComponent(8 + n)}
                {this.renderFlipComponent(9 + n)}
                {this.renderFlipComponent(10 + n)}
                {this.renderFlipComponent(11 + n)}
                {this.renderFlipComponent(12 + n)}
                {this.renderFlipComponent(13 + n)}
                {this.renderFlipComponent(14 + n)}
                {this.renderFlipComponent(15 + n)}
            </Fragment>
        );
    }
    render() {
        return (
            <Fragment>
                {this.renderFlipBoardRow(0)}
                {this.renderFlipBoardRow(1)}
                {this.renderFlipBoardRow(2)}
                {this.renderFlipBoardRow(3)}
            </Fragment>
        )
    }
}
document.addEventListener("DOMContentLoaded", function () {
    if ($(document).width() > 1300) {
        setTimeout(function () {
            initializeBoard();
            handleWaveButton();
        }, 100);
    }
});
export default Flipboard;