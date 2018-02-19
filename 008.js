//Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
function mutation(arr) {
    var arr1 = arr[0].toLowerCase();
    var arr2 = arr[1].toLowerCase();
    for (var i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) === -1) {
            return false;
        }
    }
    return true;
}

console.log(mutation(["hello", "ueo"]));
