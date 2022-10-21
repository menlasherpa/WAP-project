const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

let sum = 0;

function getNumber() {
  readline.question("Enter a number: ", number => {
    if (number === "stop") {
      console.log("The sum of numbers entered is: " + sum);
      readline.close();
    } else {
      let num = parseInt(number);
      if (isNaN(num)) {
        num = 0;
      }
      sum += num;
      getNumber();
    }
  });
}

getNumber();
