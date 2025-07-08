// //---Let
// let num = 10;
// function number(num1){
//     var num1 =25;
//     console.log(num1);
//     console.log(num);

const { Title } = require("react-native-paper");

// }

// let num0 =20;
// if (num0 < 22){
//     let greet = "Hello";
//     console.log(greet);
//     greet = "World" ; //can't delcare but can replace the value
//     console.log(greet);
// }
// console.log(greet);

// //--Const
//  const num2 = 10;
//  if (num2 < 11){
//     const greet="hello";
//     console.log(greet);

//     const num = 15;
//     console.log(num2);
//  }

//  console.log(num2);

//  //-------Template Literals(ES6)

//  //------Concatenation
//  let name = "imesh";
//  let age = "23";

//  let desc = "My name is "+name+"and my age is "+age;
//  console.log(desc);
 
//  //-------Template Literals

//  let fname = "chamara";
//  let lname = "Fernando";

//  let fullname = `My first name is ${fname} and my last name is ${lname}`;
// console.log(fullname);



// function myNAme(name){
//     return `My name is ${name.toUpperCase()}`;

// }
// console.log(myNAme('Nimal Silva'));


// //---------Rest Parameter(ES6)

// //the rest parameter syntax allows a function to accept an indefinite number of arguments as an array

// //----arguments Object

// function mySalaries(sal){
//     console.log(arguments);

// }
// mySalaries(1000,2000,3000,4000);

// //---rest
// function myMarks(...marks){
//     console.log(marks);
// }
// myMarks(60,50,88,77,81);



// //------Spread Operator(ES6)
// //Allows us to spread elements.Used with arrays,string,objects to split the content.

// let a = [1,2,3,4,5];
// let b = [6,7,8,9];

// let c =[...a, ...b];
// console.log(c);
// console.log(...c);

 
// let subject = {
//     maths :80,
//     science :66

// }
// let personal = {
//     name : "Dasun",
//     age : 24,
//     ...subject
// }


// console.log(subject);
// console.log(personal);

// //----------------
// const numbers = [1,2,3];
// function sum(a,b,c){
//     return a+b+c;
// }

// console.log(sum(...numbers));


// //-------Default parameters (ES6)
// function getYear(currentYear, years =40){
//     return currentYear+ years;
// }

// console.log(getYear(2021,45));

// console.log(getYear(2021));

// //-----------------
// function multiply(num1,num2 =5, num3 =6){
//     return(num*num2)+num3
// }

// console.log(multiply(10));
// console.log(multiply(10,10)); //num2 =5 is replace to 10

// const bDay = function(name,birtYear = new Date()){ //new Date is gives current date 
//     console.log(`${name} has born in ${birthYear.getFullYear()}`);
// }

// bDay('Nirmal',new Date('1996-03-05'));
// bDay('Prasad');

//for loop

// const cities =["Moratuwa","Nugegoda","Welisara","Biyagama"];

// for(let x = 0; x< cities.length;x++){
//     console.log(cities[x]);
// }

// //for of
// const subjects =["Maths","Science","Sinhala","History","Music"];
// for(let Y of subjects){
//     console.log(y);
// }

// //-------------
// const name = ["Lahiru","Kasun","Janith","Sanduni","Masha"];
// for(let k of names.entries()){ //Get each element as an entry with the index
//     console.log(k);

// }

// const subject = "Science";
// for(let s of subject){
//     console.log(s);
// }

//------Symbols(ES6)
//In the past Js had 5 primitive types(Number,String,Boolean,Null,Underfined).
// In ES6 new primitive type has introduced called symbols.They are takens that may be used as unique ids.

// const sym1 = Symbol();
// console.log(typeof(sym1));

// let fname = Symbol("fname");
// let lname = Symbol("lname");

// console.log(fname === lname);
// console.log(fname);
// console.log(lname);

// console.log(fname.toString());

//-- arrow functions (ES6)
//Expression that provides a shorthand for declaring anonymous functions.
// An anonymous function is a function without a nama.An anonymous function is often not accessible after its initial creation

//------function Declaration 
// function myAge(age){
//     console.log(`My age is ${age}`);
// }

// myName("Dasun");



// //---------Arrow Functions

// const subject = ()=> console.log("Maths");
// subject();
// //----------------

// const sum =(a,b) => a+b;
// console.log(sum(5,10));

// //--------------

// const city = (city) => {
//     let out = `My city is ${city}`
//     return out;
// }

// console.log(city("Moratuwa"));

// //---------------
// setTimeout(function(){
//     console.log("Hello...");
// },5000); // 5000 is delay time to run the programm

// setTimeout(() => console.log("Hello..."),5000);

//-------------------
// const fact = function(n){
//     let f = 1;
//     for(let i = n;i >1;i--){
//         f*=i;
//     }
//     return f;
// }
// console.log(fact(5));

// //-----------
// const factA =(n) =>{
//     let f = 1;
//     for(let i= n;i >1;i--){
//         f*=i;
//     }
//     return f;
// }
// console.log(factA(3)); 

//------------------
 
// const myMarks = (...marks) => console.log(marks);
// myMarks(33,44,22,66,78);
// //---------------------

// const salCal = (salary, improvement = 5) =>{
//     let nSal = salary * ((improvement +100)/100);
//     console.log(`New Salary is Rs. ${nSal}`);
// }

// salCal(1000,10);
// salCal(1000);

//---------------Destructuring objects(ES6)

//Extract properties from objects and bind them to variable
//------Get object Values

// const user = {
//     first : "Lahiru",
//     Last : "Perera",
//     age : 25
// }

// const fname= user.first;
// const age =user.age;
// console.log(`My name is ${fname} and age is ${age}`);
//-------------------

//---------Object Destructuring

// const std = {
//     name : "Chamara Silva",
//     degree : "BSc Comp Sc.",
//     age : 25,
//     subject :["Java","OS","Comp Design","Networking"],
//     gpa :{
//         first : 3.8,
//         second : 3.6,
//         third : 3.4
//     }
// }

// const {name} = std;
// console.log(`My name is ${name}`);

//  console.log(`My Digree is ${degree} and age is ${age}`);

//  const{subjects} = std;


 //----------------Desructuring Arrays(ES6)

 //Extracting multiple properties from an array by taking the structure.
// const names =['sanduni','sarath','sunil'];
// const [n1,n2,n3] = names;
// console.log(n1);
// console.log(n2);
// console.log(n3);

// //----------------------------
// const displaySubject = () =>['Maths','Science','Sinhala'];
// let [sub1, sub2] = displaySubject();
// console.log(sub1);
// console.log(sub2);

//---------Maps(ES6)

//Collection of elements where each element is stored as a Key,value pair.Map object can 
//hold both objects and primitive values as either key or value.

// let map = new Map();
// console.log(map);

// map.set("fname" , "Chamal");
// map.set("lname" ,"Dias");
// map.set("phone","33541846871");

// console.log(`First Name is ${map.get('fname')}`);
// console.log(`Phone Number is ${map.get('phone')}`);

// console.log(map.has('email'));

// console.log(map.size);

// for (let x of map){
//     console.log(x);
//     console.log(`${x[0]} : ${x[1]}`;)
// }

//----------Sets(ES6)
//Similar to arrays but it does't accept duplicate values.

// let set = new Set();
// console.log(set);

// set.add("Pasan");
// set.add("Dasun");
// set.add("Kasun");
// set.add(5);
// set.add(true);
// set.add("kasun");
// set.add(5);
// console.log(set);

// for (let y of set){
//     console.log(y);
// }

// //------------------------------------

// let nset =new Set(["Maths","Science",123]);
// console.log(nset);
// console.log(nset.size);
// console.log(nset.has("Maths"));

//-------------------------------------------
// Classes & Methods(ES6)

// JavaScript Classes are templates for JavaScript objects.objects are real life entities that has attributes and behaviours.

//------Object Constructors & this Keyword
// Sometimes we need a "blueprint" for creating many objects of the same "type.
// //this = the object that is executing the current function"

// function Course(_subject){
//     this.subject = _subject;
//     this.getMarks = () => {
//         console.log(`${this.subject} : 80`);
//         console.log(this);
//     }
// }

// let cau = new Course("Maths");
// console.log(cau);
// cau.getMarks();

//---------------------------
// console.log(this);
// function sample(){
//     console.log(this);
// }
// sample();  



// //----------Classes, Constructor  Methods--
// // Constructor executed automatically when a new object is created.It is used to initialize object properties.

// class Course {
//     constructor(_subject){
//         this.subject = _subject;
//     }

//     getMarks(){
//         console.log(`${this.subject} : 80`);
//         console.log(this);
//     }
// }
// let cou = new Course("Science");
// console.log(cou);
// cou.getMarks();

// ----------Static Keywords(ES6)
//----------------------------------------------

//Static methods/properties are called directly on the class,without creating an instance/objects

// class Car{
//     constructor(brand){
//         this.brand = brand;
//     }

//     //Static Method
//     static getPrice(tax){
//         console.log(`Price is : ${tax+20000}`);
//     }
// }
// console.log(Car.company);
// Car.getPrice(2000);


// //--------------------- 
// //----------Getters  Setters(ES6)
// //--------------------------------

// //Getters - Access properties  Setters - Mutate them.Java Script can secure better data quality when using getters and setters.
// //----Normal function inside an Object

// // const Person = {
// //     fname : "Kasun",
// //     lname : "Tharaka",
// //     fullName(){
// //         return `${this.fname} ${this.lname}`;
// //     }
// // };
// // console.log(Person.fullName());

// //-------------------
// //--------Getters & Setters inside an object

// const Person = {
//     fname : "Kasun",
//     lname : "Tharaka",
//     //Getter
//     get fullName(){
//         return `{this.fname} ${this.lname}`;
//     },
//     //Setter
//     set fullName(names){
//         const parts = names.split(' ');
//         this.fname = parts[0];
//         this.lname = parts[1];
//     }
// };
// console.log(Person.fullName);

// Person.fullName = "chamal Silva"; 

// //------------
// //-----Getters  Setters inside a class

// class Shape{
//     constructor(width,height){
//         this.width = width;
//         this.height = height;
//     }

//     //Getter
//     get area(){
//         return this.width *this.height;
//     }

//     //Setter
//     set area(Values){
//         const val = Values.split(',');
//         this.width = val[0];
//         this.height = val[1];
//     }
// }

// let sh = new Shape(10, 5);

// console.log(sh.area);
// sh.area = "2,10";



//--------Inheritance(ES6)
//-------------------------

//Acces Methods & properties of the base class in the derived class.


// class Car{
//     constructor(mpdel){
//         this.model = this.model;
    
//     }
//     start(){
//         return `${this.model} is starting ...`;
//     }
// }

// class Audi extends Car{
//     constructor(model, engine){
//         super(model);
//         this.engine = engine;
//     }

//     powerGen(){
//         return `${this.engine} cc Audi ${this.start()}`;
//     }

//     //Method Overiding
//     start(){
//         return `${this.model} is not starting...`;
//     }
// }

// let au = new Audi("A7",1500);
// console.log(au.start());
// console.log(au.powerGen());



//----------------
//----Exponentiation Operator(ES7)
// console.log(3**2);
// console.log(5**5);

// //-----------
// //------Array Methods(ES5+)

// //-----Filter
// //Creates a new array with all elements that pass the test implemented by the provided function.

// const students = [
//     {name : "chamara", age : 22},
//     {name : "Kasun", age : 25},
//     {name : "Saman", age : 32},
//     {name : "Pradas", age : 28},
//     {name : "Sarath", age : 45},
// ]
// const FilterStd = MediaStreamAudioDestinationNode.filter((std) => std.age < 30);
// console.log(FilterStd); 

//-----Map---------
//Creates a new array populated with the results of calling a provided function on every element in the calling array.
// const students = [
//      {name : "chamara", age : 22},
//      {name : "Kasun", age : 25},
//      {name : "Saman", age : 32},
//      {name : "Pradas", age : 28},
//      {name : "Sarath", age : 45},
//  ];

//  const filterNames = students.map((std) => std.name);
//  console.log(filterNames);



//-----find------
//Returns the value of the first element in the provided array that satisfies the provided testing function.

//  const students = [
//      {name : "chamara", age : 22},
//      {name : "Kasun", age : 25},
//      {name : "Saman", age : 32},
//      {name : "Pradas", age : 28},
//      {name : "Sarath", age : 45},
//  ];

//  const foundItem = students.find((std) => std.name =="Saman");
//  console.log(foundItem);

//------ForEach-------//
//Executes a provided function once for each array element.

//  const students = [
//      {name : "chamara", age : 22},
//      {name : "Kasun", age : 25},
//      {name : "Saman", age : 32},
//      {name : "Pradas", age : 28},
//      {name : "Sarath", age : 45},
//  ];

//  let sum = 0;
//  students.forEach((std) => console.log(getSum(std.age)));

//  function getSum(x){
//     sum = sum +x;
//     return sum;
//  }

 //-------same--------
 //Tests whether at least one element in the array passes the test implemented by the provided function.

//   const students = [
//      {name : "chamara", age : 22},
//      {name : "Kasun", age : 25},
//      {name : "Saman", age : 32},
//      {name : "Pradas", age : 28},
//      {name : "Sarath", age : 45},
//  ]; 
//  const aboveAge = students.some((std) => std.age >29);
//  console.log(aboveAge);


//--------Every--------
//Tests whether all elements in the array pass the test implemented by the provided function

//  const students = [
//      {name : "chamara", age : 22},
//      {name : "Kasun", age : 25},
//      {name : "Saman", age : 32},
//      {name : "Pradas", age : 28},
//      {name : "Sarath", age : 45},
//  ];

//  const allAboveAge = students.every((std) => std.age> 20);
//  console.log(allAboveAge);

 //-------Reduce--------
 //Executes a reducer function (that you provide) on each element of the array,resulting in single output value.

//  

//---------Sort--------
//Sorts the elements of an array.The default sort order is ascending.

// const ages = [33,45,21,66,7,5,21,4,88];
// ages.sort();
// console.log(ages);
// //Array elements are converted in to strings, then sorted according to each character's Unicode codde point value.

// function compFunc(a, b){
//     return a-b;
// }

// //With Array of objects
//  const students = [
//      {name : "chamara", age : 22},
//      {name : "Kasun", age : 25},
//      {name : "Saman", age : 32},
//      {name : "Pradas", age : 28},
//      {name : "Sarath", age : 45},
//  ]; 

//  const sortedStd = students.sort((std1 , std2) =>{
//     return std1.age - std2.age;
//  });
//  console.log(sortedStd);


//------Includes----------
//Determines whether an array includes a certain value among its entries

// let numbers = [1,2,3,4,5,6,7];
// console.log(numbers.includes(0));

// let names = ["Chamara", "Kasun","Sanduni"];
// console.log(names.includes("Chamal"));

// let user = "Kasun Perera";
// console.log(user.includes("W"));

// //-------Promises(ES6)--------
// //----------------------------

// //Promise is an Object.Use to deal with asynchronous operations.When we define a promise in JavaScript,
// // it will be resolved when the time comes, or it will get rejected.

// //For example,when we request data from the server by using a promise,it will be in pending mode untill we recive our data.
  

// const products = [
//     {
//         name : "Product 1",
//         desc : "This is my sample product 1",
//         price : 200
//     },
//     {
//         name : "Product 2",
//         desc : "This is my sample product 2",
//         price : 300
//     }
// ];

// //Display products
// function getProducts(){
//     setTimeout(() => {
//         let output ='';
//         products.forEach((product)) => {
//             output +=`<div>
//                 <h2>${product.name}</h2>
//                 <p>${product.desc}</p>
//                 <h4>${product.price}</h4></div>`;

//         });
//         document.body.innerHTML = output;
//     }, 1000);
// } 
    
// //add product
// function addProducts(product ,callback){
//     setTimeout(() =>{
//         products.push(product);
//         callback();
//     }, 2000);
// }
// addProducts({name : "Product 3", desc : 'This is my sample product 3', price :500});
// getProducts();
  
// //-----------------------
// //-----------Promises---

// let pr = new Promise((resolve, reject) =>{
//     let ans = 2+5;
//     setTimeout(() => {
//         if(ans == 7){
//             resolve('completed');
//         }
//         else{
//             reject('not completed')
//         }
//     }, 3000);
// });

// pr.then((msg) => {
//     console.log(`Promise has ${msg}`);
//     console.log(pr);
// }).catch((msg) =>{
//     console.log(`Promise has ${msg}`);
    
// }); 

//--------------------
// function getUserCountry(url){
//     return new Promise((resolve, reject) =>{
//         const xmlreq = new XMLHttpRequest();
//         xmlreq.open('GET',url);

//         xmlreq.onload =() =>{
//             if(xmlreq.status == 200){
//                 resolve(xmlreq.response);
//             }
//             else{
//                 reject(Error(xmlreq.response));
//             }
//         }
//         xmlreq.onerror =() =>{
//             reject(Error("Network Error"));
//         }
//         xmlreq.send();
//     });
// }

// getUserCountry('https://api.nationalize.io/?name=kasun').then((response) =>{
//     console.log('Success',response);
// }).catch((error) =>{
//     console.error('Faild',error);
// });


// //-----------------------
// const pr1 =new Promise((resolve)=>{
//     setTimeout(() =>{
//         resolve("Promise 1 Success");
//     },1000);
// });

// const pr2 =new Promise((resolve)=>{
//     setTimeout(() =>{
//         resolve("Promise 2 Success");
//     },2000);
// });

// const pr3 =new Promise((resolve)=>{
//     setTimeout(() =>{
//         resolve("Promise 3 Success");
//     },3000);
// });
// //All
// Promise.all([pr1,pr2,pr3]).then((values) =>{
//     console.log(values);
// })

//-----------------------
//----------Async/Await(ES8)------

//Async and Await make promises easier to write.Async makes a function return a Promise.Await makes a function wait for Promise.
// function dialEmergency(number){
//     return new Promise((resolve, reject)=>{
//         console.log(`Dialing ${number}`);
//         if(number === 119){
//             resolve("What is your emergency");
//         }
//         else{
//             reject("This is not the emergency number");
//         }
//     });
// }
// function processCall(response){
//     return new Promise((resolve)=>{
//         console.log("Calling Emergency service");
//         resolve(`Agent : ${response}`);
//     })
// }

// dialEmergency(119).then((response) =>{
//     console.log("Response Received");
//     return processCall(response);
// }).then((processedResponse)=>{
//     console.log(processedResponse);

// }).catch((error) =>{
//     console.error(error);
// });

// function dialEmergency(number){
//     return new Promise((resolve, reject)=>{
//         console.log(`Dialing ${number}`);
//         if(number === 119){
//             resolve("What is your emergency");
//         }
//         else{
//             reject("This is not the emergency number");
//         }
//     });
// }
// function processCall(response){
//     return new Promise((resolve)=>{
//         console.log("Calling Emergency service");
//         resolve(`Agent : ${response}`);
//     })
// }

// async function handleOperation() {
//     try{
//         const response = await dialEmergency(119);
//         console.log("Response Recieved");
//         const processedResponse = await processCall(response);
//         console.log(processedresponse);
//     }
//     catch(error){
//         console.error(error);
//     }
// }
// handleOperation(); 

//----------------------------------
//-------Fetch API--------
//Provides a JavaScript interface for accessing and manipulating parts of the HTTP pipeline,such as requests and responses.

//Create a new post

// fetch('https://jsonplaceholder.typicode.com/posts',{
//     method : "POST",
//     headers : {
//         'Content-Type' : 'application/json'
//     },
//     body:JSON.stringify(
//         {
//             Title :'sample post 1',
//             body : 'This is my sample post',
//             userId :11
//         }
//     )
// }).then((res) =>{
//     if(res.ok){
//         return res.json();
//     }
//     else{
//         return Error("Something went wrong");
//     }
// }).then((data) =>{
//     console.log(data);
// })

// //---------padStart & padEnd Function(ES6)
// //pads the current string with another string untill the resulting string reaches the given Length.

// //------padStart
// let name = "Dasun";
// console.log(name.padStart(10,"e"));

// //-----padEnd
// let subject = "Science";
// console.log(subject.padEnd(10,'.'));

//-------------
// Object Entries(ES6)

//Return an array of a given object's own key value pairs
const data ={
    name:"Dasun Perera",
    email : "dasun@gmail.com",
    phone : 123456
}
console.log(Object.entries(data));

for(let [Key, val] of Object.entries(data)){
    console.log(`${key} :${val}`;)
}


//-------------------
//----object Values(ES8)

//Return an array of a given object's own property values

const data ={
    name : "Dasun perera",
    email :"dasun@gmail.com",
    phone :123156

}
console.log(Object.values(data));

for(let val of Object.values(data)){
    console.log(val);
}


//--------------------------
//----Trailling commas(ES6,ES8)

//can be useful when adding new elements, parameters ,or properties to JavaScript code.
const arr =[1,2,3,4,];
console.log(arr);

const data ={
     name : "Chamara",
     age : 25,
}

//----------------

function add(x, y,){
    return x+ y;
}
console.log(add(3,5));
