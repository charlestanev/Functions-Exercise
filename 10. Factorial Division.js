// Write a function that receives two integer numbers. Calculate factorial of each number. Divide the first result by the second and print the division formatted to the second decimal point.

function factorialDiv(x, y) {
    function factorial(n) {
        let f = 1;
        for (let i = 1; i <= n; i++) {
            f *= i;
        }
        return f;
    }
    return (factorial(x) / factorial(y)).toFixed(2);
}

factorialDiv(
    5, 2
);