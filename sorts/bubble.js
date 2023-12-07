async function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // await asyncSwap(arr, j, j + 1, 5);
        swap(arr, j, j + 1);
      }
    }
    await sleep(50);
  }
}

async function optimalBubble(arr) {
  let n = arr.length - frameCount;
  for (let j = 0; j <= arr.length; j++) {
    for (let i = 0; i <= n - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        // await asyncSwap(arr, i, i + 1, 0);
        swap(arr, i, i + 1);
      }
    }
    await sleep(50);
  }
}
