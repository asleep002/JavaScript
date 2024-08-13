// Arrays 
// in js array  can be of mix type need not to be same type of elements 
// array in js is resizable 
//array name will print the whole array elements
const myArr=[0,1,2,3,4,5]
const myHeros=["Iron Man","captain"]
const myarr2=new Array(1,2,3,4)


// Array Methods 
// myArr.push(6)
// myArr.push(7)//add new element
// myArr.pop()//remove last element

myArr.unshift(9)// Add elment in the Starting of array
// console.log( myArr)
myArr.shift()//remove first element of the array 
// console.log(myArr)

// Array Functions
// console.log(myArr.includes(7))
// console.log(myArr.indexOf(3))

const newArr=myArr.join()//convert the array elements into Sting
// console.log(myArr)
// console.log(typeof newArr)
console.log(newArr);

const myn1=myArr.slice(1,3)
console.log(myn1)
console.log("b",myArr)

const myn2=myArr.splice(1,3)
console.log(myn2)
console.log(myArr)



