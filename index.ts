#! /usr/bin/env node
import inquirer from "inquirer";

const randomnumber = Math.floor(Math.random()* 10 +1);

const answers = await inquirer.prompt([
    {
        name:"UserGuessedNumber",
        type:"number",
        message:"please guess a number between 1-10",
    }
]);
console.log(answers);

if(answers.UserGuessedNumber === randomnumber){
    console.log("congratulation! you guessed right number.");
}
else{
    console.log("you guessed wrong number.");
}

