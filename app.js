// Template Literals


// let firstName = "Rabeet"
// let LastName = "Sati"

// console.log(`My Name is ${firstName} ${LastName}`)



// Spread Operators


// let FirstArr = ["Rabeet","Sajid"]
// let secondArr = [...FirstArr,"Sati","Sati"]

// // let merging = FirstArr.concat(secondArr)
// console.log(secondArr)
 
// or ye cheez Object m bhi use Hoskti hen

// var stu1 = {
//     name: "Rabeet"
// }

// var stu2 ={
//     ...stu1,
//     school:"Jawan Pakistan",
// }


// let {school} = stu2;
// console.log(school)
// console.log(stu1)



//object Destructuring = Object Se kesy Value HUm lety hen 


// var obj  = {
//     name:"Rabeet",
//     age:20,
//     Profession:"Developer"
// }

// let {name,age,Profession} = obj;
// console.log(name)
// console.log(age)
// console.log(Profession)
// console.log(Profession)

// var age = 50;
// age<20 ? console.log("Chota h bhai") 
// :age<40 ? console.log("darmyana hai")
// :console.log("bara ha Bhai ")


// asyncrones and syncrones


// setTimeout(console.log("no 1"))

// 

// var  name1 ;
// setTimeout(function()  {
//     name1 = "Rabeet"
// }, 1000);

// setInterval(function()  {
//     console.log(name1)
// }, 1000);


// var promise = new Promise(function(resolve,reject){
//     var zinger = "nhi be"
//     if(zinger === "available"){
//         setTimeout(()=>{
//             resolve ("han Khiladya h ")
//         },3000)
//     }else{
//         reject("nhi Khilaya")
//     }
// })

// promise.then(function(data){
//     console.log(data)
// })
// .catch(function(error){
//     console.log(error)
// })

// let arr = function (){
//     console.log('hello world')
// }
// arr()


// let hello = (name,name2) => {
//     console.log(`Hello ${name}  ${name2}`)
// }
// hello("rabeet",'Sati')

// let hello = () =>{
//     console.log(this)
// }
// hello()

// let arr = [{name:'Rabeet',age:20,},{name:'Sajid',age:30,}]

// let filter = arr.filter(function (a){
//     return a.age < 30
// })

// console.log(filter)


// let name  = 'Rabeet'
// let search = 'R'
// if(name.startsWith(search)){
//     document.write(name)
// }


// Array.MAP Function 

// let arr = [2,3,4,5]
// let mul = arr.map(a => a*5)

// console.log(mul)


// let arr = [{Name:'rabeet'},{Name:'Sajid'}]
// let change = arr.map(a => a.Name = 'Sati bhai')

// console.log(change)


// let arr = [2,4,5,666,6555]
// let  b = arr.toString()
// console.log(b, typeof b )

// let c = arr.join("r")
// console.log(c,typeof c)


// delete arr[2]
// console.log(arr.length)

// let compa = (a,b)=>{
//    return a-b
// }


// let arr = [1.2,6,888 ,999,2343,456,23,4,5,6,3,7,8,]
// arr.sort(compa )
// console.log(arr)





































var mobiles = [
    {
        name: "a30",
        ram: "4gb",
        rom: "64gb",
        camera: "50px",
        price: 2000,
        brand: "samsung"
    },
    {
        name: "note10",
        ram: "6gb",
        rom: "128gb",
        camera: "50px",
        price: 4000,
        brand: "samsung"
    },
    {
        name: "s10",
        ram: "3gb",
        rom: "128gb",
        camera: "10px",
        price: 5000,
        brand: "samsung"
    },
    {
        name: "iphone4",
        ram: "4gb",
        rom: "64gb",
        camera: "50px",
        price: 10000,
        brand: "iphone"
    },
    {
        name: "iphone4s",
        ram: "4gb",
        rom: "64gb",
        camera: "50px",
        price: 20000,
        brand: "iphone"
    },
    {
        name: "iphone5",
        ram: "4gb",
        rom: "64gb",
        camera: "50px",
        price: 30000,
        brand: "iphone"
    },
    {
        name: "iphone6",
        ram: "4gb",
        rom: "64gb",
        camera: "50px",
        price: 30000,
        brand: "iphone"
    },
    {
        name: "redminote10",
        ram: "4gb",
        rom: "64gb",
        camera: "50px",
        price: 10000,
        brand: "xiaomi"
    },
    {
        name: "redminote11",
        ram: "4gb",
        rom: "64gb",
        camera: "50px",
        price: 10000,
        brand: "xiaomi"
    },
    {
        name: "redmi10",
        ram: "4gb",
        rom: "64gb",
        camera: "50px",
        price: 10000,
        brand: "xiaomi"
    },
    {
        name: "redmi10pro",
        ram: "4gb",
        rom: "64gb",
        camera: "50px",
        price: 10000,
        brand: "xiaomi"
    },
    {
        name: "a3s",
        ram: "4gb",
        rom: "64gb",
        camera: "50px",
        price: 10000,
        brand: "oppo"
    },
];



// let brands = mobiles.map(x=>x.brand);
// brands = [...new Set(brands)]
// console.log(brands)

// let a = document.getElementById('brandName')
// let b = document.getElementById('mobileName')
// let models;


// function init(){
//     brands.forEach(x=>{
//         a.innerHTML +=`<option value='${x}'>${x}</option>`
//     })
// }
// init()

// function mobilesNo(){
//     models = mobiles.filter(x=>x.brand==a.value).map(x=>x.name)
//     console.log(models);

//     models.forEach(x=>{
//         b.innerHTML += `<option value='${x}'>${x}</option>`
//     }) 
// }

// function getModels(){
//     let getmodelsNo = mobiles.find(x=>a.value==x.brand && b.value == x.name)
//     console.log(getmodelsNo)
// }



// function rendering(){
//     brands.forEach(x=>{
//         a.innerHTML +=`<option value='${x}'>${x}</option>`
//     })
// }
// rendering()

// function onchanging(){
//     models = mobiles.filter(x=> a.value==x.brand).map(x=>x.name)
//     console.log(models)
//     b.innerHTML = ''
//     models.forEach(x=>{
//         b.innerHTML +=`<option value='${x}'>${x}</option>`
//     })
// }

// function finalMobile(){
//     let mobileNo = mobiles.find(x=> x.brand==a.value && x.name==b.value)
//     console.log(mobileNo)
// }
// finalMobile()


// var brands = mobiles.map((x)=>x.brand)
// brands = [...new Set(brands)]
// console.log(brands)

// let a = document.getElementById('brandName')
// let b = document.getElementById('mobileName')
// let modelNo;

// function inside(){
//     brands.forEach((x)=>{
//         a.innerHTML +=`<option value='${x}'>${x}<option>` 
//     })
// }
// inside()


// function modelsNo(){
//     modelNo = mobiles.filter((x)=> a.value==x.brand).map((x)=>x.name)
//     console.log(modelNo)
//     b.innerHTML = ''
//     modelNo.forEach((x)=>{
//         b.innerHTML += `<option value='${x}'>${x}</option>`
//     })

// }

// function model(){
//     var mobileNo = mobiles.find( x => x.brand==a.value && x.name==b.value)
//     console.log(mobileNo)
// }
// model()
    
//     let brands = mobiles.map((x)=>x.brand);
//     brands = [...new Set(brands)];
//     console.log(brands) 

// let b = document.getElementById('brandName')
// var mobile = document.getElementById('mobileName')
// let mobileModels;



// function init(){
//     brands.forEach((x)=>{
//         b.innerHTML += `<option value="${x}">${x}</option>`
//     })
// }
// init()

// function changing(){
//     mobileModels = mobiles.filter((x)=> b.value==x.brand).map((x)=>x.name)
//     console.log(mobileModels)
//     mobile.innerHTML= ""
//     mobileModels.forEach((x)=>{
//         mobile.innerHTML += `<option value='${x}'>${x}</option>`
//     })
// }

// function modelss(){
//     let modelNo = mobiles.find(x => x.brand==b.value && x.name==mobile.value)
//     console.log(modelNo)
// }
// modelss()





















