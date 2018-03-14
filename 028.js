function sumPrimes(num) {
    var sum = 2;
    for (var j = 3; j <= num; j += 2) {
        var divisor = Math.floor(Math.sqrt(j));
        var isPrime = true;
        for (var i = 3; i <= divisor; i += 2) {
            if (j % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            sum += j;
        }
    }
    return sum;
}

console.log(sumPrimes(7));
