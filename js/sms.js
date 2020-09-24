//select all elements of interest that have been given ids
const txtSMS = document.getElementById("txtSMS");
const info = document.getElementById("info");

txtSMS.addEventListener("keypress", countChar);

let pageCount;
let charPerPage = 160;
function countChar(){
    let smsCharacters = txtSMS.value;
    //Break the sanitized user input letter into word pieces so that it can be counted one by one.
    smsCharacters = smsCharacters.split("");
    //count the total number of words retrieved using the split() method.
    let numChar = smsCharacters.length;
    if(numChar <= 160){
        pageCount = 1;
        info.innerHTML = `Page count: ${pageCount} (${numChar} / ${charPerPage}) used`;
    }else{
        charPerPage = 153;
        pageCount = parseInt(numChar / charPerPage) + 1;
        
    info.innerHTML = `Page count: ${pageCount} (${numChar} / ${charPerPage * pageCount}) used`;
    }
}