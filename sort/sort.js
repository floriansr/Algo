let fs = require('fs');

try {
  fs.readFile(process.argv[2], 'utf8', (error, data) => {

  	newData = data.split(' ').map(Number);

  	merge(newData.slice());
  	insertionSort(newData.slice(), newData.length);
  	selectionSort(newData.slice(), newData.length);
  });
}
catch (error) {
  if (!process.argv[2]) {
  console.log("Echec loading array");
  return;
  }
  console.error(error);
  return;
}

const merge = (x) => {

  let counter = 0;

  const mergeTopDown = (left, right) => {

    const array = [];

    while (left.length && right.length) {
      counter++
      
      if (left[0] < right[0]) {
        array.push(left.shift());
      } else {
        array.push(right.shift());
      }
    }  
    return array.concat(left.slice()).concat(right.slice());
  }

  const mergeSortTopDown = (x) => {
    
    if (x.length <= 1) {
      return x;
    }

    const middle = Math.floor(x.length / 2);
    const left = x.slice(0, middle);
    const right = x.slice(middle);
    
    return mergeTopDown(mergeSortTopDown(left), mergeSortTopDown(right));
  };

  x = mergeSortTopDown(x);
  console.log(`Merge sort : ${counter} times`);
  console.log("-----------------------------");
}

const insertionSort = (x, n) => {
    let counter = 0;
    for (let i = 1; i <= n-1; i++) {
            
            let tmp = x[i];
            let j = i;

            while (j > 0 && x[j - 1] > tmp) {
            counter++;
                x[j] = x[j - 1];
                j = j - 1;
            }
        x[j] = tmp
    }
    console.log(`Insertion sort : ${counter} times`);
    console.log("-----------------------------");
}


const selectionSort = (x, n) => {
  let counter = 0
  for (let i = 0; i <= (n - 2); i++){
    
    let min = i
      
    for (let j = i + 1; j <= n-1; j++){
      counter ++
      if (x[j] < x[min]){
        min = j
      }
    }

    if (min != i){
      [x[i], x[min]] = [x[min], x[i]]
    }
  }
    console.log(`Selection sort : ${counter} times`);
    console.log("-----------------------------");
}