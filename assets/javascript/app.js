
// document.ready for page to load before user can start
// set variables
// define function for running, time going down and stopping
// on click so user can start and also manually stop timer
// on submit, answers are calculated and score is shown


  // variables
  var intervalId;
  //var clockRunning = false;
  var time = 10; 
  var correctAnswers = 0;
  var incorrectAnswers = 0
  var totalQuestions = 6

  // answer array
  var answers = ["first answer", "second answer", "third answer", "fourth answer", "fifth answer", "sixth answer" ]
  

  // quiz questions
  // var questions = [
  // {
  //   question: "XYZ",
  //   choices: ["ans1", "ans2", "ans3", "ans4"],
  //   correctAnswer: [1]
  // },
  // {
  //   question: "ABC",
  //   choices: ["ans1", "ans2", "ans3", "ans4"],
  //   correctAnswer: [0],
  // },
  // {
  //   question: "DEF",
  //   choices: ["ans1", "ans2", "ans3", "ans4"],
  //   correctAnswer: [3],
  // },
  // {
  //   question: "GHI",
  //   choices: ["ans1", "ans2", "ans3", "ans4"],
  //   correctAnswer: [1],
  // },
  // {
  //   question: "JKL",
  //   choices: ["ans1", "ans2", "ans3", "ans4"],
  //   correctAnswer: [2],
  // },
  // {
  //   question: "MNO",
  //   choices: ["ans1", "ans2", "ans3", "ans4"],
  //   correctAnswer: [1]
  // }
  // ]



  // Timer run function
  function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);

  }

  // submit function to be run if time = 0 or user clicks submit button
  function submit() {
    clearInterval(intervalId);
    alert("You answered " + correctAnswers + " out of " + totalQuestions + "correctly")
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

  if ($("Q1answer1" === answers[0] )) {
    correctAnswers++
  }

  else {
    incorrectAnswers++
  }
