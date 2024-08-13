const marvel_heros=["thor","IronMan","Spider-Man"]
const dc_heros=["superman","flash","batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros)

// const allheros=marvel_heros.concat(dc_heros)
// console.log(allheros)

const all_new_heros=[...marvel_heros,...dc_heros]//insted of the concat operation use this spread operation 
console.log(all_new_heros)

const another_arr=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array=another_arr.flat(Infinity)//makes the multidimentional array into single array...in its parametre the depth till u want to flat the array is given...but u can also use the ifinity insted of it ...nd it will automatically recogiize it  
// console.log(real_another_array);

//how to convert the given data into the array 
// use from method to convert it 
// console.log(Array.isArray("Manish Jaryal"))
// console.log(Array.from("Manish Jaryal"))
// console.log(Array.from({name:"manish"}))//explore this thing 

// making array of the varibles 
let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3))
