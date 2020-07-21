function allLongestStrings(inputArray: string[]): string[] {
    let longestString = 0
    const retArray = []
    
    for (let str of inputArray) {
        str.length>longestString?longestString = str.length:undefined
    }
    for (let str of inputArray) { 
        str.length === longestString?retArray.push(str):undefined
    }
return retArray
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));