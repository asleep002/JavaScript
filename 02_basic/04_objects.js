const tinderuser =new Object()

tinderuser.id="123abc";
tinderuser.name="manish";
tinderuser.isloggedin=false;

// console.log(tinderuser)

const otheruser={
    email:"manish@yoyo.com",
    //object in object 
    fullName:{
        userfullname:{
            firstName:"Manish",
            lastName:"Jaryal"
        }
        
    }
}

// console.log(otheruser.fullName.userfullname)
//optional chaining ko explore kro 
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// combinig the objects 
const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
// const obj3={obj1,obj2}//this will not merge the object ...but create object in object 

// console.log(obj3)
//right way to merge
const obj3=Object.assign({},obj1,obj2)//just pass the empty bracket in start ...bcz the synntax contain the target and source as the parameter ...else all values goes in 1st parameter

///other way to merge 
const obj4={...obj1,...obj2};
// console.log(obj4);


// object of the array .....bcz mostly the values form data base will come in array format 
const user=[
    {
        username:"Manish Jaryal"
    },
    {
        email:"manishJaryal@yoyo.com"
    },
    {
        number:"123456"
    }

]

user[1].email="hello@mail.com"
// console.log(user[1].email);
// console.log(tinderuser)

//some noice methods to have the keys and values of the user 

// console.log(Object.keys(tinderuser))//give array of  keys 
// console.log(Object.values(tinderuser))
// console.log(Object.entries(tinderuser));//give array of each key value pair 

// console.log(tinderuser.hasOwnProperty('isloggedin'))//check property exist 

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//de-strcture 

//  const course={
//     coursename:"js in hindi",
//     price:"99",
//     courseinstructor:"hitesh"
//  }
//  console.log(course.courseinstructor);
// const {courseinstructor:instructor}=course//destructuing 
// console.log(courseinstructor)
console.log(instructor);


//+++++++++++++++++++++++++++++++++++

// {
//     name:"manish",
//     coursename:"js in hindi",
//     price:"free"
// }

// [
//     {},
//     {},
//     {}
// ]


