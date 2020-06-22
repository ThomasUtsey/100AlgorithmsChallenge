// Here we add 2 params and return the result
function add(param1: number, param2: number): number {
  return param1 + param2;
}

console.log(add(1, 2));
console.log(add(3, 2));

// Here we add an undertermined amount of numbers and return the sum
function add2(...param1: number[]): number {
  // use ... to convert the input of unknown amount of numbers
  // to an array
  let sum = 0;
  // Iterate over the numbers and add to the accumulator (sum)
  for (let num of param1) {
    sum += num;
  }
  return sum;
}

console.log(add2(1, 2, 3, 4, 5));
console.log(add2(2, 37, 7, 5));
