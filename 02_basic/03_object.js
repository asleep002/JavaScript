//singlton :-> explore it ....created when object is created with constructor 

//object literals->key value pair 

const mysym=Symbol("key1")

const Juser={
    name:"manish",
    age:22,
    "Full name":"Manish Jaryal",
//    mysym:"key1",//not correct way to use symbol as the key 
    [mysym]:"key1",//syntax to use symbol as the key in object 
    location:"punjab",
    email:"manish@outlook.com",
    isLoggedIn:false,
    lastLogedinDays:['monday','tuesday']
}

// console.log(Juser.email)
// console.log(Juser["email"])
// console.log(Juser["Full name"])//its used bcz sometimes time there is the space bet the key int so..u can't use the dot to excess the value 
// console.log( Juser[mysym])

Juser.email="Manish@mj.com"
Juser["email"]="xyz@gamiil.com"
// console.log(Juser["email"])
// Object.freeze(Juser)//using freez method u cannot change the value in object 
Juser["email"]="manishjaryal51@gamiil.com" 
// console.log(Juser)//in this it will show key1 as the symbol

//function in js

Juser.greeting=function(){
    console.log("hello ...kya haal chal ")
}
// console.log(Juser.greeting)
// console.log(Juser.greeting())

Juser.greetingtwo = function(){
console.log(`hello js user, ${this.name}`)

}

console.log(Juser.greetingtwo())


function hello_one(a,b){
return a*b
}

console.log(hello_one(10,20))