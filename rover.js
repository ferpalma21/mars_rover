
//Lets define our planet first :) MARS!!!
//Grid 10*10 2 arrays made with 2 "for loops"
var grid=[];
for (var x = 0; x < 10; x++) {
  grid[x]=[];
for (var y = 0; y < 10; y++) {
  grid[x][y]=[];
}}

console.log(grid);

//Mars is a planet (sphere) so after 10 goes back to 0
//Declare variables to do roundTrip in X and Y (2 variables)
/*
var roundTripX= rover.position[0];
var roundTripY= rover.position[1];

//Lets start with X axle
if (roundTripX > 10){
  rover.position[0]=0;
}else if (roundTripX < 0) {
  rover.position[0]=10;
}

//Now Y axle
if (roundTripY > 10) {
  rover.position[1]=0;
}else if (roundTripY < 0) {
  rover.position[1]=10;
}
*/
//Create our rover

var myRover = {
  position: [0,0],
  direction: 'N'
};


//Default code
function goForward(rover) {
  switch(rover.direction) {
    case 'N':
      rover.position[0]++;
      break;
    case 'E':
      rover.position[1]++;
      break;
    case 'S':
      rover.position[0]--;
      break;
    case 'W':
      rover.position[1]--;
      break;
  }

  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]");
}
goForward(myRover);
//Same code for forward but inverted
function goBack(rover) {
  switch(rover.direction) {
    case 'N':
      rover.position[0]--;
      break;
    case 'E':
      rover.position[1]--;
      break;
    case 'S':
      rover.position[0]++;
      break;
    case 'W':
      rover.position[1]++;
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
