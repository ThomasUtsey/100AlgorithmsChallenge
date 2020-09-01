function alternatingSums(a: number[]): number[] {
  const retArray = [0, 0];
  let teamOne = 0;
  let teamTwo = 0;
  for (let i = 0; i < a.length; i += 2) {
    retArray[0] += a[i];
  }
  for (let i = 1; i < a.length; i += 2) {
    retArray[1] += a[i];
  }
  return retArray;
}

console.log(alternatingSums([50, 60, 60, 45, 70, 25]));
