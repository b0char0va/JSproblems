//Drop the elements of an array (first argument), starting from the front, until the predicate (second argument) returns true.
function dropElements(arr, func) {
    var i=0;
    while(func(arr[i])===false){
        arr.shift();
    }
    return arr;
}

console.log(dropElements([1, 2, 3], function(n) {return n < 3; }));