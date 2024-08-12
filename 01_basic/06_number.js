const score=100

const balance=new Number(500)
 
// console.log(score);
// console.log(balance);

// console.log(balance.toString().length)
// console.log(balance.toFixed(3))// gives the percision value after the number 

const number=233.36589
// console.log(number.toFixed(2));
// console.log(number.toPrecision(3));//number of digits to show  with round of to the next digits avaliable

const hunderds=1000000
// console.log(hunderds.toLocaleString('en-IN'))
//+++++++++++++++++++++++++ maths +++++++++++++++++

// console.log(Math.abs(-9))
// console.log((Math.random())*10+1)//it give the value bet. 0 to 1 

const min=10
const max=20
//math.random is wraped in floor to get single value bet 01-10;

console.log(Math.floor(Math.random()*(max-min+1))+min)