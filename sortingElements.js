let carModelPrice = [1235624, 4621556, 87546235];

let highestMSRP = carModelPrice.find(element => element > 70000000);

let sortedMSRP = carModelPrice.sort();

sortedMSRP.forEach(sortedMSRP => console.log(sortedMSRP));

console.log(highestMSRP);
