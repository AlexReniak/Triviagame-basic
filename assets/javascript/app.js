
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

  // question and answer array
  var questionsArr = {
    questionOne: {
      question: "Alexander the Great was taught by which Greek philosopher?",
      correctAnswer: "Aristotle",
      userInput: ""
    },
    questionTwo: {
      question: "Which country financed Christopher Columbus' 1492 exploration?",
      correctAnswer: "Spain",
      userInput: ""
    },
    questionThree: {
      question: "Jack the Ripper is the name given to an unidentified serial killer that terrorized what city in 1888?",
      correctAnswer: "London",
      userInput: ""
    },
    questionFour: {
      question: "American mobster Al Capone was sentanced to 11 years in prison for what crime?",
      correctAnswer: "Tax evasion",
      userInput: ""
    },
    questionFive: {
      question: "Which explorer was the first credited with circumnavigating the earth?",
      correctAnswer: "Ferdinand Magellan",
      userInput: ""
    },
    questionSix: {
      question: "Who painted the Sistine Chapel?",
      correctAnswer: "Michelangelo",
      userInput: ""
    }
  };



  // store user answers
  // $("#questionone").on("change", function() {
  //   questionsArr.questionOne.userInput = $(this).val()
  // })

  // add questions to html
  $("#question-one-text").text(questionsArr.questionOne.question);

  $("#question-two-text").text(questionsArr.questionTwo.question);

  $("#question-three-text").text(questionsArr.questionThree.question);

  $("#question-four-text").text(questionsArr.questionFour.question);

  $("#question-five-text").text(questionsArr.questionFive.question);

  $("#question-six-text").text(questionsArr.questionSix.question);

  // storing user answers from their input
  $("#questionone").on("change", function() {
    questionsArr.questionOne.userInput = $("input[name='question1']:checked").val();
    console.log(questionsArr.questionOne.userInput);
  })

  $("#questiontwo").on("change", function() {
    questionsArr.questionTwo.userInput = $("input[name='question2']:checked").val();
    console.log(questionsArr.questionTwo.userInput);
  })
  
  $("#questionthree").on("change", function() {
    questionsArr.questionThree.userInput = $("input[name='question3']:checked").val();
    console.log(questionsArr.questionThree.userInput);
  })

  $("#questionfour").on("change", function() {
    questionsArr.questionFour.userInput = $("input[name='question4']:checked").val();
    console.log(questionsArr.questionFour.userInput);
  })

  $("#questionfive").on("change", function() {
    questionsArr.questionFive.userInput = $("input[name='question5']:checked").val();
    console.log(questionsArr.questionFive.userInput)
  })

  $("#questionsix").on("change", function() {
    questionsArr.questionSix.userInput = $("input[name='question6']:checked").val();
    console.log(questionsArr.questionSix.userInput)
  })

  // submit function to be run if time = 0 or user clicks submit button
  // clears timer and checks how many answer are correct and incorrect and then alerts user
  function submit() {
    clearInterval(intervalId);
    if (questionsArr.questionOne.userInput === questionsArr.questionOne.correctAnswer) { 
      correctAnswers++
    }

    else {
      incorrectAnswers++
    }

    if (questionsArr.questionTwo.userInput === questionsArr.questionTwo.correctAnswer) {
      correctAnswers++
    }

    else {
      incorrectAnswers++
    }

    if (questionsArr.questionThree.userInput === questionsArr.questionThree.correctAnswer) {
      correctAnswers++
    }

    else {
      incorrectAnswers++
    }

    if (questionsArr.questionFour.userInput === questionsArr.questionFour.correctAnswer) {
      correctAnswers++
    }

    else {
      incorrectAnswers++
    }

    if (questionsArr.questionFive.userInput === questionsArr.questionFive.correctAnswer) {
      correctAnswers++
    }

    else {
      incorrectAnswers++
    }
    
    if(questionsArr.questionSix.userInput === questionsArr.questionSix.correctAnswer) {
      correctAnswers++
    }

    else {
      incorrectAnswers++
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