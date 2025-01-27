/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function sum(n){
    let s=0;
    for(let i=1;i<=n;i++){
        s+=i;
    }
    return s;
}

function calculateTime(n) {
    let d1=new Date();
    let t1=d1.getSeconds();
    // console.log(t);
    sum(n);
    let d2=new Date();
    let t2=d2.getSeconds();
    return t2-t1;
}

console.log(calculateTime(100));
console.log(calculateTime(100000));
console.log(calculateTime(1000000000));
