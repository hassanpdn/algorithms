let arr: number[] = [1, 3, 10, 722, 3600, 9000];

let start: number = 0;

let end: number = arr.length - 1;

let target: number = 712;

function binarySearch(
  start: number,
  end: number,
  arr: number[],
  target: number
) {
  while (start <= end) {
    let midIndex = Math.floor((start + end) / 2);

    console.log(arr[midIndex]);
    if (arr[midIndex] === target) return midIndex;

    if (arr[midIndex] > target) end = midIndex - 1
    else start = midIndex + 1
  }
  return `There is no item equal to ${target}`
}

console.log(binarySearch(start, end, arr, target));
