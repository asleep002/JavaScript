// const name="Manish"
// const repoCount=50
// // to concadente the stings don't use these kinda thing ...these r old nd outdated
// // console.log(name+repoCount+"  hello World!") 

// // console.log(`hello my name is ${name} and my repo count is ${repoCount} `);
// // use back ticks insted ... in those backticks is u want to add varible the use ${}
// //this will also produce same output but the more readable
// // it is known as string interpolation

// // way to declare string use new keyword a object is crearted 
// // string contain many methods 

//  const gameName=new String("Manish-MJ-")

// // console.log(gameName[0]);

// // console.log(gameName.__proto__);

// // console.log(gameName.length);

// // console.log(gameName.toUpperCase);

// // console.log(gameName.charAt(2));

// // console.log(gameName.indexOf('h'))

// // const newstring = gameName.substring(0,4)

// // const anotherString=gameName.slice(-8,4)

// const newStingone="     Manish    "
// console.log(newStingone)
// console.log(newStingone.trim())

// const url="https://manish.com/manish%20jaryal"//changing in url


// url.replace('%20',"-")


// console.log(gameName.split('-'))



const string=new String("hello")

const string2=`world`

// console.log(string2)

// console.log(string2.charAt(2))

// console.log(string.length);//no of characters 

// console.log(string.charCodeAt(0));//utf-18 charcter of the index element 

// concat() retun the conncadimation of two string 
// console.log(string.concat(" ",string2))

const string3=string.concat(" ",string2)

// console.log(string3);

const string4="my name is manish jaryal! "

// console.log(string4.endsWith("yal! "))

//console.log(string4.includes("manish"))// search wether it contain serch string 

// console.log(string4.indexOf('m'))//give first index 


console.log(string4.isWellFormed());















