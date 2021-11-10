// Optimize: Move all changePlayer() and checkForWinner() outside of clickElement functions
// Optimize: Move all .html's in clickElement functions to individual functions
// Note: O moves are odd, X moves are even

// booleans to determine if cell has been clicked on
let cell1Full = false;
let cell2Full = false;
let cell3Full = false;
let cell4Full = false;
let cell5Full = false;
let cell6Full = false;
let cell7Full = false;
let cell8Full = false;
let cell9Full = false;

// boolean to determine whose turn is next
let nextIsX = false;

// counter to determine how many cells are left open
let boardCount = 0;

function startGame() {
    if (boardCount > 0) {
        reset();
    }
    
    // display board
    $("#board").css({visibility: "visible"});

    // take player X and O names
    let playerO = prompt("Player O's Name: ");
    let playerX = prompt("Player X's Name: ");

    // display names below board
    $("#PlayerO").html("Player O: " + playerO);
    $("#PlayerX").html("Player X: " + playerX);

    // show whose turn it is -- O starts first
    $("#PlayerO").css("background-color", "blue");
    $("#PlayerX").css("background-color", "transparent");
}

// 1
function clickElement1() {
    if (!cell1Full) {
        if (nextIsX) {
            $("#cell1").html("X").css("font-size", "150px");
        }
        else {
            $("#cell1").html("O").css("font-size", "150px");
        }
        cell1Full = true;
        checkForWinner();
        changePlayer();
    }
}

// 2
function clickElement2() {
    if (!cell2Full) {
        if (nextIsX) {
            $("#cell2").html("X").css("font-size", "150px");
        }
        else {
            $("#cell2").html("O").css("font-size", "150px");
        }
        cell2Full = true;
        checkForWinner();
        changePlayer();
    }
}

// 3
function clickElement3() {
    if (!cell3Full) {
        if (nextIsX) {
            $("#cell3").html("X").css("font-size", "150px");
        }
        else {
            $("#cell3").html("O").css("font-size", "150px");
        }
        cell3Full = true;
        checkForWinner();
        changePlayer();
    }
}

// 4
function clickElement4() {
    if (!cell4Full) {
        if (nextIsX) {
            $("#cell4").html("X").css("font-size", "150px");
        }
        else {
            $("#cell4").html("O").css("font-size", "150px");
        }
        cell4Full = true;
        checkForWinner();
        changePlayer();
    }
}

// 5
function clickElement5() {
    if (!cell5Full) {
        if (nextIsX) {
            $("#cell5").html("X").css("font-size", "150px");
        }
        else {
            $("#cell5").html("O").css("font-size", "150px");
        }
        cell5Full = true;
        checkForWinner();
        changePlayer();
    }
}

// 6
function clickElement6() {
    if (!cell6Full) {
        if (nextIsX) {
            $("#cell6").html("X").css("font-size", "150px");
        }
        else {
            $("#cell6").html("O").css("font-size", "150px");
        }
        cell6Full = true;
        checkForWinner();
        changePlayer();
    }
}

// 7
function clickElement7() {
    if (!cell7Full) {
        if (nextIsX) {
            $("#cell7").html("X").css("font-size", "150px");
        }
        else {
            $("#cell7").html("O").css("font-size", "150px");
        }
        cell7Full = true;
        checkForWinner();
        changePlayer();
    }
}

// 8
function clickElement8() {
    if (!cell8Full) {
        if (nextIsX) {
            $("#cell8").html("X").css("font-size", "150px");
        }
        else {
            $("#cell8").html("O").css("font-size", "150px");
        }
        cell8Full = true;
        checkForWinner();
        changePlayer();
    }
}

// 9
function clickElement9() {
    if (!cell9Full) {
        if (nextIsX) {
            $("#cell9").html("X").css("font-size", "150px");
        }
        else {
            $("#cell9").html("O").css("font-size", "150px");
        }
        cell9Full = true;
        checkForWinner();
        changePlayer();
    }
}

// clears the board and keeps the same player names
function reset() {
    $("#cell1").html("");
    $("#cell2").html("");
    $("#cell3").html("");
    $("#cell4").html("");
    $("#cell5").html("");
    $("#cell6").html("");
    $("#cell7").html("");
    $("#cell8").html("");
    $("#cell9").html("");

    cell1Full = false;
    cell2Full = false;
    cell3Full = false;
    cell4Full = false;
    cell5Full = false;
    cell6Full = false;
    cell7Full = false;
    cell8Full = false;
    cell9Full = false;
    nextIsX = false;
    boardCount = 0;

    $("#PlayerO").css("background-color", "blue");
    $("#PlayerX").css("background-color", "transparent");
    $("body").css("background-color", "transparent");
}

function checkForWinner() {
    const minWin = 5;
    const maxWin = 9;

    boardCount+= 1;
    // no winner until at least 5 moves have occurred
    if (boardCount >= minWin) {
        // check if top row is X's
        if ($("#cell1").html() == "X" && $("#cell2").html() == "X" && $("#cell3").html() == "X") {
            $("body").css("background-color", "blue");
        }
        // check if middle row is X's
        else if ($("#cell4").html() == "X" && $("#cell5").html() == "X" && $("#cell6").html() == "X") {
            $("body").css("background-color", "red");
        }
        // check if bottom row is X's
        else if ($("#cell7").html() == "X" && $("#cell8").html() == "X" && $("#cell9").html() == "X") {
            $("body").css("background-color", "green");
        }
        // check if left column is X's
        else if ($("#cell1").html() == "X" && $("#cell4").html() == "X" && $("#cell7").html() == "X") {
            $("body").css("background-color", "pink");
        }
        // check if middle column is X's
        else if ($("#cell2").html() == "X" && $("#cell5").html() == "X" && $("#cell8").html() == "X") {
            $("body").css("background-color", "orange");
        }
        // check if right column is X's
        else if ($("#cell3").html() == "X" && $("#cell6").html() == "X" && $("#cell9").html() == "X") {
            $("body").css("background-color", "grey");
        }
        // check if left to right diagonal is X's
        else if ($("#cell1").html() == "X" && $("#cell5").html() == "X" && $("#cell9").html() == "X") {
            $("body").css("background-color", "purple");
        }
        // check if right to left diagonal is X's
        else if ($("#cell3").html() == "X" && $("#cell5").html() == "X" && $("#cell7").html() == "X") {
            $("body").css("background-color", "yellow");
        }

        // check if top row is O's
        else if ($("#cell1").html() == "O" && $("#cell2").html() == "O" && $("#cell3").html() == "O") {
            $("body").css("background-color", "blue");
        }
        // check if middle row is O's
        else if ($("#cell4").html() == "O" && $("#cell5").html() == "O" && $("#cell6").html() == "O") {
            $("body").css("background-color", "red");
        }
        // check if bottom row is O's
        else if ($("#cell7").html() == "O" && $("#cell8").html() == "O" && $("#cell9").html() == "O") {
            $("body").css("background-color", "green");
        }
        // check if left column is O's
        else if ($("#cell1").html() == "O" && $("#cell4").html() == "O" && $("#cell7").html() == "O") {
            $("body").css("background-color", "pink");
        }
        // check if middle column is O's
        else if ($("#cell2").html() == "O" && $("#cell5").html() == "O" && $("#cell8").html() == "O") {
            $("body").css("background-color", "orange");
        }
        // check if right column is O's
        else if ($("#cell3").html() == "O" && $("#cell6").html() == "O" && $("#cell9").html() == "O") {
            $("body").css("background-color", "grey");
        }
        // check if left to right diagonal is O's
        else if ($("#cell1").html() == "O" && $("#cell5").html() == "O" && $("#cell9").html() == "O") {
            $("body").css("background-color", "purple");
        }
        // check if right to left diagonal is O's
        else if ($("#cell3").html() == "O" && $("#cell5").html() == "O" && $("#cell7").html() == "O") {
            $("body").css("background-color", "yellow");
        }
        // change CSS to display results of game

        // display "play again" button to prompt users

    }
    else {
        // check if there is a winner
 
        // change CSS to display results of game

        // display "play again" button to prompt users

    }
}

function changePlayer() {
    if (!nextIsX) {
        $("#PlayerO").css("background-color", "transparent");
        $("#PlayerX").css("background-color", "blue");
        nextIsX = true;
    }
    else {
        $("#PlayerO").css("background-color", "blue");
        $("#PlayerX").css("background-color", "transparent");
        nextIsX = false;
    }
}
