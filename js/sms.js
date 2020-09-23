//select all elements of interest that have been given ids
const txtLetter = document.getElementById("txtLetter");
const txtResult = document.getElementById("txtResult");
txtLetter.addEventListener("keypress", countWords);
function countWords(){
    let letter = txtLetter.value;
    //Sanitize user input by taking away multiple white spaces and replacing them with a single space.
    letter.replace(/\s+/g, " ");
    //Break the sanitized user input letter into word pieces so that it can be counted one by one.
    let wordpieces = letter.split("");
    //count the total number of words retrieved using the split() method.
    let numOfWords = wordpieces.length;
    let numOfWordsRemaining = 160 - numOfWords;
    if(numOfWords>= 0 && numOfWords <= 160){
        //update the txtResult value so that the user can get some feedback
        txtResult.value = `Page 1, ${numOfWordsRemaining} letters remaining`;
    } if(numOfWords > 160 && numOfWords <=320) {
        numOfWordsRemaining = 320 - numOfWords;
        txtResult.value = `Page 2, ${numOfWordsRemaining} letters remaining`;
    } if(numOfWords > 320 && numOfWords <=480) {
        numOfWordsRemaining = 480 - numOfWords;
        txtResult.value = `Page 3, ${numOfWordsRemaining} letters remaining`;
    } if(numOfWords > 480 && numOfWords <=640) {
        numOfWordsRemaining = 640 - numOfWords;
        txtResult.value = `Page 4, ${numOfWordsRemaining} letters remaining`;
    } if(numOfWords > 640 && numOfWords <=800) {
        numOfWordsRemaining = 800 - numOfWords;
        txtResult.value = `Page 5, ${numOfWordsRemaining} letters remaining`;
    } if(numOfWords > 800){
        txtResult.style.backgroundColor = "crimson";
        txtResult.style.color = "#eee";
        txtResult.value = `Sorry,you have exceeded maximum number of words allowed!,\n\nClear some inputs or your message won't be sent`;
    }
}