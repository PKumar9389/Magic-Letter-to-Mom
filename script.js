const heading1 = "To my Dear Inspiration";
const head = document.getElementById("heading");
let start = 0;
function headingtext() {
    head.innerText=heading1.slice(0,start);
    start++;


}
setInterval(headingtext, 100);


const heading2 = "Dear Mom 💓";
const head2 = document.getElementById("texthead");
let start2 = 0;
function headingtext2() {
    head2.innerText=heading2.slice(0,start2);
    start2++;


}
setInterval(headingtext2, 500);


const heading3 = `The Earth must have done some noble deeds; that is why you are born as a human here and not in the ocean among the fishes and not in the sky among the birds. I wonder if you know how special you are; I wonder if you know how lucky I am to have you in my life. I LOVE YOU SOO MUCH. Some peoplesay happiness is life. Others say it's freedom and some say it's money. But happiness for me is just having the opportunity to know you!!`;
const head3 = document.getElementById("full-letter");
let start3 = 0;
function headingtext3() {
    head3.innerText=heading3.slice(0,start3);
    start3++;


}
setInterval(headingtext3, 80);