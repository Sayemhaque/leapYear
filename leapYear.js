const year = prompt("please! Enter a year");
const textId = document.getElementById("textid");
const leapYear = year % 4;
if(leapYear == 0 ){
    textId.textContent =  year + " is a Leapyear";
}else{
    textId.textContent =  year + " is Not a Leapyear";
}
// console.log(year);