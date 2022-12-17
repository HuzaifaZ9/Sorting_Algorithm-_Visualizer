let n = 100;


const array = [];
let swaps = [];
init();


function init() {
  for (let i = 0; i < n; i++) {
    array[i] = Math.random();
  }
  showBars();
}

function play() {
  const copy=[...array];
  const swaps = selectionSort(copy);

  animate(swaps);
}

function animate(swaps) {
  if (swaps.length == 0) {
      return;
  }
  const [i,j]= swaps.shift(0);
  [array[i],array[j]] = [array[j],array[i]];
  showBars();
  setTimeout(function() {
    animate(swaps);
  }, 10);
}



function selectionSort(array) {

  do {
   var swapped = false;
    for (let i=0; i<array.length;i++) {
      for (let j=i+1;j<array.length;j++) {
        if (array[j] < array[i]) {
          var swapped = true;
          swaps.push([[i],[j]]);
            [array[i],array[j]] = [array[j],array[i]];
        }
      }
    }
  } while (swapped);
  return swaps;
}



function showBars() {
  container.innerHTML = "";
  for (let i = 0; i < array.length; i++) {
    const bar = document.createElement("div");
    bar.style.height = array[i] * 100 + "%";
    bar.classList.add("bar");
    container.appendChild(bar);
  }
}


// function swap(i,j) {
//   var temp = array[j];
//   array[j] = array[i];
//   array[i] = temp;
//   return array[i];
// }


//how a destructuring operator is used
// let arr = [3,5]
// let [a,b]= arr;
