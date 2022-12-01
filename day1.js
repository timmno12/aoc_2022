export function partOneCode(input) {
  let splitInput = input.split(/\r?\n/);

  let calories = [];
  for(let i = 0; i< splitInput.length; i++) {
    if (splitInput[i] !== '') {
      calories.push(parseInt(splitInput[i]));
    } else{
      calories.push("Leer");
    }
  }
  let sortedArray = [];
  let sumCalories = 0;
  for(let i = 0; i< calories.length; i++) {
      if(calories[i] !== "Leer"){
        sumCalories += calories[i];
      }
      if(calories[i] === "Leer"){
        sortedArray.push(sumCalories);
        sumCalories = 0;
      }
  }

  let topThreeCalories = sortedArray.sort((a, b) => b - a).slice(0, 3);
  let sumTopThreeCalories = topThreeCalories.reduce((a, b) => a + b, 0);

  return "the  most calories are " + Math.max(...sortedArray) + " ahhh test " + sumTopThreeCalories
}


export function inputParse(originalInput) {
  const currentInput = originalInput;
  let parsedInput = currentInput;
   /**
   * Add input logic here
   */

  return {
    inputToPrint: currentInput, // *optional - inputToPrint will be printed if available
    parsedInputToPrint: parsedInput, // *optional - parsedInputToPrint will be printed if available
    parsedInput, // input data for partOneCode and partTwoCode
  };
}
