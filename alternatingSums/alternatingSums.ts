<<<<<<< HEAD
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
=======
function alternatingSums(a) {
  console.log(a);
  let oddSum = 0;
  let evenSum = 0;
  const totArr = [];

  for (let i = 0; i < a.length; i += 2) {
    evenSum += a[i];
  }
  for (let i = 1; i < a.length; i += 2) {
    oddSum += a[i];
  }
  totArr.push(evenSum);
  totArr.push(oddSum);
  return totArr;
}

console.log(alternatingSums([50, 60, 60, 45, 70]));
>>>>>>> 6711633f4e553d58c77e701d963e2ce1044614a9
