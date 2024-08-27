//IIFE
(function chai(){
//named iife
    console.log(`DB Connected`)
})();// here the semi colon is needed bcz it dont know where to end context 

( (name)=>{
    //unnamed iife with parameter
    console.log(`db connected ${name}`)
})('mansih');
//iife  sometime problem occure due to pollution of the global scope  to solve that iife is used 
