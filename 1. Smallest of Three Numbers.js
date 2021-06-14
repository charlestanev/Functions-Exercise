// Write a function which receives three integer numbers to print the smallest. Use appropriate name for the function.

function smallestOfThree(x, y, z) {
    let smallestNumber = Number.MAX_SAFE_INTEGER;

    function getSmaller(n) {
        if (n < smallestNumber) {
            smallestNumber = n;
        }
    }

    for (const n of arguments) {
        getSmaller(n);
    }

    return smallestNumber;
}

smallestOfThree(
    600,
    342,
    123
);