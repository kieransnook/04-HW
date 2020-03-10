//defined vars

var currentQ = 0;
var score = 0;
var c = 70;
var totalQ = questions.length;



var myTimer = setInterval(myClock, 1000);



//Questions
        
        

//Stopwatch
var myTimer;
        function clock() {
                myTimer = setInterval(myClock, 1000);
function myClock() {
        document.getElementById("timer").innerHTML = c--;
        if (c == 0) {
        clearInterval(myTimer);
        }
}
}


