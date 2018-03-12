//Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes. Input may include camelcase, underscores, spaces.
function spinalCase(str) {
    return str.replace(/([a-z](?=[A-Z]))/g, '$1 ').replace(/\s/g, "-").replace(/_/g,"-").toLowerCase();
}

console.log(spinalCase('This Is Spinal Tap'));
