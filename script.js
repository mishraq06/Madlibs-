let word = "warrior"; 
let number = 9000; 
let calculatedNumber = number * 2; 
let isStrong = true; 
let userInput = prompt("Enter your favorite Dragon Ball Z character"); 
let story = `In a world of epic battles, a powerful ${word} named ${userInput} possessed an incredible power level of ${number}. After intense training, ${userInput}'s power level increased to ${calculatedNumber}! This made ${userInput} very ${isStrong ? "strong" : "weak"}.`;
let sentence = story;
document.write(sentence);
console.log(sentence);