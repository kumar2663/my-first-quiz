function Quiz(question){
  this.questions=questions;
  this.score=0;
  this.questionIndex=0;
}
Quiz.prototype.getQuestionIndex=function () {
  return this.questions[this.questionIndex];
}
function question(text,choices,answer){
  this.text=text;
  this.choices=choices;
  this.answer=answer;
}
var choice
function save(){
 choice=this.innerHTML;
 this.style.backgroundColor="blue";
}
function end(){
  var gameover="<h1 font-size= 3.5rem;>result</h1><br>";
  gameover+="<h2 id='score'>Your scores:"+score+"</h2>";
  document.querySelector(".body").innerHTML=gameover;
  document.querySelector(".body").style.textAlign="center";
  document.querySelector(".body").style.padding= "100px";
}
var i=0;
var score=0;
var question=[
new question("who is prime minister",["pm","cm","mla","mp"],"pm"),
new question("member of legistlative",["pm","cm","mla","mp"],"mla"),
new question("who is cm",["pm","cm","mla","mp"],"cm"),
new question("who is mp",["pm","cm","mla","mp"],"mp"),
new question("who is vro",["pm","cm","vro","mp"],"vro")];
document.querySelector(".question").innerHTML=question[0].text;
document.querySelector(".choice-1").innerHTML=question[0].choices[0];
document.querySelector(".choice-2").innerHTML=question[0].choices[1];
document.querySelector(".choice-3").innerHTML=question[0].choices[2];
document.querySelector(".choice-4").innerHTML=question[0].choices[3];
document.querySelector(".choice-1").addEventListener("click",save);
document.querySelector(".choice-2").addEventListener("click",save);
document.querySelector(".choice-3").addEventListener("click",save);
document.querySelector(".choice-4").addEventListener("click",save);
document.querySelector(".next").addEventListener("click",function()
{
  document.querySelector(".submitAll").style.display="inline-block";
  if(choice=== question[i].answer){
    score=score+5;
  }
  i=i+1;
  a=i+1;
  document.querySelector(".heading").innerHTML="Question-"+a;
  if(i===5){
    end();
  }
  else {
    for (var j=1; j<=4; j++) {
      document.querySelector(".choice-"+j).style.backgroundColor="#EEEEEE"
    }
    document.querySelector(".btn-"+i).style.backgroundColor="#76EAD7";
    document.querySelector(".question").innerHTML=question[i].text;
    document.querySelector(".choice-1").innerHTML=question[i].choices[0];
    document.querySelector(".choice-2").innerHTML=question[i].choices[1];
    document.querySelector(".choice-3").innerHTML=question[i].choices[2];
    document.querySelector(".choice-4").innerHTML=question[i].choices[3];
  }
});
document.querySelector(".submitAll").addEventListener("click",end);
