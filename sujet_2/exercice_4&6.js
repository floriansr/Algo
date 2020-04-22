let fs = require('fs');

fs.readFile(process.argv[2], 'utf8', (error, data) => {
	newData = data.split(' ').map(Number);
	selectionSort(newData, newData.length);
});



const selectionSort = (x, n) => {

		let count = 0
		let min = x[n-1]
		count++
			
		for (let j = n-2; j >= 0; j--){

			if (min < x[j]){
				min = x[j]
				count++
			}
		}
	console.log(count)
}