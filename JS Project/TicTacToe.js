// TODO: Draw X and O
// Note: O moves are odd, X moves are even

// booleans to determine if cell has been clicked on
let $cell1Full = false;
let $cell2Full = false;
let $cell3Full = false;
let $cell4Full = false;
let $cell5Full = false;
let $cell6Full = false;
let $cell7Full = false;
let $cell8Full = false;
let $cell9Full = false;

// boolean to determine whose turn is next
let nextIsX = true;

// counter to determine how many cells are left open
let boardCount = 0;

function StartGame() {
    // display board
    $("#board").css({visibility: "visible"});

    // take player X and O names
    let playerO = prompt("Player O's Name: ");
    let playerX = prompt("Player X's Name: ");

    // display names on right side of board
    $("#PlayerO").html("Player O: " + playerO);
    $("#PlayerX").html("Player X: " + playerX);

    // show whose turn it is -- O starts first
    $("#PlayerO").css("background-color", "blue");
}

// 1
function addElement1() {
        // first checks if the cell is full
        if (!$cell1Full) {
        
        }
        
    // when cell is clicked on, add X or O (first should be O)
    if (nextIsX) {
        $("#cell1").css("background-color", "red");
    }
    // check if the cell is already full
}

// 2
function addElement2() {
    // when cell is clicked on, add X or O (first should be O)
    if (nextIsX) {
        $("#cell2").css("background-color", "blue");
    }
    // check if the cell is already full
}

// 3
function addElement3() {
    // when cell is clicked on, add X or O (first should be O)
    if (nextIsX) {
        $("#cell3").css("background-color", "yellow");
    }
    // check if the cell is already full
}

// 4
function addElement4() {
    // when cell is clicked on, add X or O (first should be O)
    if (nextIsX) {
        $("#cell4").css("background-color", "orange");
    }
    // check if the cell is already full
}

// 5
function addElement5() {
    // when cell is clicked on, add X or O (first should be O)
    if (nextIsX) {
        $("#cell5").css("background-color", "purple");
    }
    // check if the cell is already full
}

// 6
function addElement6() {
    // when cell is clicked on, add X or O (first should be O)
    if (nextIsX) {
        $("#cell6").css("background-color", "grey");
    }
    // check if the cell is already full
}

// 7
function addElement7() {
    // when cell is clicked on, add X or O (first should be O)
    if (nextIsX) {
        $("#cell7").css("background-color", "black");
    }
    // check if the cell is already full
}

// 8
function addElement8() {
    // when cell is clicked on, add X or O (first should be O)
    if (nextIsX) {
        $("#cell8").css("background-color", "pink");
    }
    // check if the cell is already full
}

// 9
function addElement9() {
    // when cell is clicked on, add X or O (first should be O)
    if (nextIsX) {
        $("#cell9").css("background-color", "green");
    }
    // check if the cell is already full
}

function reset() {
    // clear the board

    // start new game

    // reset values to initial values
    
}

function winner() {
    // no winner until at least 5 moves have occurred

    // check if there is a winner

    // if number of moves is 9, display winner or tie

    // change CSS to display results of game

    // display "play again" button to prompt users

}

function Change() {
    if (nextIsX) {
        $("#PlayerO").css("background-color", "transparent");
        $("#PlayerX").css("background-color", "blue");
        nextIsX = false;
    }
    else {
        $("#PlayerO").css("background-color", "blue");
        $("#PlayerX").css("background-color", "transparent");
        nextIsX = true;
    }
}
