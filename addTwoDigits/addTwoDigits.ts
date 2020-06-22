function addTwoDigits(n: any): number {
  let sum = 0;
  let stringify = n.toString().split("");
  
    for (let num of stringify) {
    sum += parseInt(num);
  }
  return sum;
}

console.log(addTwoDigits(298));
