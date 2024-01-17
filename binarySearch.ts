// Declare an array 'arr' of numbers in ascending order.
let arr: number[] = [1, 3, 10, 722, 3600, 9000];

// Initialize variables for binary search boundaries.
let start: number = 0;
let end: number = arr.length - 1;

// Specify the target number to search for.
let target: number = 712;

/**
 * Perform binary search within a sorted array to find the index of the target element.
 * @param start - The starting index of the search range.
 * @param end - The ending index of the search range.
 * @param arr - The sorted array to search within.
 * @param target - The target number to find.
 * @returns The index of the target element if found, or a message indicating it's not present.
 */
function binarySearch(start: number, end: number, arr: number[], target: number) {
  // Continue the search until the start index is greater than the end index.
  while (start <= end) {
    // Calculate the middle index of the current search range.
    let midIndex = Math.floor((start + end) / 2);

    // Check if the middle element is equal to the target.
    if (arr[midIndex] === target) return midIndex;

    // If the middle element is greater than the target, adjust the search range accordingly.
    if (arr[midIndex] > target) end = midIndex - 1;
    // If the middle element is less than the target, adjust the search range accordingly.
    else start = midIndex + 1;
  }

  // Return a message indicating that the target element is not present in the array.
  return `There is no item equal to ${target}`;
}

// Call the binarySearch function with the specified parameters and log the result.
console.log(binarySearch(start, end, arr, target));