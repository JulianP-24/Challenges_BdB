function listOfSquareNumbers(numberList) {
    var numero = 6;
    var newList = [];
    for (let i = 0; i < numberList.length; i++) {
       newList.push(Math.pow(numberList[i],2));
    }
    let res = newList.filter(num => num <= numero.toString().repeat(2));
    return quickSort(res);
}

console.log(listOfSquareNumbers([-6,-5, 0, 5, 6]));

function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  const pivot = arr[Math.floor(Math.random() * arr.length)];

  let left = [];
  let right = [];
  let equal = [];

  for (let val of arr) {
    if (val < pivot) {
      left.push(val);
    } else if (val > pivot) {
      right.push(val);
    } else {
      equal.push(val);
    }
  }
  return [
    ...quickSort(left),
    ...equal,
    ...quickSort(right)
  ];
}