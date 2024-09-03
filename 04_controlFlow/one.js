// // if
// const  isLoggedIn=true

// if(isLoggedIn){
//     console.log("hello world!");
    
// }

// //== it check value equal or not 
// // === ..... !== also check the type of value 

// if(2=='2'){
//     console.log("executed")

// }

// if(2=='9'){
//     console.log("done")
// }

// if(2==='2'){
//     console.log("type checked...")
// }


// if(2!=='2'){
//     console.log("type checked...")
// }
// //<,>,<=,>=,==,!=,===,!==

// // if else block 

// const temp=21
// if(temp>30){
//     console.log("high temp");
    
// }
// else{
//     console.log("moderate temp  ");
    
// }

// const score=200

// if(score>100){
//     const power="fly"
//     console.log(`the power is ${power}`);
    
// }

// console.log(`the power is ${power}`);

// const balance=1000

// if(balance<500) console.log("balance is less than 1000");

// if(balance<500);
//  console.log("balance is less than 1000");


//single line mei execute ho rha hai semi-colon zaroori hai 
//way to write above with multiple lines 

// if(balance>500) console.log("balance is more than 1000"),
// console.log("next line ");

    
//if elseif else
// const balance =1000

// if(balance<500){
// console.log("less than 500")
// }
// else if(balance<750){
//     console.log("less than 750");
    
// }
// else{
//     console.log("less than 1200");
    
// }

const userLogin=true;
const debitCard=true;
const loggedinFromGoogle=false
const loggedinFromEmail=true

if(userLogin && debitCard){
    console.log("allow to buy course");
    
}

if(loggedinFromEmail || loggedinFromGoogle){
    console.log("user loggedIn");
    
}



//Nullish Coalescieng operator (??): null undefined -> if null value came in some value it will execute the second one -->handle error 



let val1;

// val1= 5 ?? 10

// val1= null ?? 15

val1=null ?? 10 ?? 15
console.log(val1);

// ternary operator 

//condition ? true : false 
const iceTeaPrice =100
iceTeaPrice>=80? console.log("less tham 80"): console.log("more than 80")
