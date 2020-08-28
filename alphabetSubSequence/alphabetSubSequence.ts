function alphabetSubsequence(s: string): boolean {
  // check to see if the letters following each come after the proceeding one.
  let compNum = s.charCodeAt(0);
  // loop over string and use charCodeAt to determine the value of a letter if it is less than the one before return false
  for (let i = 1; i < s.length; i++) {
    if (compNum >= s.charCodeAt(i)) return false;
    compNum = s.charCodeAt(i);
  }
  return true;
}

console.log(alphabetSubsequence("zab"));
console.log(alphabetSubsequence("effg"));
console.log(alphabetSubsequence("cdce"));
console.log(alphabetSubsequence("ace"));
console.log(alphabetSubsequence("bxz"));
