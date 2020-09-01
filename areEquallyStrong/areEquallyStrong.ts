function areEquallyStrong(yourLeft: number, yourRight: number, friendsLeft: number, friendsRight: number): boolean {
    if (yourLeft !== friendsLeft && yourLeft !== friendsRight) return false
    if (yourRight !== friendsRight && yourRight !== friendsLeft) return false
    return true   
}

console.log(areEquallyStrong(10, 15, 15, 10))
console.log(areEquallyStrong(15, 10, 15, 10))
console.log(areEquallyStrong(15, 10, 15, 9))
