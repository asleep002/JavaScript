// //func declaration and defination 

// function sayMyName(){
//     console.log("M")
//     console.log("A")
//     console.log("N")
//     console.log("I")
//     console.log("S")
//     console.log("H")
// }

// sayMyName()//call...refrence...execution//just the name of the numbber is the reference of the function

//arguments are passed to function //parameters are defined during the function defination



//add two numbers
//need not to give type

function addTwoNumber(number1,number2)
{
// console.log(number1+number2)
// return number1+number2
let result=number1+number2
return result

}

const result=addTwoNumber(5,6)

// console.log(result)

function loginUserMessage(username ="sam"){//default value is passed here as sam means if no input is given then it use samm 
    
    if(username== undefined){
        console.log("plz enter your name")
    }
    else
    return `${username} just logged in`
}

// const message=loginUserMessage("Manish Jaryal")
const message=loginUserMessage()//if nothing is passed as the argument

console.log(message)