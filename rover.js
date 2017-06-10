//Lets define our planet first :) MARS!!!
//Grid 10*10 2 arrays made with 2 "for loops"

var grid=[];

for (var x = 0; x < 10; x++) {
  grid[x]= [];
  for (var y = 0; y < 10; y++) {
    grid[x][y]= 0 ;
}}
console.log(grid);

//Setting obstacles
//var userObstacles = prompt("How many Obstacles you want?");
// for(var z = 0;z <userObstacles; z++ ){
  var locationX=0;//prompt("Location on X");
  var locationY=1;//prompt("Location on Y");
  grid [locationX][locationY]=1;
  console.log(grid[locationX][locationY]);
//}

//Create our rover
var myRover = {
  position: [0, 0],
  direction: 'N',
  name: "rover1"
};
console.log(myRover);

/*
var myRover2 = {
  position: Math.floor(Math.random)*10,
  direction: 'N',
  name: "rover2"
};
*/

function reverseMovement(rover){
    break;
}
//Checking for an obstacle
 function check(rover){
  for(var i = 0; i < grid.length; i++){
    if(grid[myRover.position[0]myrover.position[1]]===1){
      console.log("Obstacle in position: ["+rover.position[0]+", "+rover.position[1]+"]");
      reverseMovement(myRover);
      break;
    }
}
}

//Call position
function callPosition(rover){
    console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]");
    console.log("New Rover Direction: [" + rover.direction + "]");
}

//moveForward Default Code
function goForward(rover) {
    switch(rover.direction) {
    case 'N':
      rover.position[1]++;
      check(myRover);
      break;
    case 'E':
      rover.position[0]++;
      check(myRover);
      break;
    case 'S':
      rover.position[1]--;
      check(myRover);
      break;
    case 'W':
      rover.position[0]--;
      check(myRover);
      break;

  }
  if (roundTrip(myRover)===true) {

  }else {

}
}



//Same code for forward but inverted
function goBack(rover) {
  switch(rover.direction) {
    case 'N':
      rover.position[1]--;
      check(myRover);
      break;
    case 'E':
      rover.position[0]--;
      check(myRover);
      break;
    case 'S':
      rover.position[1]++;
      check(myRover);
      break;
    case 'W':
      rover.position[0]++;
      check(myRover);
      break;
  }

  if (roundTrip(myRover)===true) {

  }else {

  }
}


//function change Direction right

function turnRight(rover) {
  switch(rover.direction) {
    case 'N':
      rover.direction='E';
      break;
    case 'E':
      rover.direction='S';
      break;
    case 'S':
      rover.direction='W';
      break;
    case 'W':
      rover.direction='N';
      break;
  }

}



function turnLeft(rover) {
  switch(rover.direction) {
    case 'N':
      rover.direction='W';
      break;
    case 'E':
      rover.direction='N';
      break;
    case 'S':
      rover.direction='E';
      break;
    case 'W':
      rover.direction='S';
      break;
  }


}

//Mars is a planet (sphere) so after 10 goes back to 0
//Declare variables to do roundTrip in X and Y (2 variables)

function roundTrip(rover) {
//Lets start with X axle
var roundTripX = rover.position[0];
if (roundTripX > 9){
    roundTripX = rover.position[0]=0;
  } else if (roundTripX < 0) {
    roundTripX = rover.position[0]=9;
  }

//Now Y axle
var roundTripY = rover.position[1];
  if (roundTripY > 9) {
    roundTripY = rover.position[1]=0;
  }else if (roundTripY < 0) {
    roundTripY = rover.position[1]=9;
  }
}

//Users Input
var usersInput = prompt("Forward/Backward/Right/Left?");
      var usersInputToUpperCase = usersInput.toUpperCase();
console.log(usersInputToUpperCase);
  var text =[];
    for (i = 0 ; i  < usersInputToUpperCase.length ; i++) {
        text = usersInputToUpperCase[i];
        //translate user's input into array
        check(myRover);
          if (text === 'F'){
            goForward(myRover);
          } else if (text ==='B') {
            check(myRover);
            goBack(myRover);
          } else if (text === 'R') {
            turnRight(myRover);
          } else if (text === 'L'){
            turnLeft(myRover);
          }


}
callPosition(myRover);
