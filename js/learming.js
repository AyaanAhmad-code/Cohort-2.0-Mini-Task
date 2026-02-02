// console.log("Ayaan Ahmad");
// age = 20;
// fullname = "Ayaan";
// console.log("My name is " + fullname + " and I am " + age + " years old.");
// price = 99.99;
// x = null;
// y = undefined;
// isFollow = true;
// console.log(isFollow);
// var fullname = "Ayaan Ahmad"; //older format not used today

// let name = "Ayaan Ahmad";
// let age = 20;

// const price = 99.99; //constant variable, cannot be changed later

// const profile ={
//     fullname :'shradhakhapra',
//     post : 195,
//     followers : 569000,
//     following : 4,
//     link : shradhakhapra,
//     bio : "Entrpreneur | Apna college | Ex-microsodt, DRDO | To educate someone is the highest privelege",
// }

// let name = prompt("Enter your name");
// let age = prompt("Enter your age");
// let num = prompt("Enter a number");
// if(num % 5 == 0){
//     console.log("The number is multiple of 5");
// }
// else{
//     console.log("The number is not multiple of 5");
// }
// let score = prompt("Enter your score");
// let grade;
// if(score >= 90 && score <= 100){
//     console.log("You got A grade");
// }else if(score >= 70 && score < 89){
//     console.log("You got B grade");
// }else if(score >= 60 && score < 69){
//     console.log("You got C grade");
// }else if(score >= 50 && score < 59){
//     console.log("You got D grade");
// }else if(score >= 0 && score < 49){
//     console.log("You got F grade");
// }

// console.log("according to your scores, your grade was : ", grade(score) );

// for(let i = 0;i < 10; i++){
//     console.log("The value of i is: " + i);
// }

// for(let i = 1; i <=100; i++){
//     if(i % 2 == 0){
//         console.log("The number " + i + " is even");
//     }
// }

// let gameNum = 25;
// let userNum = prompt("Enter a number between 1 and 100");

// while(userNum != gameNum){
//     userNum = prompt("Wrong guess! Try again. Enter a number between 1 and 100");
// }

// console.log("Congratulations! You guessed the number correctly: " + gameNum);

// let str = "Hello, World!";
// let str2 = 'Hello, World!';

// console.log(str.length);
// console.log(str[3]);

// let specialString = `This is a special string`;// a way to have embedded expressions and multi-line strings
// console.log(specialString);
// let output = `The value of str is ${str} and the value of str2 is ${str2}`;//string interpolation
// console.log(output);
// // strings are immutable, meaning they cannot be changed after creation
// console.log(str.toUpperCase()); // converts the string to uppercase
// console.log(str.toLowerCase()); // converts the string to lowercase
// console.log(str.indexOf("World")); // returns the index of the first occurrence of the specified value
// console.log(str.trim()); // removes whitespace from both ends of a string
// console.log(str.replace("World", "Ayaan")); // replaces the first occurrence of a specified value with another value

// console.log(str.slice(0, 5)); // extracts a part of a string and returns a new string
// console.log(str.charAt(0)); // returns the character at a specified index

// let fullName = prompt("Enter your name");
// let username = "@" + fullName + fullName.length;
// console.log(username)

//mutable arrays
// arrays are mutable, meaning they can be changed after creation
// let heroes = ['ironman', 'spiderman', 'batman', 'superman', 'hulk'];
// let marks = [90, 80, 70, 60, 50];
// let info = [true, 20, 'Ayaan', null, undefined];
// console.log(heroes);
// console.log(heroes[0]); // accessing the first element of the array
// console.log(heroes[2]); // accessing the third element of the array

// for (let index = 0; index < heroes.length; index++){
//     console.log(heroes[index]);
// }

// for (let hero of heroes){
//     console.log(hero);
// }
// let sum = 0;
// let marks = [85,97,44,37,76,60];
// for (let i=0; i < marks.length; i++){
//     sum = sum + marks[i];
// }
// for (let value of marks){
//     sum = sum + value;
// }
// sum = sum / marks.length;
// console.log("The average marks are: " + sum);

// let price = [250,645,300,900,50];
// let i = 0;
// for(let value of price){
//     console.log(`Value at index ${i} = ${value}`);
//     let offer = value / 10;
//     price[i] = price[i] - offer;
//     console.log(`Price after discount = ${price[i]}`);
//     i++;
// }

// methods of arrays
// let heroes = ['ironman', 'spiderman', 'batman', 'superman'];
// heroes.push('hulk'); // adds an element to the end of the array
// console.log(heroes);
// heroes.pop(); // removes the last element of the array
// console.log(heroes);
// console.log(heroes.toString()); // converts the array to a string
// console.log(heroes.join(' - ')); // joins the elements of the array into a string with a specified separator
// console.log(heroes.indexOf('batman')); // returns the index of the first occurrence of the specified value
// console.log(heroes.includes('batman')); // checks if the specified value is present in the array
// console.log(heroes.reverse()); // reverses the order of the elements in the array
// console.log(heroes.sort()); // sorts the elements of the array in ascending order
// console.log(heroes.slice(1, 3)); // extracts a part of the array and returns a new array
// console.log(heroes.splice(1, 2,'marvel','thor')); // removes elements from the array and returns the removed elements
// console.log(heroes); // displays the modified array after splice
// console.log(heroes.concat(['thor', 'loki'])); // concatenates two or more arrays and returns a new array
// console.log(heroes); // displays the original array after concat

// let companies = ['bloomberg', 'microsoft','uber','google','ibm','netflix'];
// companies.shift();
// console.log(companies); // removes the first element of the array
// companies.splice(1, 1,'ola');
// console.log(companies); // removes the element at index 2 and adds 'ola' in its place
// companies.push('amazon'); // adds an element to the end of the array
// console.log(companies); // displays the modified array after push

// functions
// function greet(name){
//     console.log("Hello, " + name + "!");
// }
// greet("Ayaan");

// function multiply(a, b){
//     return a * b;
// }
// let result = multiply(5, 10);
// console.log("The result of multiplication is: " + result);

// const arroSum = (a, b) => {
//     return a + b;
// };

// let sumResult = arroSum(10, 20);
// console.log("The result of arrow function sum is: " + sumResult);  

// for each loop 
// high order function means a function that takes another function as an argument or returns a function
// forEach is a high order function that executes a provided function once for each array element
// let numbers = [1, 2, 3, 4, 5];
// numbers.forEach((num, index) => {
//     console.log(`The value at index ${index} is ${num}`);
// });

// numbers.forEach((num) => {
//     console.log(`The square of ${num} is ${num * num}`);
// });
// // used with map to create a new array with the results of calling a provided function on every element in the calling array
// numbers.map((num) => {
//     return num * num;
// }).forEach((num, index) => {
//     console.log(`The square of ${num} at index ${index} is ${num}`);
// });

// let evenArr = Array.filter((num) => {
//     return num % 2 !== 0;
// });
// console.log(evenArr);

// let output = numbers.reduce((res, value) => {
//      return res + value;
// });

// console.log(output)

// window object is the global object in the browser with lots of properties and methods that provide information about the browser window
// window object represents the browser window and provides methods to manipulate it. it is browser's global object not javascript and it is automatically created by the browser when the page is loaded

// DOM (Document Object Model) is a programming interface for web documents. It represents the structure of a document as a tree of objects, allowing developers to manipulate the content, structure, and style of a web page dynamically. The DOM provides methods and properties to access and modify HTML elements, attributes, and styles, enabling dynamic interactions and updates to the web page without requiring a full page reload.

// console.dir(document.head);
// console.dir(document.body);

// document.body.style.backgroundColor = "lightblue"; // changes the background color of the body

// dom manipulation

// document.getElementById('heading');

// let value = document.getElementsByClassName('heading');
// console.log(value);

// let para = document.getElementsByTagName('p');
// console.log(para);

// document.querySelector('p'); // selects the first element with the class 'heading'
// document.querySelectorAll('p'); // selects all elements with the class 'heading'

// value.getElementsByTagName('p'); // selects all <p> elements within the element with class 'heading'

// text node , comment node, element node 


// let div = document.querySelector("div");
// console.dir(div);

// let h2 = document.querySelector("h2");
// console.dir(h2.innerText);
// h2.innerText += " From Apna college students";


// let divs = document.querySelectorAll(".box");
// console.log(divs[0].innerText = 'This is the first box');
// console.log(divs[1].innerText = 'This is the second box');
// console.log(divs[2].innerText = 'This is the third box'); 

// let idx = 1;
// for (let div of divs){
//     div.innerText = `new unique value ${idx}`;
//     idx++;
// }

// let div = document.querySelector("div");
// // console.log(div.getAttribute('id'));

// let para = document.querySelector('p');
// // console.log(para.getAttribute('id'));

// // div.setAttribute('id', 'newId');
// // console.log(div.getAttribute('id'));

// // para.setAttribute('id', 'newParaId');
// // console.log(para.getAttribute('id'));

// div.style.backgroundColor = "lightblue";

// let newBtn = document.createElement('button');
// newBtn.innerText = 'Click Me!';
// console.log(newBtn);

// insert element methods types are append, prepend, before, after, replaceWith

// let div = document.querySelector('div');
// div.append(newBtn);
// div.prepend(newBtn);
// div.before(newBtn);
// div.after(newBtn);

// let newHeading = document.createElement('h1');
// newHeading.innerHTML = "<i>hi, i am new!</i>";

// document.querySelector("body").prepend(newHeading);

// let para = document.querySelector('p');
// para.remove();

// newHeading.remove();

// let newBtn = document.createElement('button');
// newBtn.innerText = 'click me';
// newBtn.style.color = 'white';
// newBtn.style.backgroundColor = 'red';
// document.querySelector('body').prepend(newBtn);


// let para = document.querySelector('p');
// para.classList.add('newClass');// adds a new class to the paragraph element
// para.classList.remove('newClass');// removes the class from the paragraph element

// events in js
// events are actions or occurrences that happen in the browser, such as a user clicking a button, submitting a form, or resizing the window. JavaScript can respond to these events by executing code when they occur.

// let btn1 = document.querySelector('#btn1');

// btn1.onclick = (e) => {
//     console.log("Button 1 clicked!");
//     let a =25;
//     a++;
//     console.log(a);
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.clientX,e.clientY);
// }

// if inline event is write and also in js file then js file will be executed always it also overwrite the js event if same event is written is same place

// event listeners
// btn1.addEventListener('click', (e) => {
//     console.log("Button 1 clicked again! handler 1");
// });//same event can be added multiple times with event listener but not with onclick
 
// btn1.addEventListener('click', (e) => {
//     console.log("Button 1 clicked again! handler 2");
// });
// const handler3 = (e) => {
//     console.log("Button 1 clicked again! handler 3");
// };
// btn1.addEventListener('click', handler3);

// btn1.addEventListener('click', (e) => {
//     console.log("Button 1 clicked again! handler 4");
// });

// btn1.removeEventListener('click', handler3);

// let modBtn = document.querySelector('#mode');
// let curreMode = 'light'; // default mode

// modBtn.addEventListener('click', () => {
//     console.log("You are trying to change moode!");
//     if (curreMode === 'light'){
//         curreMode ='dark';
//         document.querySelector('body').style.backgroundColor = 'black';      
//     }else{
//         curreMode = 'light';
//         document.querySelector('body').style.backgroundColor = 'white';      
//     }
// });

// prototypes
// prototypes are a way to add properties and methods to an object in JavaScript. Every object in JavaScript has a prototype, which is another object that it inherits properties and methods from. This allows for code reuse and the creation of new objects based on existing ones

// const employee = {
//     calcTax1(){ //most used
//         console.log("tax rate is 10%");
//     },
//     calcTax2 : function () {  //less used
//         console.log("tax rate is 10%");
//     }
// };

// const KaranArjun = {
//     salary: 5000,
// };

// KaranArjun.__proto__ = employee;

//classes is a program code template for creating objects. It defines properties and methods that the created objects will have. Classes are a way to create objects in a more structured and organized way, allowing for better code organization and reusability.

// class ToyotaCar{
//     start(){
//         console.log("start");
//     }
//     stop(){
//         console.log("stop");
//     }
//     setBrnd(brand){
//         this.brand = brand;
//     }
// }

// let fortuner = new ToyotaCar();

//constructor method is automatically invoked by new which initialize the object.
// class me{
//     constructor(brand){
//         console.log("creating object");
//         this.brand = brand;
//     }
// }

//inheritance is passing down properties and methods from parent class to child class

// class parent{
//     constructor(){
//         this.species = "homo sapiens"

//     }
//     hello(){
//         console.log("hello")
//     }

// }

// class child extends parent{  //if child and parent both have same mathods then child method is used this called as method overriding.
//     constructor(branch){
//         super(); // to invoke parent class constructor 
//         this.branch = this.branch;
//     }
//     greet(){
//         console.log("how are you")
//     }
// }
// let obj = new child();
 

//super keyword is used to call the constructor of its parent class to access the parents properties and methods
// let DATA = "secret Information"
// class User{
//     constructor(name,email){
//         this.name = name;
//         this.email = email;
//     }
//     viewData(){
//         console.log("data = ",DATA);
//     }
// }

// class Admin extends User{
//     constructor(name,email){
//         super(name,email);
//     }
//     editData(){
//         DATA = "some new value";
//     }
// }

// let student1 = new User("sharada","abc@gmail.com");
// let student2 = new User("shara","ac@gmail.com");

// let admin = new Admin("admin","admin@gmail.com");

// Error handling is executing all the code by handling exception using try catch block

// try{

// }catch(err){

// }
//async await>>promise chains>>callback hell
// console.log("one");
// console.log("two");
// function hello(){
//     console.log("Hello, World!");
// }

// setTimeout(hello, 2000); // calls the hello function after 2 seconds
// console.log("Three");//asynchronous code execution
// console.log("four");

// callbacks are functions that are passed as arguments to other functions and are executed after the completion of the parent function. They are used to handle asynchronous operations in JavaScript, such as API calls, file reading, or event handling.

// function sum(a,b){
//     console.log("The sum is: " + (a + b));
// }

// function calculator(a,b, sumCallback){
//     sumCallback(a,b);
// }

// calculator(1,2,sum);

// // callback hell is a situation where multiple nested callbacks make the code difficult to read and maintain. It occurs when callbacks are used extensively in asynchronous operations, leading to deeply nested structures.
// // code for callback hell
// function fetchData(callback){
//     setTimeout(() => {
//         console.log("Data fetched");
//         callback();
//     }, 1000);
// }
// function processData(callback){
//     setTimeout(() => {
//         console.log("Data processed");
//         callback();
//     }, 1000);
// }
// function displayData(){
//     setTimeout(() => {
//         console.log("Data displayed");
//     }, 1000);
// }
// fetchData(() => {
//     processData(() => {
//         displayData();
//     });
// });

// function getData(dataId, getNextData){
//     setTimeout(() =>{
//         console.log("data", dataId);
//         if(getNextData){
//             getNextData();
//         }
//     }, 2000);
// }

// getData(1, () => {
//     console.log("Data 1 fetched, now fetching next data");
//     getData(2, () => {
//         console.log("Data 2 fetched, now fetching next data");
//         getData(3, () => {
//             console.log("Data 3 fetched, now fetching next data");
//             getData(4, () => {
//                 console.log("All data fetched");
//             });
//         });
//     });
// });

//promises are objects that represent the eventual completion (or failure) of an asynchronous operation and its resulting value. They provide a cleaner way to handle asynchronous operations compared to callbacks, avoiding callback hell and making the code more readable.
// let promise = new Promise((resolve, reject) => {
//     console.log("Promise is created");
//     resolve("Promise is resolved successfully");
//     // reject("Promise is rejected");
// });
//promise state can be pending, fulfilled, or rejected

// function getData(dataId,getNextData){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("success");
//             if(getNextData){
//                 getNextData();
//             }
//         }, 5000);
//     });
// }

// promise have then and catch methods to handle the resolved or rejected state of the promise

// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("I am a promise");
//         // resolve("Promise is resolved successfully");
//         reject("Promise is rejected");
//     });
// };

// let promise = getPromise();
// promise.then((res) => {
//     console.log("promise fulfilled",res);
// });

// promise.catch((err) => {
//     console.log("promise rejected with error: ", err);
// });

//promise chaining is a way to handle multiple asynchronous operations in a sequential manner, where the output of one promise is passed as input to the next promise. This allows for cleaner and more readable code, avoiding nested callbacks.

// function asyncFunc(){
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             console.log("some data1");
//             resolve("Data fetched successfully");
//         }, 4000);
//     });
// }

// function asyncFunc2(){
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             console.log("some data2");
//             resolve("Data fetched successfully");
//         }, 4000);
//     });
// }

// console.log("fetching data1...");
// asyncFunc().then((res) =>{
//     console.log("fetching data2...");
//     asyncFunc2().then((res) =>{});
// });

//promise chain
// GetData(1)
//     .then((res) => {
//         return getData(2);
//     })
//     .then((res) => {
//         return getData(3);
//     })
//     .then((res) => {
//         console.log(res);
//     });


//async/await is a syntax in JavaScript that allows you to write asynchronous code in a more synchronous manner, making it easier to read and understand. It is built on top of promises and provides a way to handle asynchronous operations without the need for chaining .then() methods.
// await is used to pause the execution of an async function until the promise is resolved or rejected, allowing you to write code that looks synchronous while still being asynchronous.

// function Api(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Weather data");
//             resolve(200);
//         }, 3000);
//     })
// }

// async function getWeatherData(){
//     await Api();
//     console.log("Weather data fetched successfully");
// }

// async-await
// async function gatAllData(){
//       await getData(1);
//       console.log("Data 1 fetched successfully");
//       await getData(2);
//       console.log("Data 2 fetched successfully");
//       await getData(3);
//       console.log("Data 3 fetched successfully");
//       await getData(4);
//       console.log("Data 4 fetched successfully");
//       await getData(5);
//       console.log("Data 5 fetched successfully");
//       await getData(6);
// }

// iife - immediately invoked function expression it is called immediately as soon as it is defined
// (async function (){
//       await getData(1);
//       console.log("Data 1 fetched successfully");
//       await getData(2);
//       console.log("Data 2 fetched successfully");
//       await getData(3);
//       console.log("Data 3 fetched successfully");
//       await getData(4);
//       console.log("Data 4 fetched successfully");
//       await getData(5);
//       console.log("Data 5 fetched successfully");
//       await getData(6);
// })();

// fetch Api provides an interface for fetching(sending/receiving) resources
//it uses request and response objects
//the fetch() method is used to fetch a resource(data)
//let promise = fetch(url,[options])

// const url = "https://cat-fact.herokuapp.com/facts";

// const getFacts = async () => {
//     console.log("getting data")
//     let response = await fetch(url);
//     console.log(response);
//     let data = await response.json();
//     console.log(data[0])
// }

// ajax is asynchronous js & xml 
// json is javascript object notation
// json() method returns a second promise that resolves with the result of parsing the response bosy text as json.(input is json,output is js object)
