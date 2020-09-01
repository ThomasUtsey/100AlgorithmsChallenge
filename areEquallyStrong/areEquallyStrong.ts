function areEquallyStrong(yourLeft: number, yourRight: number, friendsLeft: number, friendsRight: number): boolean {
<<<<<<< HEAD
    if (yourLeft !== friendsLeft && yourLeft !== friendsRight) return false
    if (yourRight !== friendsRight && yourRight !== friendsLeft) return false
    return true   
=======
  if(yourLeft + yourRight !== friendsLeft + friendsRight)return false


  return true
>>>>>>> 6711633f4e553d58c77e701d963e2ce1044614a9
}

console.log(areEquallyStrong(10, 15, 15, 10))
console.log(areEquallyStrong(15, 10, 15, 10))
console.log(areEquallyStrong(15, 10, 15, 9))
