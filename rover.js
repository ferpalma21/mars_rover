//Lets define our planet first :) MARS!!!
//Grid 10*10 2 arrays made with 2 "for loops"
var grid=[];
for (var x = 0; x < 10; x++) {
  grid[x]=[];
for (var y = 0; y < 10; y++) {
  grid[x][y]=[];
}}

console.log(grid);

//Create our rover
var myRover = {
  position: [0, 0],
  direction: 'N'
};
console.log(myRover);



//Default code
function goForward(rover) {
  switch(rover.direction) {
    case 'N':
      rover.position[1]++;
      break;
    case 'E':
      rover.position[0]++;
      break;
    case 'S':
      rover.position[1]--;
      break;
    case 'W':
      rover.position[0]--;
      break;
  }

  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]");
}
goForward(myRover);

//Same code for forward but inverted
function goBack(rover) {
  switch(rover.direction) {
    case 'N':
      rover.position[1]--;
      break;
    case 'E':
      rover.position[0]--;
      break;
    case 'S':
      rover.position[1]++;
      break;
    case 'W':
      rover.position[0]++;
      break;
  }
  console.log("New Rover Position: [" + rover.position[0] +", "+ rover.position[1] + "]");

}
goBack(myRover);

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

console.log("New Rover Direction: [" + rover.direction + "]");
}
turnRight(myRover);


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

console.log("New Rover Direction: [" + rover.direction + "]");
}
turnLeft(myRover);


//Mars is a planet (sphere) so after 10 goes back to 0
//Declare variables to do roundTrip in X and Y (2 variables)

function roundTrip(rover) {

  //Lets start with X axle
var roundTripX = rover.position[0];
  if (roundTripX > 10){
    roundTripX = 0;
  } else if (roundTripX < 0) {
    roundTripX = 10;
  }
//Now Y axle
var roundTripY = rover.position[1];
  if (roundTripY > 10) {
    roundTripY = 0;
  }else if (roundTripY < 0) {
    roundTripY = 10;
  }
  //print out the position after the overlap setting
      console.log("New Rover Position: [" + roundTripX + ", " + roundTripY + "]");
}
roundTrip(myRover);

//while


  var controller = prompt("Forward/Backward/Right/Left?");
    controller = controller.toUpperCase();
    if (controller === 'F'){
      goForward(myRover);
      roundTrip(myRover);
    } else if (controller ==='B') {
      goBack(myRover);
      roundTrip(myRover);
    } else if (controller === 'R') {
      turnRight(myRover);
      roundTrip(myRover);
    } else if (controller === 'L'){
      turnLeft(myRover);
      roundTrip(myRover);
    }
