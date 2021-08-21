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

const wrongAnswer1 = document.querySelector('#wrongAnswer1');
wrongAnswer1.onclick = function () {
    console.log("wrong answer");
}
const wrongAnswer2 = document.querySelector('#wrongAnswer2');
wrongAnswer2.onclick = function () {
    console.log("wrong answer");
}
const wrongAnswer3 = document.querySelector('#wrongAnswer3');
wrongAnswer3.onclick = function () {
    console.log("wrong answer");
}

const rightAnswer1 = document.querySelector('#rightAnswer1');
rightAnswer1.onclick = function () {
    console.log("right answer");
}



const wrongAnswer4 = document.querySelector('#wrongAnswer4');
wrongAnswer4.onclick = function () {
    console.log("wrong answer");
}
const wrongAnswer5 = document.querySelector('#wrongAnswer5');
wrongAnswer5.onclick = function () {
    console.log("wrong answer");
}
const wrongAnswer6 = document.querySelector('#wrongAnswer6');
wrongAnswer6.onclick = function () {
    console.log("wrong answer");
}
const rightAnswer2 = document.querySelector('#rightAnswer2');
rightAnswer2.onclick = function () {
    console.log("right answer");
}




const submitButton = document.querySelector('#submitAnswers');
submitButton.onclick = function () {
    console.log("You submitted your answers!")
}
