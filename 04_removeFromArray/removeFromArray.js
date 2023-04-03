const removeFromArray = function(array, ...args) {
    //return the array with the args removed
    return array.filter(item => !args.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
