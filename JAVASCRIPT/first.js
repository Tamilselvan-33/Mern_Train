var a = 1;
let b = 2;
const c = 3;
console.log(a , b , c);

let user = "admin"
let pass = "123"

if(user == "admin" && pass == "123"){
    console.log("Login success");
}
else {
    console.log("Login Failed");
}


// for(let i = 0 ; i < 100 ; i++){
//     if(i % 2){
//         console.log("Odd");
//     }
//     else {
//         console.log("Even")
//     }
// }

// function student(name){
//     console.log("saran marries" , name);
// }

// student("nishanth");
// student("zharif");
// student("Santharam");

// console.log("saran is gay , Hence proved");


function employee(name , company , clg = "SECE"){
    console.log("Name of the employee " , name , " , Company name : " , company , " , Studies in : " , clg);
}
employee("saran" , "Google");
employee("Tamil" , "Amazon");


let data1 = function(){
    return "Hello from unknown";
}

console.log(data1());

let mult = (a , b) => {
    return a * b;
}
console.log(mult(10 , 20));
// call back function
// if function passing another fuction as an argument then it is called call back function
// examples
function sece(callback){
    console.log("Welcom to SECE");
    callback();
}
function student(){
    console.log("Student is the best");
}

sece(student);

// now with whatsapp
// Notification

                       
function whatsapp(callback){
    console.log("You have a new message");
    callback();
}

function notification(){
    console.log("Chat with your friends");
}


whatsapp(notification);

// promise
let fetch = new Promise((resolve , reject) => {
    let a = 1;
    if(a == 1){
        resolve("fetched api data");
    }
    else{
        reject("failed to fetch api data");
    }
});

console.log(fetch);

fetch.then((data) => console.log(data));


// promise with delivery

let delivery = new Promise((resolve , reject) => {
    let a = true;
    if(a){
        resolve("Delivery success");
    }
    else{
        setTimeout(() => {
            reject("Delivery failed");
        } , 2000);
    }
});

// promise

console.log(delivery);
// official way to unpack the promise
delivery.then((data) => console.log(data));