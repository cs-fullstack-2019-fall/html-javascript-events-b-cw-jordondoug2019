//Problem 1
let textel=document.querySelector("#textbox");
let labelId=document.querySelector("#label");

textel.onkeydown=function (e) {
 labelId.textContent="Hello";
 labelId.textContent=e.target.value;
 console.log(e.target.value);
};
let codeCrewString = "Code School is a hands-on class designed to train individuals to be entry-level software developers within a six-month course. The minimum education requirement is at least a high school diploma or GED. Students work in a small classroom setting and use real-word technologies to learn the fundamentals of coding, app development, the leadership, and the life skills needed for a successful career and job market competitiveness."
let index=0;
let newInput="";

//Problem 2
textel.onkeydown=function (e) {
  labelId.textContent=codeCrewString[index];
  newInput=newInput+codeCrewString[index];
  labelId.textContent=newInput;
  // console.log(stringInput);
  console.log(newInput);
  console.log(codeCrewString[index]);
  index++;

 };



