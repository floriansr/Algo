let fs = require('fs');

try {
	fs.readFile(process.argv[2], 'utf8', (error, data) => {
		newData = data.split(' ').map(Number);
		buildingsSunshine(newData.slice(), newData.length);
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



const buildingsSunshine = (x, n) => {

		let count = 1
		let min = x[n-1]
			
		for (let j = n-2; j >= 0; j--){

			if (min < x[j]){
				min = x[j]
				count++
			}
		}
	console.log(count)
}