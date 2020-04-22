let fs = require('fs');

fs.readFile(process.argv[2], 'utf8', (error, data) => {
	newData = data.split(' ').map(Number);
	selectionSort(newData, newData.length);
});



const selectionSort = (x, n) => {

		let count = 1

		for (let i = n-1; i >= 1 ; i --){
			
			for (let j = i-1; j >= 0; j--){			
				
				if (x[j] > x[i]){
				count++
				}
			break;
			}
		}
	console.log(count)
}