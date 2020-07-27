// Rover Object Goes Here
// ======================
const marsRover = {
  direction: "N",
  x: 0,
  y: 5,
  travelLog: [],
}
console.log(marsRover.direction);

const InSight = {
  direction: 'N',
  x: 0,
  y: 0,
  travelLog: [],
}

console.log(InSight.direction)


// ======================
function turnLeft(rover){
  switch (rover.direction) {
    case "N":
      rover.direction = "W";
      console.log(rover.direction);
      break;
    case "W":
      rover.direction = "S";
      console.log(rover.direction);
      break;
    case "S":
      rover.direction = "E";
      console.log(rover.direction);
      break;
    case "E":
      rover.direction = "N";
      console.log(rover.direction);
      break;
  }
  console.log("turnLeft was called!");
}

function turnRight(rover){
  switch (rover.direction) {
    case "N":
      rover.direction = "E";
      console.log(rover.direction);
      break;
    case "E":
      rover.direction = "S";
      console.log(rover.direction);
      break;
    case "S":
      rover.direction = "W";
      console.log(rover.direction);
      break;
    case "W":
      rover.direction = "N";
      console.log(rover.direction);
      break;
  }
  console.log("turnRight was called!");
}

function moveForward(rover){
if (rover.direction === "N" && rover.y > 0) {
    rover.y -= 1;
    rover.travelLog.push([rover.x, rover.y]);
  } else if(rover.direction === "E" && rover.x < 9) {
    rover.x += 1;
    rover.travelLog.push([rover.x, rover.y]);
     } else if(rover.direction === "S" && rover.y < 9) {
    rover.y += 1;
    rover.travelLog.push([rover.x, rover.y]);
  } else if(rover.direction === "W" && rover.x > 0) {
    rover.x -= 1;
    rover.travelLog.push([rover.x, rover.y]);
  } else {
    console.log("The rover has reached the bounder!");
  }
  console.log("moveForward was called");
  console.log(rover.travelLog);
}

function commands(rover, route) {
    for (let i = 0; i < route.length; i += 1) {
      if (route[i] !== "f" && route[i] !== "r" && route[i] !== "l") {
          return console.log('You have typed an invalid route! Use "f", "r" or "l" as valid route commands.');
      }
    }
    for (let j = 0; j < route.length; j += 1) {
      switch (route[j]) {
          case 'f':
          moveForward(rover);
          break;
          case 'r':
          turnRight(rover);
          break;
          case 'l':
          turnLeft(rover);
          break;
          default:
          console.log(`You have typed invalid parameters! Please, check if the rover/'s name is correct, and use "f", "r" or "l" as valid route commands.`)
          break;
      }
    }
    
}


