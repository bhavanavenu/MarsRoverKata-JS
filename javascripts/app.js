var rover = {
  direction : "N",
  travelLog : [
  ["R",null,null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null,null,null]
],
X : "0", Y : "0"


}


function turnLeft(rover){
  console.log("turnLeft was called!");
  console.log("previous direction is:" + rover.direction);

  switch (rover.direction){
    case "N":
    rover.direction="W"
    console.log("current direction is :" + rover.direction);
    break;
    case "W":
    rover.direction="S"
    console.log("current direction is :" + rover.direction);
    break;
    case "S":
    rover.direction="E"
    console.log("current direction is :" + rover.direction);
    break;
    case "E":
    rover.direction="N"
    console.log("current direction is :" + rover.direction);
    break;
  }
}

function turnRight(rover){
  console.log("turnRight was called!");
  console.log("previous direction is:" + rover.direction);

  switch (rover.direction){
    case "N":
    rover.direction="E"
    console.log("current direction is :" + rover.direction);
    break;
    case "W":
    rover.direction="N"
    console.log("current direction is :" + rover.direction);
    break;
    case "S":
    rover.direction="W"
    console.log("current direction is :" + rover.direction);
    break;
    case "E":
    rover.direction="S"
    console.log("current direction is :" + rover.direction);
    break;
  }
}

function moveForward(rover){
  console.log("moveForward was called")

  switch(rover.direction){
    case "N":
          if(rover.X==0){
            console.log("rover cannot move further as there is boundary!!");
            console.log(rover.travelLog);
            return; 
            }
          rover.X--;
          rover.travelLog[rover.X][rover.Y]="R";
          break;
    case "W":
          if(rover.Y==0){
            console.log("rover cannot move further as there is boundary!!");
            console.log(rover.travelLog);
            return; 
            }
          rover.Y--;
          rover.travelLog[rover.X][rover.Y]="R";
          break;

    case "S":
          if(rover.X==9){
            console.log("rover cannot move further as there is boundary!!");
            console.log(rover.travelLog);
            return; 
            }
          rover.X++;
          rover.travelLog[rover.X][rover.Y]="R";
          break;
    case "E":
          if(rover.Y==9){
            console.log("rover cannot move further as there is boundary!!");
            console.log(rover.travelLog);
            return; 
            }
          rover.Y++;
          rover.travelLog[rover.X][rover.Y]="R";
          break;
  
  }

  console.log(rover.travelLog);

  }

function commands(dir){
  var i=0;
  while(i<dir.length)
  {
    switch (dir[i]){
      case "l":
             turnLeft(rover);
             break;
      case "r":
            turnRight(rover);
            break;
      case "f":
            moveForward(rover);             
    }
   i++;
  }
}


