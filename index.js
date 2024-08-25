let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let arr2 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

const diagonalSum = (arr) => {
  let n = arr.length;
  let sum = 0;

  for (let i = 0; i < n; i++) {
    sum += arr[i][i];

    if (i !== n - i - 1) {
      sum += arr[i][n - i - 1];
    }
  }

  return sum;
};

console.log(diagonalSum(arr));
