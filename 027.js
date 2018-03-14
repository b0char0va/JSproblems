//Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
function sumFibs(num) {
    var num1=1;
    var num2=0;
    var n=0;
    var sum=1;
    while(n<num){
        n = num1 + num2;
        num2 = num1;
        num1 = n;
        if(n<=num && n%2 !==0) {
            sum+=n;
        }
    }
    return sum;
}

console.log(sumFibs(10));