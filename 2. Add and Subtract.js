// You will receive three integer numbers. 
// Write a function sum() to get the sum of the first two integers and subtract() function that subtracts the third integer from the result.

function аddАndSubtract(x, y, z) {
    let sum = (a, b) => a + b;

    let substact = (a, b) => a - b;

    return substact(sum(x, y), z);
}

аddАndSubtract(
    42,
    58,
    100
)