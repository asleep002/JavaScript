/*data type in js is categorised in  two ways
 it depend to way they r stored in memory 
1. primitve 2. non premitive 

 primrtive -> they r call by value ->while data is  give to u copy of the data is given ..and all the  changes r made in that copy 
 --> string  ,number ,boolean ,null(empty)  ,undefined  ,symbol,  bigint

non primitive / reference type-> direct memory refrence is given 
-->array, object ,function

JavaScript is a dynamically typed language. Because data type will automatically assigned at the time of compilation or code execution.

if variable is not intilised then its value will be undefined


 */
const score=1000
const num=100.3

let islogedin=false
let temprature=null

//undefined wala point
let userEmail=undefined
let otherEmail
// console.log(userEmail)
// console.log(otherEmail);

const id=Symbol("123")
const otherid=Symbol('123')
// console.log(id==otherid)

//big int used to store big number ...in end add the n
const bigNumber=462485158425891n
console.log(typeof(bigNumber));

// function 
const myfunction=function(){
    console.log("hello world");
    
}




