
//Determinar el tamaño de la superficie de marte
//Usar un grid de 10*10
var grid=[];
for (var x = 0; x < 10; x++) {
  grid[x]=[];
for (var y = 0; y < 10; y++) {
  grid[x][y]=[];
}}

console.log(grid);

var myRover = {
  position: [0,0],
  direction: 'N'
};


//Código predeterminado
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
//Código predeterminado invertido para ir hacia atrás
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

//Definir el cambio de dirección
function changeDirection(rover, turnDirection){
  switch (turnDirection) {
    case 'R': //Cambio de dirección a la derecha
      if (rover.direction==='N') {
          rover.direction='E';
      }else if (rover.direction==='E') {
          rover.direction='S';
      }else if (rover.direction==='S') {
          rover.direction='W';
      }
      break;
    case 'L': //Cambio de dirección a la izquierda
      if (rover.direction==='N') {
          rover.direction='W';
      }else if (rover.direction==='W') {
          rover.direction='S';
      }else if (rover.direction==='S') {
          rover.direction='E';
      }else if (rover.direction==='E') {
          rover.direction='N';
      }
      break;
    default:

  }

}
