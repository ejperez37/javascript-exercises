const sumAll = function(numAlpha, numBeta) {

let finalSum = 0;
for(let i = Math.min(numAlpha, numBeta); i <= Math.max(numAlpha, numBeta); i++){
  finalSum += i;
}

if(numAlpha < 0 || numBeta < 0 || typeof numAlpha !== 'number' || typeof numBeta !== 'number'){
  return 'ERROR';
}
else return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
