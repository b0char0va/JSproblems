function gcd(num1, num2){
    if(num2===0){
        return num1;
    }else{
        return gcd(num2, num1%num2);
    }
}

function lcm(num1, num2){
    return (num1*num2)/gcd(num1,num2);
}

function smallestCommons(arr) {
    arr=arr.sort();
    var array=[arr[0]];
    for(var j=arr[0]; j<arr[1]; j++){
        array.push(j+1);
    }

    var result=array[0];
    for(var i=1; i<array.length; i++){
        result=lcm(result, array[i]);
    }
    return result;
}

console.log(smallestCommons([1,5]));