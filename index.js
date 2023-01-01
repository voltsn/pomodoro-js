
const args = process.argv.slice(2);

let duration = 25;

// Validate arguments
if (args.length != 0){
  duration = parseInt(args[0]);

  if (isNaN(duration)) {
    console.log("The duration must be an integer.");
    process.exit(1);
  }
}

// Convert duration in seconds
let seconds = duration * 60;

const intervalID = setInterval(() => {
  if (seconds <= 0) {
    clearTimeout(intervalID);
    return;
  }
  
  seconds -= 1;
  console.log(seconds);
},1000);

