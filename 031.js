function convertToRoman(num) {
    var obj = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};
    var romanNum = "";
    for ( var i in obj ) {
        while ( num >= obj[i] ) {
            romanNum += i;
            num -= obj[i];
        }
    }
    return romanNum;
}

console.log(convertToRoman(36));