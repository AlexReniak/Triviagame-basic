
// document.ready for page to load before user can start
// set variables
// define function for running, time going down and stopping
// on click so user can start and also manually stop timer
// on submit, answers are calculated and score is shown


  // variables
  var intervalId;
  var time = 20; 
  var correctAnswers = 0;
  var incorrectAnswers = 0;
  var totalQuestions = 6;

  // question, answer and user answer array
  var questionsArr = [{
      question: "Alexander the Great was taught by which Greek philosopher?",
      correctAnswer: "Aristotle",
      userInput: ""
    },
    {
      question: "Which country financed Christopher Columbus' 1492 exploration?",
      correctAnswer: "Spain",
      userInput: ""
    },
    {
      question: "Jack the Ripper is the name given to an unidentified serial killer that terrorized what city in 1888?",
      correctAnswer: "London",
      userInput: ""
    },
    {
      question: "American mobster Al Capone was sentanced to 11 years in prison for what crime?",
      correctAnswer: "Tax evasion",
      userInput: ""
    },
    {
      question: "Which explorer was the first credited with circumnavigating the earth?",
      correctAnswer: "Ferdinand Magellan",
      userInput: ""
    },
    {
      question: "Who painted the Sistine Chapel?",
      correctAnswer: "Michelangelo",
      userInput: ""
    }
  ]

  console.log(questionsArr[0].correctAnswer);
  console.log(questionsArr[1].correctAnswer);
  console.log(questionsArr[2].correctAnswer);
  console.log(questionsArr[3].correctAnswer);
  console.log(questionsArr[4].correctAnswer);
  console.log(questionsArr[5].correctAnswer);


  // store user answers
  // $("#questionone").on("change", function() {
  //   questionsArr.questionOne.userInput = $(this).val()
  // })

  // add questions to html
  $("#question-one-text").text(questionsArr[0].question);

  $("#question-two-text").text(questionsArr[1].question);

  $("#question-three-text").text(questionsArr[2].question);

  $("#question-four-text").text(questionsArr[3].question);

  $("#question-five-text").text(questionsArr[4].question);

  $("#question-six-text").text(questionsArr[5].question);

  // storing user answers from their input
  $("#questionone").on("change", function() {
    questionsArr[0].userInput = $("input[name='question1']:checked").val();
    console.log(questionsArr[0].userInput);
  })

  $("#questiontwo").on("change", function() {
    questionsArr[1].userInput = $("input[name='question2']:checked").val();
    console.log(questionsArr[1].userInput);
  })
  
  $("#questionthree").on("change", function() {
    questionsArr[2].userInput = $("input[name='question3']:checked").val();
    console.log(questionsArr[2].userInput);
  })

  $("#questionfour").on("change", function() {
    questionsArr[3].userInput = $("input[name='question4']:checked").val();
    console.log(questionsArr[3].userInput);
  })

  $("#questionfive").on("change", function() {
    questionsArr[4].userInput = $("input[name='question5']:checked").val();
    console.log(questionsArr[4].userInput)
  })

  $("#questionsix").on("change", function() {
    questionsArr[5].userInput = $("input[name='question6']:checked").val();
    console.log(questionsArr[5].userInput)
  })

  // submit function to be run if time = 0 or user clicks submit button
  // clears timer and checks how many answer are correct and incorrect and then alerts user
  function submit() {
    clearInterval(intervalId);

    for (var i=0; i < 6; i++) {
      if (questionsArr[i].correctAnswer === questionsArr[i].userInput) {
        correctAnswers++
      }

      else {
        incorrectAnswers++
      }
    }

    alert("You answered " + correctAnswers + " questions correctly and " + incorrectAnswers + " questions incorrectly");
  }

  // document.ready so page loads before js is accessable
  $(document).ready(function() {

    // Timer run function
    function run() {
      clearInterval(intervalId);
      intervalId = setInterval(decrement, 1000);
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
    $("#submit-quiz").on("click", submit)

  })  