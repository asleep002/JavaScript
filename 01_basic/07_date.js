
let myDate=new Date()
// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleDateString())
// console.log(typeof myDate)//date is the object type in js 

//let myCreatedDate=new Date(2024,5,25)//month start form 0 in js 
// let myCreatedDate=new Date(2024,5,25,5,3)
let myCreatedDate=new Date("2024-01-14")
// console.log(myCreatedDate.toDateString())

let myTimeStamp = Date.now() // give exact time 
//console.log(myTimeStamp)
//console.log(myCreatedDate.getTime())//time form default date 
//conversion in sec 
// console.log(Math.floor(Date.now()/1000));
let newDate=new Date()
// console.log(newDate.getMonth());
newDate.toLocaleString('default',{
    weekday:"long",
    
})