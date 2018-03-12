//Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

function addTogether() {
    if (arguments.length === 2) {
        if (typeof arguments[0] === "number" && typeof arguments[1] === "number") {
            return arguments[0] + arguments[1];
        } else {
            return undefined;
        }
    } else if (arguments.length === 1) {
        var num1 = arguments[0];
        if (typeof num1 !== "number") {
            return undefined;
        } else {
            return function (b) {
                if (typeof b !== "number") {
                    return undefined;
                }
                else {
                    return num1 + b;
                }
            };
        }
    }
}

console.log(addTogether(2, "3"));