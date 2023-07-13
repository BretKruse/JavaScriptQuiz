var startButton = document.getElementById("start");
var timerEl = document.getElementById("timer");
startButton.addEventListener("click", countdown);
var question = document.getElementById("question");
var answer1 = document.getElementById("answer1");
var answer2 = document.getElementById("answer2");
var answer3 = document.getElementById("answer3");
var answer4 = document.getElementById("answer4");
var inputEl = document.getElementById('name')
var submitEl = document.getElementById('submit')
var currentQuestion = 1;

// Timer that counts down from 90
function countdown() {
  var timeLeft = 90;

  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function () {
    // As long as the `timeLeft` is greater than 1
    if (timeLeft > 1) {
      // Set the `textContent` of `timerEl` to show the remaining seconds
      timerEl.textContent = timeLeft + " seconds remaining";
      // Decrement `timeLeft` by 1
      timeLeft--;
    } else if (timeLeft === 1) {
      // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
      timerEl.textContent = timeLeft + " second remaining";
      timeLeft--;
    } else {
      // Once `timeLeft` gets to 0, set `timerEl` to an empty string
      timerEl.textContent = "";
      // Use `clearInterval()` to stop the timer
      clearInterval(timeInterval);
      // Call the `displayMessage()` function
      displayMessage();
    }
  }, 1000);
  function question1() {
    question.textContent = "What is Wisconsin's state capitol?";
    answer1.textContent = "Madison";
    answer1.style.display = "block";
    answer2.textContent = "Milwaukee";
    answer2.style.display = "block";
    answer3.textContent = "Green Bay";
    answer3.style.display = "block";
    answer4.textContent = "La Crosse";
    answer4.style.display = "block";
    answer1.addEventListener("click", function () {
      if (currentQuestion === 1) {
        alert("Correct!");
      };
      if (currentQuestion === 2) {
        alert("Incorrect!") && timeLeft - 10;
      };
      if (currentQuestion === 3) {
        alert("Incorrect!");
      };
      currentQuestion = currentQuestion + 1;
      console.log(currentQuestion);
      nextQuestion(currentQuestion);
    });
    answer2.addEventListener("click", function () {
      if (currentQuestion === 1) {
        alert("Incorrect!");
      };
      if (currentQuestion === 2) {
        alert("Incorrect!");
      };
      if (currentQuestion === 3) {
        alert("Incorrect!");
      };
      currentQuestion = currentQuestion + 1;
      console.log(currentQuestion);
      nextQuestion(currentQuestion);
    });
    answer3.addEventListener("click", function () {
      if (currentQuestion === 1) {
        alert("Incorrect!");
      };
      if (currentQuestion === 2) {
        alert("Correct!");
      };
      if (currentQuestion === 3) {
        alert("Incorrect!");
      };
      currentQuestion = currentQuestion + 1;
      console.log(currentQuestion);
      nextQuestion(currentQuestion);
    });
    answer4.addEventListener("click", function () { 
      if (currentQuestion === 1) {
        alert("Incorrect!");
      }
      if (currentQuestion === 2) {
        alert("Incorrect!");
      }
      if (currentQuestion === 3) {
        alert("Correct!");
      }
      currentQuestion = currentQuestion + 1;
      console.log(currentQuestion);
      nextQuestion(currentQuestion);
    });
  };
  function question2() {
    question.textContent = "What is Wisconsin's state bird?";
    answer1.textContent = "Cardinal";
    answer1.style.display = "block";
    answer2.textContent = "Eagle";
    answer2.style.display = "block";
    answer3.textContent = "Robin";
    answer3.style.display = "block";
    answer4.textContent = "Blue Jay";
    answer4.style.display = "block";
  }
  function question3() {
    question.textContent = "What is Wisconsin's state flower?";
    answer1.textContent = "Rose";
    answer1.style.display = "block";
    answer2.textContent = "Daisy";
    answer2.style.display = "block";
    answer3.textContent = "Tulip";
    answer3.style.display = "block";
    answer4.textContent = "Violet";
    answer4.style.display = "block";
  };
  function question4() {
    question.textContent = "What is Wisconsin's state flower?";
    answer1.textContent = "Rose";
    answer1.style.display = "block";
    answer2.textContent = "Daisy";
    answer2.style.display = "block";
    answer3.textContent = "Tulip";
    answer3.style.display = "block";
    answer4.textContent = "Violet";
    answer4.style.display = "block";
  };
  nextQuestion(currentQuestion);

  function nextQuestion(currentQuestion) {
    console.log('nextQuestion');
    //console.log(currentQuestion);
    if (currentQuestion === 1) {
      question1();
    }
    if (currentQuestion === 2) {
      question2();
    }
    if (currentQuestion === 3) {
      question3();
    };
    if (currentQuestion === 4) {
      endQuiz();
    }
  };
  function endQuiz() {
    timerEl.textContent = "";
    question.textContent = "End of quiz!";
    answer1.style.display = "none";
    answer2.style.display = "none";
    answer3.style.display = "none";
    answer4.style.display = "none";
    inputEl.style.display = "block";
    submitEl.style.display = "block";
    clearInterval(timeInterval);
    submitEl.addEventListener("click", function () {
      var score = timeLeft;
      var initials = inputEl.value;
      localStorage.setItem("score", score);
      localStorage.setItem("initials", initials);
    });
  };
};
