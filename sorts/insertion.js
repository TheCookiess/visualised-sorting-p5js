async function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = values[i];
    let j = i - 1;
    for (; j >= 0 && values[j] > currentVal; j--) {
      values[j + 1] = values[j];
    }
    values[j + 1] = currentVal;
    await sleep(50);
  }
}
