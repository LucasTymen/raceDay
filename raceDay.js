let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = true;
let runnersAge = 34;
let runningTime = '';

switch (runningTime){
  case (runnersAge <= 18):
    return 'runningTime[2]';
    break ;
  case (registeredEarly === true && runnersAge > 18):
    return 'runningTime[0]';
    break ;
  case (registeredEarly === false && runnersAge > 18):
    return 'runningTime[1]';
    break ;
  default:
    console.log('unregistered')
    break ;
}

if (runnersAge > 18) {
  console.log("adult");
} else if (runnersAge <= 18) {
  console.log("youngster on the borderline");
} else {
  console.log("youngster");
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

/*
Start time:

    Adult registrants run at 9:30 am or 11:00 am.
        Early adults run at 9:30 am.
        Late adults run at 11:00 am.
    Youth registrants run at 12:30 pm (regardless of registration).
*/
