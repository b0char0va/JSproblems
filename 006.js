//Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
function chunkArrayInGroups(arr, size) {
    var arr1 = [];
    var j = 0;
    for (var i = 1; i <= Math.ceil(arr.length / size); i++) {
        arr1.push(arr.slice(j, j + size));
        j += size;
    }
    return arr1;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));