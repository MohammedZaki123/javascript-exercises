const leapYears = function(year) {
    // checking for the years that are not leap years
    if(year % 4 !== 0 ){
    return false;
    }
    if((year % 100 === 0 && year % 400 !== 0)){
        return false;
    }else{
        return true;
    }
};

// Do not edit below this line
module.exports = leapYears;
