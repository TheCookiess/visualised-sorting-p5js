function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function initValues() {
  for (let i = 0; i < width / scale; i++) {
    values[i] = i * (height / (width / scale));
    states[i] = -1;
    // if (i % 2 === 0) await sleep(40); // very bugg 0/10 would again - ign
  }
}

async function initRands() {
  for (let i = 0; i < values.length; i++) {
    values[i] = ceil(random(height - 1));
    states[i] = 0;
    if (i % 2 === 0) await sleep(40);
    states[i] = -1;
  }
}

function setBarColour(i) {
  if (scale > 4) strokeWeight(1);
  else noStroke();
  if (states[i] === 0) {
    fill(255, 20, 20); // sorting
  } else if (states[i] === 1) {
    fill(55, 55, 55);
  } else {
    fill(255); // blank.
  }
}

function render() {
  for (let i = 0; i < values.length; i++) {
    setBarColour(i);
    rect(i * scale, height - values[i], scale, values[i]);
  }
}

async function asyncSwap(arr, i, j, ms) {
  await sleep(ms);
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

async function shuffleFunction(values) {
  let m = values.length,
    t,
    i;
  while (m) {
    i = Math.floor(Math.random() * m--);
    t = values[m];
    values[m] = values[i];
    values[i] = t;
    states[i] = 0;
    states[m] = 0;
    await sleep(10);
    states[i] = -1;
    states[m] = -1;
  }
  await sleep(values.length * 20);
}

function isSorted(arr) {
  for (let j = 0; j <= arr.length; j++) {
    if (arr[j] > arr[j + 1]) {
      return false;
    }
  }
  return true;
}

// function drawRects(arr) {
//   if (scale < 4) strokeWeight(0);
//   for (let i = 0; i < arr.length; i++) {
//     fill(255);
//     rect(i * scale, height - values[i], scale, arr[i]);
//   }
// }
