var readlineSync = require("readline-sync");
const chalk = require('chalk');

let userScore = 0;
let userName = readlineSync.question(chalk.cyan("What is Your Name ? "));
console.log(chalk.blue(`Welcome ${userName}, Let's Play the quiz ! How well You Know Tanay, By Answering 3 right answer you would enter Level 2` ))


function quesAns(ques, ans) {
  if(userScore === 3){
  console.log(chalk.blue.bold("Great, It seems like you know him very well !, You entered Level 2"));
  }
  let userAns = readlineSync.question(ques);
  if (userAns == ans) {
    userScore++;
    console.log(chalk.green("You are right and you score is " + userScore));
  } else {
    console.log(chalk.red("your answer is wrong"));
  }
}

quesAns(" ----------------- \n In Which city he is living currently ? \n a) Hyderabad \n b) Bangalore \n c) Pune \n d) Delhi \n Your Answer :- ", "b");
quesAns(" ----------------- \n From which city he belongs ? \n a) Bangalore \n b) Bokaro \n c) Dhanbad \n d) Ranchi \n Your Answer :- ", "b");
quesAns(" ----------------- \n Where he is working Now ? \n a) Uber \n b) Razor Pay \n c) Paytm \n d) Microsoft \n Your Answer :- ", "d");
quesAns(" ----------------- \n From which college he graduated ? \n a) KIT \n b) NIT \n c) MIT \n d) IIT  \n Your Answer :- ", "c");
quesAns(" ----------------- \n How did he started his career ? \n a) Freelancer \n b) App Developer \n c) Web Developer \n d) Network and Security  \n Your Answer :- ", "d");
quesAns(" ----------------- \n Now, In which technology he is working mostly ? \n a) Reactjs \n b) Vuejs \n c) Angularjs \n d) Nodejs  \n Your Answer :- ", "a");
