//Check if a string (first argument, str) ends with the given target string (second argument, target).
function confirmEnding(str, target) {
    var str1 = str.substring((str.length - 1) - (target.length - 1), str.length);
    return str1 === target;

}

console.log(confirmEnding("Bastian", "n"));