function countVowelCharacters(stringVowel){
    let count = 0;
    for (let i = 0; i < stringVowel.length; i++) {
        if(checkVowel(stringVowel[i])){
            count++;
        }
    }
    return count
}
function checkVowel(vowel){
    for (let i = 0; i < vowel.length; i++) {
        if(vowel[i] == "a" || vowel[i] == "o" || vowel[i] == "e" || vowel[i] == "u" || vowel[i] == "i"){
            return true;
        }
    }
    return false;
}
let stringVowel = prompt("Nhập chuỗi bất kì: ");
let result1 = countVowelCharacters(stringVowel);
document.write(`Chuỗi bạn nhập vào có ${result1} kí tự nguyên âm.`)