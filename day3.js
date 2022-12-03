export function partOneCode(input) {
  let splitInput = input.split(/\r?\n/);


  let doubleScore = 0;
  let charValueCheck = (char) => {
    if(char === char.toUpperCase()){
      return char.charCodeAt(0) - 38
    }
    if(char === char.toLowerCase()){
     return char.charCodeAt(0) - 96
    }
  }
  const intersection = (set1, set2) => new Set([...set1].filter((item) => set2.has(item)))

  for (let i = 0; i < splitInput.length; i++) {
    let firstHalf = new Set(splitInput[i].slice(0, splitInput[i].length/2));
    let secondHalf = new Set(splitInput[i].slice(splitInput[i].length/2, splitInput[i].length));
    let intersectionSet = intersection(firstHalf, secondHalf);
    if(intersectionSet.size > 0){
      doubleScore += charValueCheck(intersectionSet.values().next().value)
    }

  }

  return doubleScore;
}

export function partTwoCode(input) {
  let splitInput = input.split(/\r?\n/);
  let badgesSum = 0;
  const intersection = (set1, set2) => new Set([...set1].filter((item) => set2.has(item)))

  let charValueCheck = (char) => {
    if(char === char.toUpperCase()){
      return char.charCodeAt(0) - 38
    }
    if(char === char.toLowerCase()){
      return char.charCodeAt(0) - 96
    }
  }

  for (let i = 0; i < splitInput.length-2; i+=3) {
    let firstPart = new Set(splitInput[i]);
    let secondPart = new Set(splitInput[i+1]);
    let thirdPart = new Set(splitInput[i+2]);

    let intersectionSet = intersection(firstPart, secondPart);
    let intersectionSet2 = intersection(intersectionSet, thirdPart);


    if(intersectionSet2.size > 0){
      badgesSum += charValueCheck(intersectionSet2.values().next().value)
    }
  }
  return badgesSum;
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
