function adjacentElementsProduct(inputArray: number[]): number {
  let prod = 0;
  let maxProd = 0;

  for (let i = 1; i < inputArray.length; i++) {
    prod = inputArray[i] * inputArray[i - 1];
    prod > maxProd ? (maxProd = prod) : undefined;
  }

  return maxProd;
}
console.log(adjacentElementsProduct([3, 6, 9, -2, -5, 7, 10, 3]));
