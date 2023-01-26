const flashcard = document.querySelector(".flashcard");
const question = document.querySelector(".flashcard-question")
const answer = document.querySelector(".flashcard-answer");
let curCard = 0;
const listOfCardQuestions = [];
const listOfCardAnswers = [];
listOfCardQuestions.push("No Flashcards exist at this time");
listOfCardAnswers.push("Add some using the \"Add Flashcard\" tool below!");

flashcard.addEventListener("click", () => {
  if (answer.style.display === "none") {
    answer.style.display = "block";
    question.style.display = "none";
  } else {
    answer.style.display = "none";
    question.style.display = "block";
  }
});

function getNext() {
    //console.log("getNext");
    curCard++;
    if (curCard >= listOfCardQuestions.length) {
        curCard = 1;
    }
    if (listOfCardAnswers.length == 1) {
      curCard = 0;
    }
   // console.log("curCard: " + curCard);
    question.innerHTML = "";
    answer.innerHTML = "";
    question.innerHTML += listOfCardQuestions[curCard];
    answer.innerHTML += listOfCardAnswers[curCard];
    answer.style.display = "none";  //answer side not visible
    question.style.display = "block"; //start on the question side
}

function addFlashcard() {
    let newQuestion = document.getElementById("questionInput").value;
    let newAnswer = document.getElementById("answerInput").value;
    console.log("new: " + newQuestion + ", " + newAnswer);
    if (newQuestion == "" || newAnswer == "") {
        console.error("Invalid card!");
    } else {
    listOfCardAnswers.push(newAnswer);
    listOfCardQuestions.push(newQuestion);
    document.forms['newAddition'].reset();
    }
}

function removeFlashcard() {
  listOfCardAnswers.splice(curCard, 1);
  listOfCardQuestions.splice(curCard, 1);
  if (listOfCardAnswers.length == 1) {
    curCard = 0;
  }
}

function checkOtherSide() {
  let response = document.getElementById("response").value;
  if (answer.style.display === "none") {
    if (response == listOfCardAnswers[curCard]) {
      document.querySelector(".responseResponse").innerHTML = "Correct!";
    } else {
      document.querySelector(".responseResponse").innerHTML = "Not quite";
    }
  } else {
    if (response == listOfCardQuestions[curCard]) {
      document.querySelector(".responseResponse").innerHTML = "Correct!";
    } else {
      document.querySelector(".responseResponse").innerHTML = "Not quite";
    }
  }
  document.forms['guess'].reset();
}