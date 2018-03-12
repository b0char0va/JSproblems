//Find the missing letter in the passed letter range and return it.

function fearNotLetter(str) {
    var start = str.charCodeAt(0);
    for (var i = 1; i < str.length; i++) {
        if (str.charCodeAt(i) !== start + i) {
            return (String.fromCharCode(start + i));
        }
    }
}

console.log(fearNotLetter("abcdefghjklmno"));
