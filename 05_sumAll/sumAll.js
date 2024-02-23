const sumAll = function(start,end){
    if(typeof start !== "number" || start  < 0 ){
        return 'ERROR';
    }
    if (typeof end !== "number" ||   end  < 0 ){
        return 'ERROR';
    }
    if(start > end){
        [start,end] = [end,start];
    }
    let sum = 0;
    for(let i=start;i<=end;i++){
        sum+=i;
        }
        return sum;
};
sumAll(1, 4)
// Do not edit below this line
module.exports = sumAll;
