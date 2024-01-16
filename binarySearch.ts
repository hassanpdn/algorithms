let arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8];

let start = 0;

let end = arr.length - 1;

let target = 8;

function binarySearch(arr : number[], start : number, end : number, target : number) {
  if(start > end) return false
  let midIndex: number = Math.floor((start + end) / 2);
  if (arr[midIndex] === target) return true;

  if (arr[midIndex] > target)
    return binarySearch(arr, start, midIndex - 1, target);
  else return binarySearch(arr, midIndex + 1, end, target);
}

console.log(binarySearch(arr, start, end, target))
