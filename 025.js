//Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

function truthCheck(collection, pre) {
    // Is everyone being true?
    var a= collection.filter(function (t) {
        return(!t[pre]);
    });
    if (a.length>0){
        return false;
    } else{
        return true;
    }
}

console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"));