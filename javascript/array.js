const fruit = [
    "orange", 
    "mango", 
    "apple", 
    "pear",
    "carrot"

];
fruit.pop()
//fruit[5] = "lemon";
// fruit.push("banana", "kiwi");
// fruit.push("cherry");
//fruit.sort();
//fruit[2] = "pineapple";
// console.log(fruit[2]);
// console.log(typeof(fruit));
const car = new Array("toyota", "volvo");
// document.getElementById("car").innerHTML = fruit.toString();
// document.getElementById("car").innerHTML = fruit;
// console.log(fruit.length);
// console.log(fruit);
// document.getElementById("car").innerHTML = fruit[fruit.length-1];
// let text = "<ul>";
// for (let i = 0; i < fruit.length; i++){
//     text += "<li>" + fruit[i] + "</li>";
// } 
// text += "</ul>";
document.getElementById("car").innerHTML =  fruit.lastIndexOf("pear").toString();