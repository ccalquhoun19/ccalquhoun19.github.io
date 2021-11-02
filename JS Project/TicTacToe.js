function fun() {
    let canvas = document.getElementById("myCanvas");
    canvas.width = "300";
    canvas.height = "300";
    canvas.style.border = "2px solid black";
    
    var can = document.getElementById('myCanvas');
    var ctx = can.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(100, 0);
    ctx.lineTo(100,300);
    ctx.moveTo(200, 300);
    ctx.lineTo(200, 0);
    ctx.closePath();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(0, 100);
    ctx.lineTo(300,100);
    ctx.moveTo(300, 200);
    ctx.lineTo(0, 200);
    ctx.closePath();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
    ctx.stroke();
  }
  
  class Player {
    constructor (name, isCurrent, winner) {
      this.name = name;
      this.isCurrent = true;
      this.winner = winner;
    }
  
    get name() {
      return this.name;
    }
  
    set name(newName) {
      this.name = newName;
    }
  
    get isCurrent() {
      return this.isCurrent;
    }
  
    set isCurrent(newIsCurrent) {
      this.isCurrent = newIsCurrent;
    }
  
    get winner() {
      return this.winner;
      }
  
    set winner(newWinner) {
        this.winner = newWinner;
    }
  }
  
  class TicTacToe {
    constructor() {
      let squares = [
        document.getElementById("square1"), 
        document.getElementById("square2"),
        document.getElementById("square3"),
        document.getElementById("square4"),
        document.getElementById("square5"),
        document.getElementById("square6"),
        document.getElementById("square7"),
        document.getElementById("square8"),
        document.getElementById("square9"),
      ]
    }
  }
  
  let canvas = document.getElementById("myCanvas");
  canvas.addEventListener("click", addX);
  let click = true;
  
  function addX() {
    if (click) {
      console.log("here");
      var ctx = canvas.getContext("2d");
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(100,100);
      ctx.closePath();
      ctx.strokeStyle = "black";
      ctx.lineWidth = 2;
      ctx.stroke();
  
      ctx.beginPath();
      ctx.moveTo(100, 0);
      ctx.lineTo(0,100);
      ctx.closePath();
      ctx.strokeStyle = "black";
      ctx.lineWidth = 2;
      ctx.stroke();
  
      click = false;
    }
    
    else {
      click = true;
    }
  }
  
  function reset() {
    
  }