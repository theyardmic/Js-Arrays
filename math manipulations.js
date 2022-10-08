let carMSRP = [1235624, 4621556, 87546235];

let highestMSRP = carMSRP.find(element => element > 70000000);

let sortedMSRP = carMSRP.sort();

let discountedMSRP = carMSRP.map(l => l-500000);
discountedMSRP.forEach(discountedMSRP => console.log(discountedMSRP));
