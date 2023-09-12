// **Fibonacci Number

let _nthFibonacci = function(n) {
    let fibNum = new Array(n);
    fibNum[0] = 0;
    fibNum[1] = 1;

    for (let i = 2; i <= n; i++) {
        fibNum[i] = fibNum[i-1] + fibNum[i-2];
    }

    return fibNum[n];
};

let n = 8;
console.log(`${n}th Fibonacci number is > `, _nthFibonacci(n));