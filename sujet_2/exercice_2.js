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
		let max = x[n-1]

		for (let i = n-1; i >= 1 ; i --){

			console.log("tour = " + i)
			console.log("----")

			for (let j = i-1; j >= 0; j--){
	
				if (x[j] > max){
				max = x[j]
				count++
				console.log("count =  " + count)
				}
			break;
			}
		}
	console.log("compte final = " + count)
}