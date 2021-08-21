//FOCUS ON QUESTION 1
//Create spongebob fact and answer choices
//give all incorrect answers the same class name
//give all correct answers the same class name
//make all incorrect answers equal zero points
//make the one correct answer equal 50 points




// let playerAnswer;
// const wrongAnswer = 0;
// const rightAnswer = 50;
//const userWins = the final total after all points are calculated in the end

// console.log(wrongAnswer);
// console.log(rightAnswer);

const wrongAnswer = document.querySelector('.wrongAnswer');
wrongAnswer.onclick = function () {
    console.log("wrong answer");
}
const rightAnswer = document.querySelector('.rightAnswer');
rightAnswer.onclick = function () {
    console.log("right answer");
}

const submitButton = document.querySelector('#submitAnswers');
submitButton.onclick = function () {
    console.log("You submitted your answers!")
}