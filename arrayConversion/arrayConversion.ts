// Given an array of 2k integers (for some integer k), perform the following operations until the array contains only one element:

// -   On the 1st, 3rd, 5th, etc. iterations (1-based) replace each pair of consecutive elements with their sum;
// -   On the 2nd, 4th, 6th, etc. iterations replace each pair of consecutive elements with their product.
// be a single elementAfter the algorithm has finished, there will  left in the array. Return that element.


function arrayConversion(inputArray: number[]): number {
    const bufferArray = []
    const retArray = []
    

    for (let i = 1; i < inputArray.length; i = i + 2) {
        bufferArray.push(inputArray[i - 1] + inputArray[i])
    }
    for (let i = 1; i < bufferArray.length; i+=2){
        retArray.push(bufferArray[i-1] * bufferArray[i])
    }
    
}

console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]));
