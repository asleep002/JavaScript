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

//rest and spread operator

// in this rest parameter is passed to the function ...in case u r getting then multiple values nd u don't know much more r to come then we use this ...it will return the value in the array format 

function calculateCartPrice(...num1){
    return num1;

}

const user={
    username:"some_user",
    price:6000
}

function handleObject(anyobject){
    // console.log(`username is ${anyobject.username} and the price is ${anyobject.price}`)
return  `username is ${anyobject.username} and the price is ${anyobject.price}`

}

console.log(handleObject(user));

console.log(handleObject({
    username:"another_user",
    price:1900
    
}));

//array passed in the array 

const newArray=[222,300,500,600]
function returnSecondValue(getArray){
    return getArray[1];

}

console.log(returnSecondValue(newArray));


