//Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number.

function repeatStringNumTimes(str, num) {
    var str1 = [];
    if (num < 0) {
        return "";
    } else {
        for (var i = 0; i < num; i++) {
            str1.push(str);
        }
        return str1.join("");
    }
}

console.log(repeatStringNumTimes("abc", 3));