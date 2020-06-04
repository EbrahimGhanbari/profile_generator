const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const questionArray = [ 'What\'s an activity you like doing?',
  'What do you listen to while doing that?', 
  'Which meal is your favourite (eg: dinner, brunch, etc.)',
  'What\'s your favourite thing to eat for that meal?',
  'Which sport is your absolute favourite?'
]
let answerArray = [];
let k = 0;
const max = questionArray.length;

const surveyFunc = () => {rl.question(questionArray[k], (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);
  k++;

  answerArray.push(answer);
  if (k < max){
    surveyFunc();
  } else {
    console.log(answerArray);
  }

}); 
}

surveyFunc();