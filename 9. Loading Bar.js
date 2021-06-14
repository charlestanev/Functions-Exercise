// You will receive a single number between 0 and 100 which is divided with 10 without residue (0, 10, 20, 30...). 
// Your task is to create a function that visualize a loading bar depending on that number you have received in the input.

function loadingBar(n) {
    function fullRow(n) {
        return '%'.repeat(n / 10);
    }

    function emptyRow(n) {
        return '.'.repeat(10 - n / 10);
    }

    let result = '';
    if (n === 100) {
        result = `100% Complete!\n` + `[${fullRow(n)}]`
    } else {
        result = `${n}% [${fullRow(n)}${emptyRow(n)}]\nStill loading...`
    }
    return result;
}

loadingBar(
    30
);

// 30% [%%%.......]
// Still loading...

// 100% Complete!
// [%%%%%%%%%%]