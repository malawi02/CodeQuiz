function buildQuiz(){}


function showResults(){}

buildQuiz();


const quizContainer = document.getElementById("quiz");

const resultContainer = document.getElementById("results");

const submitButton = document.getElementById("submit");


submitButton.addEventListener('click',showResults);


const  myQuestions = [
{
  question : "what does HTML stand for?",
  answers : {
  choiceA : "hyper text Markup Language",
  choiceB : "hyperlink and text markup language",
  choiceC : "home tool Markup Language",
  
},
 correctAnswer :"A"
},
{
  question : "What does CSS stand for?",
  answers: {
  choiceA : "Cascading Style Sheet",
  choiceB : "Computer Style Sheet",
  choiceC : "Cacading sheet style",
},
 correctAnswer :"A"
 
},
{
  question : "What does CSS stand for?",
  answers : {
  choiceA : "Cascading Style Sheet",
  choiceB : "Computer Style Sheet",
  choiceC : "Cacading sheet style",
},
  correctAnswer : "A" 
},
{
  question : "What does CSS stand for?",
  answers : {
  choiceA : "Cascading Style Sheet",
  choiceB : "Computer Style Sheet",
  choiceC : "Cacading sheet style",
},
  correctAnswer : "A" 
},  
{
  question : "What does CSS stand for?",
  answers : {
  choiceA : "Cascading Style Sheet",
  choiceB : "Computer Style Sheet",
  choiceC : "Cacading sheet style",
},
  correctAnswer : "A"  
}
];

function buildQuiz(){
  
  const output = [];

  
  myQuestions.forEach(
    (currentQuestion, questionNumber) => {

    
      const answers = [];

    
      for(letter in currentQuestion.answers){

      
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

  
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join('')} </div>`
      );
    }
  );


  quizContainer.innerHTML = output.join('');
}



myQuestions.forEach( (currentQuestion, questionNumber) => {

});



const answers = [];

for(letter in currentQuestion.answers){


  answers.push(
    `<label>
      <input type="radio" name="question${questionNumber}" value="${letter}">
      ${letter} :
      ${currentQuestion.answers[letter]}
    </label>`
  );
}

output.push(
  `<div class="question"> ${currentQuestion.question} </div>
  <div class="answers"> ${answers.join('')} </div>`
);

quizContainer.innerHTML = output.join('');
function showResults(){


  const answerContainers = quizContainer.querySelectorAll('.answers');


  let numCorrect = 0;

  
  myQuestions.forEach( (currentQuestion, questionNumber) => {

  
    const answerContainer = answerContainers[questionNumber];
    const selector = 'input[name=question'+questionNumber+']:checked';
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

  
    if(userAnswer===currentQuestion.correctAnswer){
  
      numCorrect++;

      answerContainers[questionNumber];
    }
    else{
      
      answerContainers[questionNumber];
    }
  });

  resultsContainer.innerHTML = numCorrect + ' out of ' + myQuestions.length;
}


const answerContainers = quizContainer.querySelectorAll('.answers');

let numCorrect = 0;

myQuestions.forEach( (currentQuestion, questionNumber) => {


  const answerContainer = answerContainers[questionNumber];
  const selector = `input[name=question${questionNumber}]:checked`;
  const userAnswer = (answerContainer.querySelector(selector) || {}).value;

 
  if(userAnswer===currentQuestion.correctAnswer){
   
    numCorrect++;

   
    answerContainers[questionNumber].style.color = 'lightgreen';
  }
  
  else{
    
    answerContainers[questionNumber].style.color = 'red';
  }
});

const answerContainer = answerContainers[questionNumber];
const selector = `input[name=question${questionNumber}]:checked`;
const userAnswer = (answerContainer.querySelector(selector) || {}).value;
resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;










