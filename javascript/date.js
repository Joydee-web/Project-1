// function getdate()
// const d = new Date();
// const hour = d.getHours();
// let greeting; 
// if(hour < 12){
//     greeting = "Good Morning"
// }else if(hour <= 15){
//     greeting = "Good Afternoon"
// }else if(hour >= 17){
//     greeting = "Good Evening"
// }else if(hour >= 18){
//     greeting = "Goodnight"
// }
// else{
//     greeting = "You are in Heaven"
// }

// let aft = d.getHours();
// let mon = d.getHours();
// if(d.getHours == 8){
//     console.log("Good Morning")
// }else if(d.getHours == 13){
//    console.log("Good afternoon")
//  }
// return d.getFullYear();
// console.log(year)

// console.log(day
// }

// var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let text = " ";

// for(let i = 0; i < number.length; i++){
//     text += number[i] + "<br>"
// }

// let day = document.getElementById("day");

// var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let i = 0;
// // let text = " ";

// for(; i < number.length; i++){
//     text += number[i] + "<br>"
// }

// day.innerHTML = text;


// const state = {
//     Abia:"Imo",
//     Lagos:"Ikeja",
//     Ondo:"Akure"
// }

// let language = "Javascript"

// let text = "";
//      for(let i in state){
//          document.getElementById("day").innerHTML = text += state[i] + "<br>"
//      }

// for(let c of language){
//     document.getElementById("day").innerHTML = text += c + "<br>"
// }

// let g = 0;
// while(g<=10){
//      document.getElementById("day").textContent = text += g + " ";
//      g++;
// }

// do{
//     document.getElementById("day").textContent = text += g + " ";
//      g++;
// }
// while(g<=12);



// for(let x = 0; x<12; x++){
//     if (x == 9){break;}
//     document.getElementById("day").innerHTML= text += "The number is " + x + " ";
// }


// let value = "";
// for(let i = 0; i <= 100; i+=5) {
//   value += i + "<br>"
// }
// document.getElementById("work").innerHTML = value; 



// let text = "";
// for(let x = 1; x <= 2000; x+=2){
//     text += x + ", "
// }

//   let oddNumbers = '';
//     for (let i = 1; i <= 2000; i++) {
//       if (i % 2 !== 0) {
//         oddNumbers += i + ', ';
//       }
//     }

// document.getElementById("day").innerHTML = oddNumbers;

// const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// const vowels = "AEIOU";
// let output = " ";
// for(let i = 0; i < vowels.length; i++){
//     vowels.includes(vowels[i]) && (output += vowels[i] + "<br>");
// }
//   document.getElementById("alphabet").innerHTML = output;  
    
//     {
//     let con = vowels[i];
//     if(vowels.includes(con));{
//         output += con + "<br>"
//     }
// }
// document.getElementById("alphabet").innerHTML = output;


// const student = new setInterval(["Joy", "Nifemi", "Tola", "Tayo"])
// let x = 10
// const erro = new Set();
// if(x === 10){
//   document.getElementById("set").innerHTML= erro.add("No such variable in this program")
// }else{
//   document.getElementById("set").innerHTML= erro.add("we have such")
// // }
 let text = ""
// const erro = new Set();

//   var x = "text"
//   var y = "game"
//   var state = "book"

// erro.add(x);
// erro.add(y);
// erro.add(state);

// for(const f of erro){
  // document.getElementById("set").innerHTML=  typeof erro
// }
// erro.forEach(function(value){
// document.getElementById("set").innerHTML= text+= value + "<br>";
// })
  
// for(const entry of erro.values()){
//   document.getElementById("set").innerHTML= text+= entry + "<br>";
// }

//BEGINING OF SET
//{ set type
// union
// Intersection
// symmetricDifference
// difference}
// const fruit1 = new Set(["coconut", "orange", "pine-apple", "yam"]);
// const fruit2 = new Set(["banana", "lemon", "lime", "grape", "coconut"]);
// const combine = fruit1.symmetricDifference(fruit2)

// for(const entry of combine.values()){
//   document.getElementById("set").innerHTML= text+= entry + "<br>";
// }

// SET ENDS

//MAP STARTS

// const fruits = new Map([
//   ["apple", 900],
//   ["vitamin", 800],
//   ["pos Html", 200]
// ])
// fruits.set("chicken", 10000)

// console.log(fruits.get("apple"))


//Assignment
const set1 = new Set(["cars", "houses", "chairs", "countries", "fruits"]);
const set2 = new Set(["power-banks", "phones", "laptops", "cars", "chord", "houses"]);
const set3 = new Set(["books", "buildings", "houses", "phones", "papers"])
// const combine = set1.symmetricDifference(set2)
const combinedSet = new Set([...set1, ...set2, ...set3]);
for (let entry of combinedSet.values()) {
  document.getElementById('set').innerHTML += `${entry}<br/>`; 
}
console.log(combinedSet) 
// setUnion([set1, set2, set3])

// for(const entry of combine.values()){
//      document.getElementById("set").innerHTML= text+= entry + "<br>";
// }

// const set1 = new Set(["cars", "houses", "chairs", "countries", "fruits"]);
// const set2 = new Set(["power-banks", "phones", "laptops", "cars", "chord"]);
// const set3 = new Set(["books", "buildings", "houses", "phones", "papers"])
// const combine = set1.symmetricDifference(set2)
// const combinedSet = new Set([...set1, ...set2, ...set3]);


// const set2I3 = set2.intersection(set3)
// const result = set1.intersection(set2I3);
// console.log(result)
// for (let entry of combinedSet.values()) {
//   document.getElementById('set').innerHTML += `${entry}<br/>`; 
// }

const set2I3 = set2.symmetricDifference(set3)
const result = set1.symmetricDifference(set2I3);
console.log(result)
for (let entry of combinedSet.values()) {
  document.getElementById('set').innerHTML += `${entry}<br/>`; 
}






