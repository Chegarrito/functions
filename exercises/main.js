// Add 7 function
function add7(a) {
    return a + 7;
}

console.log(add7(2));

// Multiply function
function multiply(a, b) {
    return a * b;
}

console.log(multiply(2, 5));

// Capitalize the first letter of a word function
function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
     
}

console.log(capitalize("s"));

// Function that takes a string and returns the very last letter of that string

function lastLetter(word2) {
    return word2[word2.length - 1];
}

console.log(lastLetter("abcd"));