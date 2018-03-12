//Translate the provided string to pig latin.
//Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".
//If a word begins with a vowel you just add "way" to the end.

function translatePigLatin(str) {
    for (var i = 0; i < str.length; i++) {
        if (str[0] == "a" || str[0] == "e" || str[0] == "i" || str[0] == "o" || str[0] == "u") {
            return str + "way";
        } else if (str[i] == "a" || str[i] == "e" || str[i] == "i" || str[i] == "o" || str[i] == "u") {
            return str.substring(i) + str.substring(0, i) + "ay";
        }
    }
}

console.log(translatePigLatin("consonant"));