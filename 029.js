//Search the array for Object's key and properties in second argument and returns the object/s from the array which has the second argument's keys and properties
function whatIsInAName(collection, source) {
    var arr=[];

    for(var i=0; i<collection.length; i++){
        if(compareObj(source,collection[i])){
            arr.push(collection[i]);
        }
    }
    return arr;
}
function compareObj(obj1, obj2){

    for (var key in obj1){
        if((obj2[key]!==obj1[key])){
            return false;
        }
    }
    return true;
}


console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));
console.log(whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 }));


