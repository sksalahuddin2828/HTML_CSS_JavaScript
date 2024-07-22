const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calculateBMI(height, weight) {
  const heightInMeters = height / 100;
  return weight / (heightInMeters * heightInMeters);
}

function getBMICategory(bmi) {
  if (bmi <= 16) {
    return "You are severely under-weight.";
  } else if (bmi <= 18.5) {
    return "You are under-weight.";
  } else if (bmi <= 25) {
    return "You are healthy.";
  } else if (bmi <= 30) {
    return "You are overweight.";
  } else {
    return "You are severely overweight.";
  }
}

function promptUser(question) {
  return new Promise((resolve) => {
    rl.question(question, resolve);
  });
}

async function main() {
  try {
    const height = parseFloat(await promptUser("Enter your height in centimeters: "));
    const weight = parseFloat(await promptUser("Enter your weight in Kg: "));

    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
      console.log("Please enter valid details.");
    } else {
      const bmi = calculateBMI(height, weight);
      console.log(`Your Body-Mass index is: ${bmi.toFixed(2)}`);
      console.log(getBMICategory(bmi));
    }
  } catch (error) {
    console.log("An error occurred: ", error.message);
  } finally {
    rl.close();
  }
}

main();
