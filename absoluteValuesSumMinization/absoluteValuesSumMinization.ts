//  The documentation describes solving this problem by
// finding the number before center on even length arrays
// and the center on odd length arrays.

function absoluteValuesSumMinimization(a: number[]): number {
    // first we will determine if array is odd or even with terinary
    // dividing the array length by 2 and substracting 1 since index starts at 0

    return a.length % 2 === 0 ? a[a.length / 2 - 1] : a[Math.floor(a.length / 2)]
}
console.log(absoluteValuesSumMinimization([2, 4, 7]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6, 8]));
