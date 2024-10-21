const coding=["java","cpp","javascript","python"]

// coding.forEach(function (item,index,arr){
//     console.log(`item: ${item}, index: ${index}, arr: ${arr}`)
// })

// coding.forEach((item,index,arr)=>{
//     console.log(`item: ${item}, index: ${index}, arr: ${arr}`)
// })

const person={

    userName:"Manish Jaryal",
    id:"mj002",
    country:"India"
}
Object.entries(person).forEach((item)=>{
    console.log(item)
})