const readLineSync = require('readline-sync');
const name = readLineSync.question('Welcome to our app. May I know your name?\n');
console.log(`Hello ${name}, let us start the quiz`);

const questionSet = [
  {
    statement: 'How many days do we have in a week?',
    options: {
      a: '1',
      b: '2',
      c: '3',
      d: '7'
    },
    rightAnswer: 'd'
  },
  {
    statement: 'How many days are there in a normal year?',
    options: {
      a: '180',
      b: '360',
      c: '365(not a leap year)',
      d: '366'
    },
    rightAnswer: 'c'
  },
  {
    statement: 'How many colors are there in a rainbow?',
    options: {
      a: '7',
      b: '6',
      c: '5',
      d: '2'
    },
    rightAnswer: 'a'
  },
  {
    statement: 'How many letters are there in the English alphabet?',
    options: {
      a: '18',
      b: '26',
      c: '30',
      d: '21'
    },
    rightAnswer: 'b'
  },
  {
    statement: 'How many sides are there in a triangle?',
    options: {
      a: '3',
      b: '2',
      c: '4',
      d: '5'
    },
    rightAnswer: 'a'
  }
];

const printOnScreen = function (value){
  console.log(value);
}

const startQuiz = (questionSet) => {
  let userScore = 0;
  questionSet.forEach ((question) => { 
      printOnScreen(question.statement);

      Object.keys(question.options).forEach((key) =>{
      console.log(`${key} : ${question.options[key]}`);
      });
      
      let userAnswer = readLineSync.question('Submit answer -');

      if( userAnswer.toLowerCase() === question.rightAnswer) {
        printOnScreen('Correct answer !! \n');
        userScore++;
      } else {
        printOnScreen(`The correct answer is ${question.rightAnswer}`);
      }
  });
  printOnScreen(`Your score is ${userScore} out of ${questionSet.length}`);
}

startQuiz(questionSet);
