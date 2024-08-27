const user={
    username:"manish jaryal",
    price:"999",

    
    welcomeMessage: function(){
        console.log(`hello ${this.username}`)///this keyword is used to reffer to the current context 
        console.log(this)
    }

}
// user.welcomeMessage()
//  user.username="Mandeep singh"
 
//  user.welcomeMessage()

//  console.log(this)// THIS WILL RETURN THE EMPTY  {}  BCZ NO GLOBAL OBJECT  BUT WHEN ACCESED IN WINDOW THIS WILL RETUTN THE WINDWO 

// function one(){
//     let username="manish"
//     // console.log(this)//when this in function it will give multiple values 
//     // console.log(this.username)//this in the function will give the undefined value ...it work ok in the object 

// }
// one( )

//function declaration using arrow function

// const chai=()=>{
//     let username="manish"
//     // console.log(this.username)//we also can't use this keyword in the arrow function 
//     console.log(this)// while we console log  this in arrow function it will print empty bracket 

// }
//  chai()
// const addtwo =(num1,num2) => {
//     return num1+num2;

// }
// console.log(addtwo(10,30))

//using arrow as implicit return 

// const adddtwo=(num1,num2) => (num1+num2)//no need curly bracket are no used here 

//return the obeject -> using the arrow function ...but in this case we to use the curly braces in the normal bracket ...else it return the undefined 

const object_wapasi=()=>({username:"manish Jaryal"})


console.log(object_wapasi())