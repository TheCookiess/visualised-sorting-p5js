async function quicksort(arr, start, end) {
  if (start >= end) {
    return;
  }

  const index = await getPivot(arr, start, end);
  states[index] = -1;

  await Promise.all([
    quicksort(arr, start, index - 1),
    quicksort(arr, index + 1, end),
  ]);
}

// gets the pivot point for an array.
async function getPivot(arr, start, end) {
  for (let i = start; i < end; i++) {
    states[i] = 1;
  }

  let pivotIndex = start;
  const pivotValue = arr[end];

  states[pivotIndex] = 0;

  for (let i = start; i < end; i++) {
    if (arr[i] < pivotValue) {
      await asyncSwap(arr, i, pivotIndex, 50);

      states[pivotIndex] = -1;

      pivotIndex++;

      states[pivotIndex] = 0;
    }
  }

  await asyncSwap(arr, pivotIndex, end, 50);

  for (let i = start; i < end; i++) {
    if (i != pivotIndex) {
      states[i] = -1;
    }
  }
  return pivotIndex;
}
