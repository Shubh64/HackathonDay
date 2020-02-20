/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var inputs = readline().split(' ');
const W = parseInt(inputs[0]); // width of the building.
const H = parseInt(inputs[1]); // height of the building.
const N = parseInt(readline()); // maximum number of turns before game over.
var inputs = readline().split(' ');
let X0 = parseInt(inputs[0]);
let Y0 = parseInt(inputs[1]);

// game loop

  
while (true) {
    const bombDir = readline(); // the direction of the bombs from batman's current location (U, UR, R, DR, D, DL, L or UL)

    // Write an action using console.log()
    // To debug: console.error('Debug messages...');
    console.log('0 1');
    console.log('0 36');
    console.log('22 36');
    console.log('22 22');
    console.log('22 60');
    console.log('3 60');

 if(bombDir="U")
{  Y0=Y0+1;
    }
   else  if(bombDir=="UR")
{  X0=X0+1;
    Y0=Y0+1;
    }
  else   if(bombDir=="R")
{  
   X0=X0+1;
    }
  else   if(bombDir=="DR")
{  Y0=Y0-1;
X0=X0+1;
    }
 else    if(bombDir=="D")
{  Y0=Y0-1;
    }
    else    if(bombDir=="L")
{  X0=X0-1;
    }
     else if(bombDir=="UL")
{  Y0=Y0+1;
   X0=X0-1;
    } 
    // the location of the next window Batman should jump to.



    console.log('X0 Y0')
}