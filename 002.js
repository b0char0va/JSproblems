//Return an array consisting of the largest number from each provided sub-array.

function largestOfFour(arr) {
    var arr1 = [];
    for (var i = 0; i < arr.length; i++) {
        arr1.push(arr[i].sort(function (a, b) {
            return a - b;
        }).pop());
    }
    return arr1;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));