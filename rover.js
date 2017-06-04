


//Create our rover
var myRover = {
  position: [0, 0],
  direction: 'N'
};
console.log(myRover);
//Lets define our planet first :) MARS!!!
//Grid 10*10 2 arrays made with 2 "for loops"
var grid=[];

for (var x = 0; x <= 10; x++) {
  (myRover.position[0])=[x];
for (var y = 0; y <= 10; y++) {
  (myRover.position[1])=[y];
}}

console.log(grid);


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

function roundTrip(rover) {  //Lets start with X axle

var roundTripX = rover.position[0];
if (roundTripX > 10){
    roundTripX = rover.position[0]=0;
  } else if (roundTripX < 0) {
    roundTripX = rover.position[0]=10;
  }

//Now Y axle
var roundTripY = rover.position[1];
  if (roundTripY > 10) {
    roundTripY = rover.position[1]=0;
  }else if (roundTripY < 0) {
    roundTripY = rover.position[1]=10;
  }
  //print out the position after the overlap setting
      console.log("New Rover Position: [" + roundTripX + ", " + roundTripY + "]");
}
roundTrip(myRover);



//Users Input
var usersInput = prompt("Forward/Backward/Right/Left?");
      var usersInputToUpperCase = usersInput.toUpperCase();
console.log(usersInputToUpperCase);
var text =[];

  for (i = 0 ; i  < usersInputToUpperCase.length ; i++) {
      text = usersInputToUpperCase[i];
      //translate user's input into array

                if (text === 'F'){
                  goForward(myRover);
                  roundTrip(myRover);
                } else if (text ==='B') {
                  goBack(myRover);
                  roundTrip(myRover);
                } else if (text === 'R') {
                  turnRight(myRover);
                  roundTrip(myRover);
                } else if (text === 'L'){
                  turnLeft(myRover);
                  roundTrip(myRover);
                }
}
