//The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.
//Base pairs are a pair of AT and CG. Match the missing element to the provided character.
//Return the provided character as the first element in each array.
//For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

function pairElement(str) {
    var arr = [];

    function check(char) {
        if (char === "A") {
            arr.push(["A", "T"]);
        } else if (char === "T") {
            arr.push(["T", "A"]);
        } else if (char === "C") {
            arr.push(["C", "G"]);
        } else if (char === "G") {
            arr.push(["G", "C"]);
        }
    }

    for (var i = 0; i < str.length; i++) {
        check(str[i]);
    }
    return arr;
}

console.log(pairElement("GCG"));
