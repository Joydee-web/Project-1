// let joy = "end of year"
// let first = "giving"
// const bool = true
// let test = null;
// const x = BigInt(Number .MAX_SAFE_INTEGER)
// //console.log(`I am ${joy} best`)
// // console.log(typeof(first))
// // console.log(0/2.3)
// // console.log(40/2.5)
// //x + 1n === x + 2n
// // console.log(joy + " " + first)

// function local(){
//     let best = 15
//     console.log(joy + best);

// }
// local()

//  console.log(best)

let introduction = "My name olupayimo Joy"


function local(){
    let age = 15
    console.log(introduction + age)
}

 let x = 10
 x+=5
 console.log(x)

 var text = "Hello ";
 text += "world"
 document.getElementById("p1").textContent = text

 c = 10
 g = "10";

var y = 12;
var z = "15"

let student = "Joy";
let teacher  = "Mr David";
let admin = "Dr";

//  a += u 
//   a = a + u
// a -= u a = a - u
// a *= u a = a * u
// a/=u

// a%=u a % u

// == equal
//console.log(c !== g && y !== z)

// if(c === g && y === z){
//     console.log("I ma the same");
// }else{
//     console.log("I am not the same")
// }

// if(student == "oy"){
//     console.log("I am a student")
// }else if(teacher == "M David"){
//     console.log("I am a teacher")
// }else if(admin == "D"){
//     console.log("I am admin")
// }else{
//     console.log("I am not a member")
// }

const toaddto = document.getElementById("addedValue");

function add() {
    const array = [];
    const added = document.getElementById('inputValue').ariaValueMax;
    if (arrary.includes(added)) {
        alert(`${added} is added`);
        return;
    } else {
        array.includes(added);
    }


    array.map((nifemi)  => {
          const divTag = document.createElement('div');
          const deleteButton =document.createElement('button');
          deleteButton.innerText = 'Delete';
          deleteButton.id = 'delete';
          divTag.innerText = nifemi;
          toAddTo.appendChild(divTag);
          divTag.appendChild(deleteButton);
          divTag.style.display = 'flex';
          divTag.style.gap = '20px';=
    }); 

}