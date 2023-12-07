// // works but too quick! only 1 frame so sad
// function mergeSort(array) {
//   const half = floor(array.length / 2);
//   // Base case or terminating case
//   if (array.length < 2) {
//     return array;
//   }

//   const left = array.splice(0, half);
//   return merge(mergeSort(left), mergeSort(array));
// }
// // can't put sleep ^^ as it just adds to runtime before returning to values..
// function merge(left, right) {
//   let arr = [];
//   while (left.length && right.length) {
//     if (left[0] < right[0]) {
//       arr.push(left.shift());
//     } else {
//       arr.push(right.shift());
//     }
//   }

//   // Concatenating the leftover elements
//   // (in case we didn't go through the entire left or right array)
//   return [...arr, ...left, ...right];
// }

async function merge(arr, l, m, r) {
  const n1 = m - l + 1;
  const n2 = r - m;

  // Create temp arrays
  let L = new Array(n1);
  let R = new Array(n2);

  // Copy data to temp arrays L[] and R[]
  for (let i = 0; i < n1; i++) L[i] = arr[l + i];
  for (let j = 0; j < n2; j++) R[j] = arr[m + 1 + j];

  // Merge the temp arrays back into arr[l..r]

  // Initial index of first subarray
  let i = 0;

  // Initial index of second subarray
  let j = 0;

  // Initial index of merged subarray
  let k = l;

  while (i < n1 && j < n2) {
    if (L[i] <= R[j]) {
      // await sleep(50);
      arr[k] = L[i];
      i++;
    } else {
      // await sleep(50);
      arr[k] = R[j];
      j++;
    }
    k++;
  }

  // Copy the remaining elements of
  // L[], if there are any
  while (i < n1) {
    arr[k] = L[i];
    i++;
    k++;
  }

  // Copy the remaining elements of
  // R[], if there are any
  while (j < n2) {
    // await sleep(5);
    arr[k] = R[j];
    j++;
    k++;
  }
}

// l is for left index and r is
// right index of the sub-array
// of arr to be sorted */
async function mergeSort(arr, l, r) {
  if (l >= r) {
    return; //returns recursively
  }
  let m = l + parseInt((r - l) / 2);
  mergeSort(arr, l, m);
  mergeSort(arr, m + 1, r);
  merge(arr, l, m, r);
}
