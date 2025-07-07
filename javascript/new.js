let callDiv = document.getElementById('inp');

let string_def = "";
let number_def = Number(1);
let object_def = {}


function multiply (x, y) {
    return x * y;
}

multiply()

let [hour, min] = new Date().toLocaleTimeString([], ({hour: '2-digit', minute: '2-digit'})).split(":");
let [minute, ampm] = min.split(" ");


let greeting;

if (hour <= 4) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}

callDiv.innerText = `${greeting}\nThe time is: ${hour}:${minute} ${ampm}`;