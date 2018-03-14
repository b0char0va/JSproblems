//sum all primes up to and including the provided number
function sumPrimes(num) {
    var primes=[];
    for(var j=2; j<=num; j++) {
        var divisor = Math.floor(Math.sqrt(j));
        var isPrime=true;
        for (var i = 2; i <= divisor; i++) {
            if (j % i === 0) {
                isPrime=false;
                break;
            }
        }
        if (isPrime) {
            primes.push(j);
        }
    }
    return primes.reduce(function(a,b){
        return a+b;
    }) ;
}

console.log(sumPrimes(10));