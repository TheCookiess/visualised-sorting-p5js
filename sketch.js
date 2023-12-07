const scale = 4;
let values = [];
let states = [];
let count = 0;

async function setup() {
  createCanvas(1000, 500);
  frameRate(20);
  values = new Array(floor(width / scale));

  // initRands();
  // await sleep(values.length * 30);

  initValues();
  shuffleFunction(values);
  console.log("begin sorting");

  // bubbleSort(values);
  // optimalBubble(values);
  // insertionSort(values);
  //quicksort(values, 0, values.length - 1);
  //mergeSort(values, 0, values.length - 1); manor work in progress lol

  // dwa(values, new Array(), values.length);
}

function draw() {
  background(33);
  render();

  if (isSorted(values) === true) {
    if (count === values.length) {
      noLoop();
      console.log("sorting complete");
    }
    frameRate(240);
    count++;
    for (let i = 0; i < count; i++) {
      fill(40, 255, 100);
      // trying to speed up green...
      for (let j = 0; j < 10 - scale; j++) {
        if (i + j >= values.length) continue;
        rect((i + j) * scale, height - values[i + j], scale, values[i + j]);
      }
    }
  }
}
