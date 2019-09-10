let NUMBERS = [];
let SORTNUM = 0;

let i = 0;
let j = 0;

function setup(){
  //loop();
  createCanvas(windowWidth, windowHeight);
  NUMBERS = new Array(width);
  for (let i = 0; i < NUMBERS.length; i++){
    NUMBERS[i] = random(height);
  }
}

function draw() {
  background(52, 164, 225);

  switch (SORTNUM) {
    case 1:
      insertion();
      i++;
      break;
    case 2:
      selection();
      i++;
      break;
    case 3:
      bubble();
      i++;
      break;
  }

  for (let i = 0; i < NUMBERS.length; i++){
    stroke(222, 93, 158);
    line(i, height, i, height - NUMBERS[i]);
  }
}

function selection(){
  if (i < NUMBERS.length){
    var jMin = i;
    for (let j = i + 1; j < NUMBERS.length; j++){
      if (NUMBERS[j] < NUMBERS[jMin]){
        jMin = j;
      }
    }
    if (jMin != i){
      swap(NUMBERS, i, jMin);
    }
  } else {
    noLoop();
  }
}

function insertion(){
  if (i < NUMBERS.length) {
    var x = NUMBERS[i];
    let j = i - 1;
    while (j >= 0 && NUMBERS[j] > x){
      NUMBERS[j+1] = NUMBERS[j];
      j--;
    }
    NUMBERS[j+1] = x;
  } else {
    noLoop();
  }
}

function bubble(){
  if (i < NUMBERS.length){
    for (let j = 0; j < NUMBERS.length - i - 1; j++){
      let a = NUMBERS[j];
      let b = NUMBERS[j+1];
      if (a > b){
        swap(NUMBERS, j, j + 1);
      }
    }
  } else {
    noLoop();
  }
}

function swap(array, ind1, ind2){
  let placeholder = array[ind1];
  array[ind1] = array[ind2];
  array[ind2] = placeholder;
}

function insShort(){
  i = 0;
  SORTNUM = 1;
}

function selShort(){
  i = 0;
  SORTNUM = 2;
}

function bubShort(){
  i = 0;
  SORTNUM = 3;
}

function reset(){
  window.location.reload();
}
