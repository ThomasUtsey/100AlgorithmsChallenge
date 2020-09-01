function areSimilar(a: number[], b: number[]): boolean {
  if (a.length === b.length) {
    a.sort();
    b.sort();
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) return false;
    }
  } else {
    return false;
  }

  return true;
}

console.log(areSimilar([1,2,3,4],[3,1,2,4]))
console.log(areSimilar([1, 2, 3], [1, 2, 3]));
console.log(areSimilar([1, 2, 3], [2, 1, 3]));
console.log(areSimilar([1, 2, 2], [2, 1, 1]));
