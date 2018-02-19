/*Remove all falsy values from an array.
  Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
  */

function bouncer(arr) {
    return arr.filter(function (i) {
        return i;
    });
}

console.log(bouncer(["a", "b", "c"]));