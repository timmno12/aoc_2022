export function partOneCode(input) {
  let splitInput = input.split(/\r?\n/);

  let row;
  let firstOne;
  let firstSecond;
  let secondOne;
  let secondSecond;

  let fullContainScore = 0;

  for (let splitInputKey in splitInput) {
    row = splitInput[splitInputKey].split(",");
    firstOne = parseInt(row[0].split("-")[0]);
    firstSecond = parseInt(row[0].split("-")[1]);
    secondOne = parseInt(row[1].split("-")[0]);

    secondSecond = parseInt(row[1].split("-")[1]);

      if(firstOne <= secondOne && firstSecond >= secondSecond){
        fullContainScore += 1;
      } else if(secondOne <= firstOne && secondSecond >= firstSecond){
        fullContainScore += 1;
      }

  }
  return fullContainScore;
}
export function partTwoCode(input) {
  let splitInput = input.split(/\r?\n/);

  let row;
  let firstOne;
  let firstSecond;
  let secondOne;
  let secondSecond;

  let partialContainScore = 0;

  for (let splitInputKey in splitInput) {
    row = splitInput[splitInputKey].split(",");
    firstOne = parseInt(row[0].split("-")[0]);
    firstSecond = parseInt(row[0].split("-")[1]);
    secondOne = parseInt(row[1].split("-")[0]);
    secondSecond = parseInt(row[1].split("-")[1]);
    
    if(firstOne <= secondOne && firstSecond >= secondOne){
      partialContainScore += 1;
    } else if(secondOne <= firstOne && secondSecond >= firstOne){
      partialContainScore += 1;
    }
  }
  return partialContainScore;
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
