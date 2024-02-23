const removeFromArray = function(arr,...removed) {
    let new_arr = []
    for (let i = 0;i<arr.length;i++){
        if(!(removed.includes(arr[i]))){
            new_arr.push(arr[i]);
        }
    }
    return new_arr;
};
removeFromArray([1, 2, 3, 4], 3);
// Do not edit below this line
module.exports = removeFromArray;
