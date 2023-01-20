let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = true;
let runnersAge = 43;
let time = ["9:30 am ", "11:00 am", "12:30 pm "]
let runningTime = [""];

for (const element of time) {
 /* console.log(element); */
}

switch (time){
  case 0:
    registeredEarly === true && runnersAge > 18;
    return 'time[0]';
    console.log("racing at 9:30 am ")
    break ;
  case 1:
    registeredEarly === false || runnersAge > 18;
    return 'time[1]';
    console.log("racing at 11:00 am")
    break ;
  case 2:
    runnersAge <= 18;
    return 'time[2]';
    break ;
    console.log("racing at 12:30 pm")
  default:
    console.log('unregistered')
    break ;
}

if (registeredEarly === true && runnersAge > 18) {

  console.log("Adult and checked early")
  console.log("race number "+ raceNumber)
  console.log("Running time :  "+runningTime)
} else if (registeredEarly === false && runnersAge > 18){
  runningTime = "11:00 am"
  console.log()
} else {
  console.log("not ok")
}

if (runnersAge > 18) {
  console.log("adult");
} else if (runnersAge === 18) {
  console.log("youngster on the borderline");
} else {
  console.log("youngster");
}

console.log(runnersAge, time['element'], raceNumber)
/*
Start time:

const array1 = ['a', 'b', 'c'];

for (const element of array1) {
  console.log(element);
}

// Expected output: "a"
// Expected output: "b"
// Expected output: "c"

    Adult registrants run at 9:30 am or 11:00 am.
        Early adults run at 9:30 am.
        Late adults run at 11:00 am.
    Youth registrants run at 12:30 pm (regardless of registration).
*/
