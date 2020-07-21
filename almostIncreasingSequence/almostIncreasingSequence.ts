function almostIncreasingSequence(sequence: number[]): boolean {
  let prevVal = sequence[0];
  let count = 0;

  for (let i = 1; i < sequence.length; i++) {
    sequence[i] === prevVal + 1 ? (prevVal = sequence[i]) : count++;
  }
  return count < 2;
}

console.log(almostIncreasingSequence([1, 3, 2, 1]));
console.log(almostIncreasingSequence([1, 3, 2, 3, 4, 5, 6]));
