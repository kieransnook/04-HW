//defined vars

var currentQ = 0;
var score = 0;
var c = 70;
var questionEl = document.getElementById("question");
var ans1 = document.getElementById("ans1");
var ans2 = document.getElementById("ans2");
var ans3 = document.getElementById("ans3");
var ans4 = document.getElementById("ans4");
var questionIndex = 0;
var nextBtn = document.getElementById("next");
var startBtn = document.getElementById("start");
var subBtn = document.getElementById("submit");
var result = document.getElementById("result");

var totquestions = questions.length;

function loadquestion() {
  document.getElementById("start").disabled = true;
  // var qI = questions

  questionEl.textContent = questions[questionIndex].question;
  ans1.textContent = questions[questionIndex].ans1;
  ans2.textContent = questions[questionIndex].ans2;
  ans3.textContent = questions[questionIndex].ans3;
  ans4.textContent = questions[questionIndex].ans4;
}

function nextButtonClick()
{
  //check answer
  var userChoice = document.querySelector(
    "input[type=radio]:checked"
  );
  if (!userChoice) {
    alert("Please select answer.");
    return;
  }
  var answer = userChoice.value;
  if (questions[currentQ].correctans === answer) {
    alert("congrats you got it right!");
  } else {
      userChoice.checked = false;
      c -= 15;
  }


questionIndex++;
if (questionIndex === totquestions)
{
  
 alert("Your score is " + c)

  //disable next button
  //record score
  //enable finish button
}
else {
  loadquestion();
}


return;

}


// function loadNextQuestion(){
//   var userChoice = document.querySelector('input[type=radio]:checked');
//   if(!userChoice){
//       alert("Please select answer.");
//       return;
//   }
//       var answer = userChoice.value;
//  if(questions[currentQ].answer === answer){
//     score += 1;
//  }}
// function loadNextQuestion(){
// questionEl.textContent = questions[questionIndex+1].question;
//   ans1.textContent = questions[questionIndex+1].ans1;
//   ans2.textContent = questions[questionIndex+1].ans2;
//   ans3.textContent = questions[questionIndex+1].ans3;
//   ans4.textContent = questions[questionIndex+1].ans4;
// };
// function loadNextQuestion(){
// questionEl.textContent = questions[questionIndex+2].question;
//     ans1.textContent = questions[questionIndex+2].ans1;
//     ans2.textContent = questions[questionIndex+2].ans2;
//     ans3.textContent = questions[questionIndex+2].ans3;
//     ans4.textContent = questions[questionIndex+2].ans4;
//   };
// function loadNextQuestion(){
// questionEl.textContent = questions[questionIndex+3].question;
//       ans1.textContent = questions[questionIndex+3].ans1;
//       ans2.textContent = questions[questionIndex+3].ans2;
//       ans3.textContent = questions[questionIndex+3].ans3;
//       ans4.textContent = questions[questionIndex+3].ans4;
//     };
// function loadNextQuestion(){
//   questionEl.textContent = questions[questionIndex+4].question;
//     ans1.textContent = questions[questionIndex+4].ans1;
//     ans2.textContent = questions[questionIndex+4].ans2;
//     ans3.textContent = questions[questionIndex+4].ans3;
//     ans4.textContent = questions[questionIndex+4].ans4;
//   };

//Stopwatch

function clock() {
  var myTimer = setInterval(myClock, 1000);
  function myClock() {
    document.getElementById("timer").innerHTML = c--;
    if (c == 0) {
      clearInterval(myTimer);
    }
  }
}
