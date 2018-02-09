## Explain how hoisting allows the printGreeting function to be called before where it's actually written in the file.

printGreeting();

function printGreeting() {
  console.log("isn't JavaScript wonderful?");
}

## Answer
 With functions you can call them before the function is actually written, because the computer reads through the file first and using the keyword function anticipates that the printGreeting function will be in your code, so it sets a placeholder for it before anything is ever run. 

## Explain why this function called printGoodbye can't be executed until after it's actually written in the file.

printGoodbye(); // this one won't execute!

const printGreeting = () => {
  console.log("That's all, folks!");
}

printGoodbye();

## Answer
Since there is no function defining printGoodbye, when it is read during the compile stage there is no placeholder designated for the function. 