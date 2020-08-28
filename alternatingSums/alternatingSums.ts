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
