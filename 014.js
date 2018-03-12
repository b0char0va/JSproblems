//Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both.
// In other words, return the symmetric difference of the two arrays.
function diffArray(arr1, arr2) {
    var newArr= arr1.concat(arr2);
    var myArr = newArr.filter(function(i){
        return !arr1.includes(i) + !arr2.includes(i);
    });
    return myArr;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));