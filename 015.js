//Perform a search and replace on the sentence using the arguments provided and return the new sentence.
//Preserve the case of the original word when you are replacing it.
function myReplace(str, before, after) {
    if(before[0]==before[0].toUpperCase()){
        var word=after[0].toUpperCase()+after.substring(1);
        return str.replace(before, word);
    }else if(before==before.toUpperCase()){
        var newWord=after.toUpperCase();
        return str.replace(before, newWord);
    }else{
        return str.replace(before,after);

    }
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");