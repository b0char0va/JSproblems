function rot13(str) {
    var result = "";
    for (var i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) >= 78 && str.charCodeAt(i) <= 90) {
            result += String.fromCharCode(str.charCodeAt(i) - 13);
        } else if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 77) {
            result += String.fromCharCode(str.charCodeAt(i) + 13);
        } else {
            result += str[i];
        }
    }
    return result;
}

console.log(rot13("SERR PBQR PNZC"));