
// document.ready for page to load before user can start
// set variables
// define function for running, time going down and stopping
// on click so user can start and also manually stop timer


$(document).ready(function() {

  // variables
  var intervalId;
  //var clockRunning = false;
  var time = 10; 

  // Timer run function
  function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
    //clockRunning = true;
  }

  // submit function to be run if time = 0 or user clicks submit button
  function submit(){
    clearInterval(intervalId);
    //clockRunning = false;
  }


  // Losing time! (decrease timer)
  // add timer to html
  function decrement() {
    time--
    
    $("#timer").html("<h2>" + "Time remaining: " + time + "</h2>");
    
    // if function for timer when it reaches zero (before submit button is clicked)
    if (time === 0 ) {
      alert("Time's up!");
      submit();
    }
  }
  
  // start timer when start button is clicked
  $("#start-timer").on("click", run) 
  console.log(time);
  
  // if user submits before time is over, stop time and run submit function
  $("#submit-quiz").on("click", submit);  

})