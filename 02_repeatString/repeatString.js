const repeatString = function(word,occurrence) {
    let r = '';
    if(occurrence<0){       
        return 'ERROR';
    }
    let i = 0;
    while(i<occurrence){
        r+=word;
        i++;
    }
    return r;
};

// Do not edit below this line
module.exports = repeatString;
