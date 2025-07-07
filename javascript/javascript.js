// // let introduction = "My name olupayimo Joy";
// // let about = "I am 25yrs old adveenture-seeker from Lagos, Nigeria."

// // // let intro = document.getElementById("intro");

// // function local(){
// //     let state = "I base in Canada";
// //     console.log(introduction + " " + about + " " + state);
// //     // intro.innerHTML = `${introduction}, Hello World`;
// // // }//

// // local();

// let soap = 500;
// let sugar = 500;
// let salt = 500;
// let newt = 0;
// let total= soap + sugar + salt;

// if(soap >= 500 && sugar >= 500 && salt >= 500){
//     // bt = bonus * total
//    console.log(total + (10/100 * total));
// } else {
//     newt = soap + sugar + salt;
// }

// //console.log("bonus: " + bt);
// //console.log("new total: " + newt);

// let calculatedPrice = document.getElementById("price");
// function Calculate() {
//     let sugar = document.getElementById("sugar");
//     let soap = document.getElementById("soap");
//     let salt = document.getElementById("salt");
//     let water = document.getElementById("water");
//     let totalPrice = 0;
//     if (sugar.checked) {
//         totalPrice += 500;
//     }
//     if (soap.checked) {
//         totalPrice += 500;
//     }
//     if (salt.checked) {
//         totalPrice += 500;
//     }
//     if (water.checked) {
//         totalPrice += 200;
//     }
//     calculatedPrice.innerHTML = totalPrice;
//     return false;
// }

function Calculate () {
    let sugar = document.getElementById("sugar").value;
    let sugar_price = Number(sugar);
    let salt = document.getElementById("salt").value;
    let salt_price = Number(salt);
    let soap = document.getElementById("soap").value;
    let soap_price = Number(soap);
    let bonus = 10/100;
    let total = Number(sugar_price + salt_price + soap_price);
    let discount = 0;

    let showTotalPrice = document.getElementById("totalprice");
    let showDiscount = document.getElementById("discount");
    let showCalculated = document.getElementById("calculated");
    let newtotal;

    if (sugar_price >= 500 && salt_price >= 500 && soap_price >= 500) {
        discount = total * bonus;
        newtotal  = total  - discount;
    } else {
        newtotal = total;
    }
    showTotalPrice.innerHTML = total;
    showDiscount.innerHTML = discount;
    showCalculated.innerHTML = newtotal;
    return false;
}