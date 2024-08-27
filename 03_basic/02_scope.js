// var c=400;
if(true){
    let a=10;
    const b=20;
    // var c=30;
}
// console.log(a);
// console.log(b);
// console.log(c);//this var variable will give no error 

//global scope in node nd in window


function one(){
    const username="Manish Jarayal"

    function two(){
        const website="Youtube"
        console.log(username)
    }
    // console.log(website)//cant' be accessed
    two()
}

one()
// clouser....?


// +++++++++++++++intersting+++++++++++++++++++
console.log(addone(5));

function addone(num){
    return num+1;

}


// console.log(addone(6))
// console.log(addTWo(2));//this type of function can't be declared 
const addTWo=function(num){
    return num+2
}

