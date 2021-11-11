let cell1Full = false;
let cell2Full = false;
let cell3Full = false;
let cell4Full = false;
let cell5Full = false;
let cell6Full = false;
let cell7Full = false;
let cell8Full = false;
let cell9Full = false;

let playerO;
let playerX;

let nextIsX = false;

let boardCount = 0;

function startGame() {
    reset();
    
    $("#board").css("visibility", "visible");
    $("#players").css("visibility", "visible");
    $("#buttonContainer").css("visibility", "hidden");
    $("#winnerText").css("visibility", "hidden");

    playerO = prompt("Player O's Name: ");
    playerX = prompt("Player X's Name: ");

    while (playerO == null || playerO.length == 0 || playerX == null || playerX.length == 0) {
        playerO = prompt("Player O's Name: ");
        playerX = prompt("Player X's Name: ");
    }

    $("#PlayerO").html("Player O: " + playerO);
    $("#PlayerX").html("Player X: " + playerX);

    $("#PlayerO").css("background-color", "blue");
    $("#PlayerX").css("background-color", "transparent");

}

// 1
function clickElement1() {
    if (!cell1Full) {
        if (nextIsX) {
            $("#cell1").html("X").css({
                "font-size": "150px",
                color: "#56baed"
            });
        }
        else {
            $("#cell1").html("O").css({
                "font-size": "150px",
                color: "#56baed"
            });
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
            $("#cell2").html("X").css({
                "font-size": "150px",
                color: "#56baed"
            });
        }
        else {
            $("#cell2").html("O").css({
                "font-size": "150px",
                color: "#56baed"
            });
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
            $("#cell3").html("X").css({
                "font-size": "150px",
                color: "#56baed"
            });
        }
        else {
            $("#cell3").html("O").css({
                "font-size": "150px",
                color: "#56baed"
            });
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
            $("#cell4").html("X").css({
                "font-size": "150px",
                color: "#56baed"
            });
        }
        else {
            $("#cell4").html("O").css({
                "font-size": "150px",
                color: "#56baed"
            });
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
            $("#cell5").html("X").css({
                "font-size": "150px",
                color: "#56baed"
            });
        }
        else {
            $("#cell5").html("O").css({
                "font-size": "150px",
                color: "#56baed"
            });
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
            $("#cell6").html("X").css({
                "font-size": "150px",
                color: "#56baed"
            });
        }
        else {
            $("#cell6").html("O").css({
                "font-size": "150px",
                color: "#56baed"
            });
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
            $("#cell7").html("X").css({
                "font-size": "150px",
                color: "#56baed"
            });
        }
        else {
            $("#cell7").html("O").css({
                "font-size": "150px",
                color: "#56baed"
            });
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
            $("#cell8").html("X").css({
                "font-size": "150px",
                color: "#56baed"
            });
        }
        else {
            $("#cell8").html("O").css({
                "font-size": "150px",
                color: "#56baed"
            });
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
            $("#cell9").html("X").css({
                "font-size": "150px",
                color: "#56baed"
            });
        }
        else {
            $("#cell9").html("O").css({
                "font-size": "150px",
                color: "#56baed"
            });
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
}

function checkForWinner() {
    const MINWIN = 5;
    const MAXWIN = 9;
    let playerWon = 0;

    boardCount += 1;
    // no winner until at least 5 moves have occurred
    if (boardCount >= MINWIN) {
        // check if top row is X's
        if ($("#cell1").html() == "X" && $("#cell2").html() == "X" && $("#cell3").html() == "X") {
            playerWon += 1;
            winner(playerX, playerWon);
        }
        // check if middle row is X's
        else if ($("#cell4").html() == "X" && $("#cell5").html() == "X" && $("#cell6").html() == "X") {
            playerWon += 1;
            winner(playerX, playerWon);
        }
        // check if bottom row is X's
        else if ($("#cell7").html() == "X" && $("#cell8").html() == "X" && $("#cell9").html() == "X") {
            playerWon += 1;
            winner(playerX, playerWon);
        }
        // check if left column is X's
        else if ($("#cell1").html() == "X" && $("#cell4").html() == "X" && $("#cell7").html() == "X") {
            playerWon += 1;
            winner(playerX, playerWon);
        }
        // check if middle column is X's
        else if ($("#cell2").html() == "X" && $("#cell5").html() == "X" && $("#cell8").html() == "X") {
            playerWon += 1;
            winner(playerX, playerWon);
        }
        // check if right column is X's
        else if ($("#cell3").html() == "X" && $("#cell6").html() == "X" && $("#cell9").html() == "X") {
            playerWon += 1;
            winner(playerX, playerWon);
        }
        // check if left to right diagonal is X's
        else if ($("#cell1").html() == "X" && $("#cell5").html() == "X" && $("#cell9").html() == "X") {
            playerWon += 1;
            winner(playerX, playerWon);
        }
        // check if right to left diagonal is X's
        else if ($("#cell3").html() == "X" && $("#cell5").html() == "X" && $("#cell7").html() == "X") {
            playerWon += 1;
            winner(playerX, playerWon);
        }

        // check if top row is O's
        else if ($("#cell1").html() == "O" && $("#cell2").html() == "O" && $("#cell3").html() == "O") {
            playerWon += 1;
            winner(playerO, playerWon);
        }
        // check if middle row is O's
        else if ($("#cell4").html() == "O" && $("#cell5").html() == "O" && $("#cell6").html() == "O") {
            playerWon += 1;
            winner(playerO, playerWon);
        }
        // check if bottom row is O's
        else if ($("#cell7").html() == "O" && $("#cell8").html() == "O" && $("#cell9").html() == "O") {
            playerWon += 1;
            winner(playerO, playerWon);
        }
        // check if left column is O's
        else if ($("#cell1").html() == "O" && $("#cell4").html() == "O" && $("#cell7").html() == "O") {
            playerWon += 1;
            winner(playerO, playerWon);
        }
        // check if middle column is O's
        else if ($("#cell2").html() == "O" && $("#cell5").html() == "O" && $("#cell8").html() == "O") {
            playerWon += 1;
            winner(playerO, playerWon);
        }
        // check if right column is O's
        else if ($("#cell3").html() == "O" && $("#cell6").html() == "O" && $("#cell9").html() == "O") {
            playerWon += 1;
            winner(playerO, playerWon);
        }
        // check if left to right diagonal is O's
        else if ($("#cell1").html() == "O" && $("#cell5").html() == "O" && $("#cell9").html() == "O") {
            playerWon += 1;
            winner(playerO, playerWon);
        }
        // check if right to left diagonal is O's
        else if ($("#cell3").html() == "O" && $("#cell5").html() == "O" && $("#cell7").html() == "O") {
            playerWon += 1;
            winner(playerO, playerWon);
        }
    }
    if (boardCount == MAXWIN && playerWon == 0) {
        winner("It's a tie...", playerWon)
    }
}

function winner(playerName, playerWinner) {
    // change CSS to display results of game
    $("#board").css("visibility", "hidden");
    $("#players").css("visibility", "hidden");
    $("#buttonContainer").css("visibility", "visible");
    $("#winnerText").css("visibility", "visible");

    if (playerWinner == 1) {
        $("#winnerText").html("The Winner is " + playerName + "!");
    }
    else {
        $("#winnerText").html(playerName);
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
