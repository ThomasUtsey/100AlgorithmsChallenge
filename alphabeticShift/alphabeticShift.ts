function alphabeticShift(inputString: string): string {
  let nstr = "";
  let numBuffer = 0;

  for (let i = 0; i < inputString.length; i++) {
    // check if letter is z and change it to a otherwise add one to charCodeAt
    if (inputString[i] === "z") {
      nstr = nstr + "a";
    } else {
      numBuffer = inputString.charCodeAt(i) + 1;
      //use the String class method fromCharCode to retrieve the corresponding letter to the number in numBuffer
      nstr = nstr + String.fromCharCode(numBuffer);
    }
  }
  return nstr;
}

console.log(alphabeticShift("crazy"));
