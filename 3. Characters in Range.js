// Write a function that receives two characters and prints on a single line all the characters in between them according to the ASCII code. Keep in mind that the second character code might be before the first one inside the ASCII table.

function charsInRange(a, b) {
    let first = a.charCodeAt();
    let second = b.charCodeAt();

    function charsInLine(x, y) {
        let line = '';
        for (let i = x + 1; i < y; i++) {
            line += String.fromCharCode(i) + ' ';
        }
        return line;
    }

    return first > second ? charsInLine(second, first) : charsInLine(first, second);
}

charsInRange(
    '#',
    ':'
);