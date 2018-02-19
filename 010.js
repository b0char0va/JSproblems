//Remove all elements from the initial array that are of the same value as these arguments.
function destroyer(arr) {
    var arr1 = Array.from(arguments).slice(1);
    var arr2 = arr.filter(
        function(i) {
            return !arr1.includes(i);
        });
    return arr2;
}

console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5));