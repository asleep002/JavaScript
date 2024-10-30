//  const promiseOne=new Promise(function(resolve,reject){
//     //do an async task
//     //DB call,cryptography,network

//     setTimeout(function(){
//         console.log('async task is compelte')
//          resolve()
//     },1000)
//  });

//  promiseOne.then(function(){
//     console.log("promised consummed");
//  })

//  new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Async task 2");
//         resolve()
//     },1000)
//  }).then(function(){
//     console.log("async2 resolve")
//  })

// const promiseThree=new Promise(function(resolve,reject){
//     //  setTimeout(()=>{
//         resolve({username:"chai",email:"chai@example.com"})
//     //  },1000)
    
// })

// promiseThree.then(function(user){
//     console.log(user)
// })

// const promiseFour=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error=true
//         if(!error){
//             resolve({username:"manish",password:"123"})
//         }
//         else{
//             reject("ERROR Something went wrong")
//         } 
            
    
//     },1000)
// })   

// promiseFour
// .then((user)=>{
//     console.log(user)
//     return user.username

// })
// .then((username)=>{
// console.log(username)
// })
// .catch(function(error){
//     console.log(error)
// })
// .finally(()=>{
//     console.log("promise is completed");
    
// })

//  const promiseFive=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let error=true
//                 if(!error){
//                     resolve({username:"javaScript",password:"123"})
//                 }
//                 else{
//                     reject("ERROR JS went wrong")
//                 } 
                    
//     },1000)
//  })

//  async function consumePromiseFive() {
//    try{
     
//     const response=await promiseFive
//     console.log(response);

//    }catch(error){
//     console.log(error)
//    }
//  }

//  consumePromiseFive()

//  async function getAllusers() {
//     try{
//         const response=await fetch('https://jsonplaceholder.typicode.com/user')
//         // console.log(response)
//     const data= await response.json()
//     console.log(data);
    
//     }catch(error){ 
//         console.log("E:",error)
//     }
//  }
//  getAllusers()

fetch('https://api.github.com/users/hiteshchoudhary').then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data)
}).catch((error)=>{
    console.log(error)
})