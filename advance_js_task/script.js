// section 1:
let laptop = {
    brand: "Asus",
    price: 100000,
    start: function(){
        console.log("laptop Started")
    },
    priceInc: function(){
        let p = (this.price / 100) * 10;
        return this.price += p;
    }
}
// if i keep using this plain objects for various object then my codes becomes larger which takes lots of memory and also it makes complex to manage the different data in that. 

// section 2:
class Employee{
    constructor(name,salary){
        this.name = name;
        this.salary = salary;
    }
    showDetails(){
            console.log(this.name, "-", this.salary);
    }
}

let emp1 = new Employee('harsh',100000);
let emp2 = new Employee('harshita',70000);
let emp3 = new Employee('harshit',60000);
emp1.showDetails();
emp2.showDetails();
emp3.showDetails();
// it is completely different from plain object as we don't have to write code from different object as we have smaller code and easy to understand and manageble code where we can define class one time and use it for different data with same structure with less code.

// section 3:
class BankAccount{
    constructor(name, balance){
        this.accountHolderName = name;
        this.balance = balance;
    }
    deposit(amount){
        return this.balance += amount;
    }
}

let user1 = new BankAccount("Rahul",10000);
let user2 = new BankAccount("ashwin", 100000);

user1.deposit(10000);
// the second account is not affected because we are depositing in user1 bank account through class and object which help to easily modify any particular object without affecting others.

// section 4:
let profile = {
    userName: "ayush",
    printName(){
        console.log(this.userName);
    },
};
let printName = function(){
    console.log(this.userName);
};
printName(); //undefined because in this value of this is window which in usndefined username.
profile.printName(); //this print username value because this value is object.

// section 5:
function vehicle(type,wheel){
    this.type = type,
    this.wheel = wheel,
    this.method = function(){
        console.log(this.type, this.wheel);
    }
};
vehicle.prototype.details = function(){
        console.log(this.type, this.wheel);
}
let car1 = new vehicle("maruti","alloy");
let car2 = new vehicle("nexa","steel");
car1.method();
car2.method();
console.log(car1);
car1.details();
car2.details();
// prototype method is preferred because it works on a shared memory and calls it when it needed and as compared to add a method in constructor class takes seperate space for the different object.

// section 6:
function showBrand(brand){
    this.brand = brand;
}
let obj1 = {
    brand: "royal"
}
let obj2 = {
    brand: "luis"
}
showBrand.call(obj1);
showBrand.call(obj2);
// with the help of call we can use same function for changing multiple values of function through object which solve the problem of creating different object with different function and assigning values.

// section 7:
function introduce(city,role){
    console.log(this.name, city, role)
}
let obj = {
    name: "ayush"
};
introduce.apply(obj, ["lucknow",'developer']);
// apply is similar to call but it also pass an array of arguments instead of taking arguments one by one.

// section 8:
function greet(){
    console.log("Hello",this.name);
}
let ob = {
    name: "ashu"
}
let later = greet.bind(ob);
later();
// this is also work as same as above but it stores the value of this into a new function permanently and we can use it later whenever we need by calling the new function.