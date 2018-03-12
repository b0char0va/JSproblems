//sum all numbers in range

function sumAll(arr) {
    var max = arr.reduce(function(a, b) {
        return Math.max(a, b);
    });
    var min= arr.reduce(function(a, b) {
        return Math.min(a, b);
    });
    var sum=min;
    for(var i=min; i<max; i++){
        sum+=i+1;
    }
    return sum;
}

console.log(sumAll([1, 4]));
console.log(sumAll([5, 1]));