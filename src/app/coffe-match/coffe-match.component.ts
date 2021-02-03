import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-coffe-match',
  templateUrl: './coffe-match.component.html',
  styleUrls: ['./coffe-match.component.css']
})
export class CoffeMatchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

//   getElementById("form1") {
//     //initialize score variables / values
    
// 	  let profile = 1;
// 	  let coffee = 2;
//     let quiz = 3;
//     let sundog = 4;
	   
// 	  const flavor = document.querySelector('input[name = "flavor"]:checked').value;
// 	  const brew = document.querySelector('input[name = "brew"]:checked').value;
//     const roast = document.querySelector('input[name = "roast"]:checked').value;
    

//     //id score variables
//     let citrus = 1;
//     let cocoa = 2;
//     let herb = 3;
//     let sweet = 4;
//     let maker = 5;
//     let pour = 6;
//     let press = 7;
//     let light = 8;
//     let medium = 9;
//     let dark = 10;

//     calculateScore(){
//     let x = '';
//     if(x == "profile") { profile = profile + 1}
// 	  if(x == "coffee") { coffee = coffee + 1}
//     if(x == "quiz") { quiz = quiz + 1}
//     if(x == "sundog") { sundog = sundog + 1}
//     }
    
//     calculateScore(eval("citrus"));
// 	  calculateScore(eval("cocoa"));
//     calculateScore(eval("herb"));
//     calculateScore(eval("sweet"));
//     calculateScore(eval("maker"));
//     calculateScore(eval("pour"));
//     calculateScore(eval("press"));
//     calculateScore(eval("light"));
//     calculateScore(eval("medium"));
//     calculateScore(eval("dark"));

//     const scoreArray = [citrus, cocoa, herb, sweet, maker, pour, press, light, medium, dark];

//     //get the max score  in the array
//   const finalScore = Math.max.apply(Math,scoreArray);
  
//    //figure out which score is the max score by identifying its index number
// 	for(i=0; i<scoreArray.length; i++) {
//     if(scoreArray[i]==maxscore) {
//     highest = i;
//     }
//     }

//     //object holding scores and coffees	
// const finalScores = [{index:16, feedback: "API url from Firebase"},
// {index:1, feedback: ""},
// {index:2, feedback: ""}];

// //loop to match index to score and reply with feedback
// for(i=0;i<finalScores.length; i++) {
//   if(highest == finalScores[i].index) {
//   document.getElementById("answer4").innerHTML = finalScores[i].feedback;
//   }
//   }

//   return false; // required to not refresh the page; just leave this here
// }// end the submit function



id: number;
coffeeQuiz: FormGroup;

onSelectFlavor(id){
  console.log(this.coffeeQuiz.value);
  //register the number assigned to the id. 
}

onSelectBrew(){
//register id number. Possibly add it to the number from onSelectFlavor?
}

onSelectRoast(){
//register id number. 
}

//Add all 3 numbers together, assign the final sum to a variable

//Then loop through an object that contains the coffees and matching numbers to match it with the
//final number from the quiz

//Display the corresponding image from firebase API





//sally ride graded assignment quiz form with arrays

const brew = [
  {name: 'sunlight', total: 18},
  {name: 'aura', total: 14},
  {name: 'halo', total: 17},
  {name: 'icebow', total: 20},
  {name: 'nimbus', total: 19}
];

const quizQuestions = [
  'What is your favorite flavor profile?',
  'How do you brew your coffee?',
  'How do you like your coffee roasted?'
];
  
const answerSetOne = [
  {name: 'citrusy or fruity', num: 1}, 
  {name: 'roasted or nutty', num: 2}, 
  {name: 'herbal or floral', num: 3}, 
  {name: 'sweet or chocolatey', num: 4}
];

const answerSetTwo = [
  {name: 'coffee maker', num: 5}, 
  {name: 'pourover', num: 6}, 
  {name: 'french press', num: 7}
];

const answerSetThree = [
  {name: 'light', num: 8}, 
  {name: 'medium', num: 9 }, 
  {name: 'dark', num: 10}
];

let response;

let candidateAnswer = 0;

let choosenBrew;

for (let i = 0; i < quizQuestions.length; i++) {
  console.log(quizQuestions[i]);
  response = input.question("Enter your answer: ");
  candidateAnswer += Number(response);
};

for (let brew of brews) {
  if (brew['total'] === candidateAnswer) {
    choosenBrew = brew;
    break;
  }
};

console.log(`Your brew is ${choosenBrew['name']}`);
console.log(`\nYour Answer: ${candidateAnswer}`);
  


}
