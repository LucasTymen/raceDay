let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = false;
let runnersAge = 65;
let time = ["9:30 am ", "11:00 am", "12:30 pm "];

for (const element of time) {
  /* console.log(element); */
}

switch (time) {
  case 0:
    registeredEarly === true && runnersAge > 18;
    console.log(time.length[0]);
    console.log("racing at 9:30 am ");
    break;
  case 1:
    registeredEarly === false || runnersAge > 18;
    console.log(time.length[1]);
    console.log("racing at 11:00 am");
    break;
  case 2:
    runnersAge <= 18;
    console.log(time.length[2]);
    console.log("12:30 pm");
    break;

  default:
    console.log("");
    break;
}

let runningTime = time.lengh;

if (registeredEarly === true && runnersAge > 18) {
  console.log("Adult and checked early ");
  console.log("race number " + raceNumber);
  console.log("racing at 9:30 am ");
  console.log("Running time :  " + runningTime + time.length);
} else if (registeredEarly === false && runnersAge > 18) {
  console.log("Adult and checked late ");
  runningTime = "11:00 am";
  console.log("racing at 11:00 am ");
} else if (runnersAge <= 18) {
  console.log("Kid and checked ");
  console.log("12:30 pm ");
} else {
  console.log("not ok ");
}

if (runnersAge > 18) {
  console.log("adult");
} else if (runnersAge === 18) {
  console.log("youngster on the borderline");
} else {
  console.log("youngster");
}

console.log(
  "age :" + runnersAge,
  time.length,
  "race number :" + raceNumber,
  "Taking course at : " + runningTime
);
