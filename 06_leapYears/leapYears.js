const leapYears = function(year) {
//create a function that takes a year as an argument and returns true if it is a leap year and false if it is not, a leap year is any year divisible by 4 but not by 100 unless it is also divisible by 400
    if(year % 4 === 0 && year % 100 !== 0 || year % 400 === 0){
        return true;
    }
    else {
        return false;
    }
};
// Do not edit below this line
module.exports = leapYears;
