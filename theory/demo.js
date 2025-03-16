// const data={
//     "name":"Aditya",
//     "age":21,
//     "greet":function(){
//         console.log(`Your name is ${this.name} your age is ${this.age} ` )
//     }
// }
// data.greet();



// (function sam(name){
//     console.log("Hi"+name)

// })("Sameer");

// const greet=(name)=>{

//     return name;

// }

// console.log(greet("sameer"));

// function outer(){
//     let count=0;

//     function inner(){
//         count++;
//         return count;
//     }

//     console.log(inner());
//     console.log(inner());
//     console.log(inner());
//     console.log(inner());
// }

//  outer();

// function hello(name){

//     console.log("hyy "+name)

// }

// function bye(gr,name){
//     gr("Madhav");
//     console.log("byyee "+name)

// }

// bye(hello,"Madhav")



   
// let mypromise=new Promise((res,rej)=>{
    
//     let sucs=false;
//     if(sucs){
//         res("Promise resolved ho gya bhai! ")
//     }
//     else{
//         rej("Promise rejected ho gya bhai! ")
//     }

// })

// mypromise.then((message)=>console.log(message)).catch((error)=>console.log(error))



// function* greet(){
//     yield "Madhav";
//     yield "Priyanshu";
//     yield "Gaurav";
// }

// const run=greet();
// console.log(run.next().value);
// console.log(run.next().value);
// console.log(run.next().value);
// console.log(run.next().value);


// const user1={
//     name:"Sameer",
//     age:21
    
// }

// const user2={
//     name:"Priyanshu",
//     age:20
// }

// function greet(city){
//     console.log(`My name is ${this.name} and my age is ${this.age} my city is ${city}`)
// }

// greet.call(user1,"Patna");
// greet.call(user2,"Khagaria");
// greet.apply(user1,["Patna"]);
// greet.apply(user1,["Khagaraia"]);
// let intro1=greet.bind(user1,"Patna");
// let intro2=greet.bind(user2,"Khagaria");
// intro1();
// intro2();


// (async function(url){
//     const rawdata=await fetch(url);
//     const data=await rawdata.json();
//     console.log(data)
// })("https://jsonplaceholder.typicode.com/posts");
//  let data={name:"Sameer"}
//  let unique=new WeakSet();
//  unique.add(data)
//  console.log(unique);


    //PROTOTYPES

    String.prototype.vowelcount=function (){

        let vc=0;
        for(let i=0; i<this.length;i++){
            
            if(this.charAt(i)=='a' || this.charAt(i)=='e' || this.charAt(i)=='i' ||
            this.charAt(i)=='o' || this.charAt(i)=='u'){
                vc++;

            }
        }
        console.log(`Vowels in this word is: ${vc}`)
        
    }
    
    "sameer".vowelcount();


    let car={
        "carname": "luck charm",
        printdetails: function (){
            console.log(`carname is ${this.carname} and car driver name is ${this.drivername}`)


        }
    }

    let cardriver={
        "drivername":"Shyam",
        
        
    }

    car.__proto__=cardriver;
    car.printdetails();





