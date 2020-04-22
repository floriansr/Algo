let fs = require('fs');

fs.readFile(process.argv[2], 'utf8', (error, data) => {
	newData = data.split(' ').map(Number);
	bubbleSort(newData);
});


const bubbleSort = (x) => {

	let k = 17

	for (let i = 1; i <= (x.length - 1); i++){

		console.log(i + " " + "tours de i")

				for (let j = 0 ; j < (x.length - i) ; j++){

					// console.log(x[i-1])
					// console.log(x[j+i])
					// console.log(k)

					if (x[i-1] + x[j+i] === k)
					return console.log(true);
				}
	}
	console.log(x);
};