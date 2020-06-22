// in the problem below we are to use the array and build a
// picture frame around the inputs

function addBorder(picture) {
  // first we will define the top and bottom based upon the
  // length of each item in the array.
  const topNum = picture[0].length + 2;
  let frame = "";
  let body = "";
  const newArr = [];
  for (let i = 1; i <= topNum; i++) {
    frame += "*";
  }
  newArr.push(frame);

  for (let str of picture) {
    body = "*" + str + "*";
    newArr.push(body);
  }

  newArr.push(frame);
  return newArr;
}

console.log(addBorder(["abc", "ded"]));
