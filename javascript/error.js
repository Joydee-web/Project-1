// function textMe(){
//     const message = document.getElementById("error");
//     message.innerHTML = "";
//     let k = document.getElementById("inpu").value

// try{
//     if(k.trim() == "") throw "empty";
//     if(isNaN(k)) throw "Not a number or value must be a number";
//     if(k < 5) throw "value must not less than 5";
//     if(k > 10) throw "Value must not be more than 10";
// }catch(err){
//     message.innerHTML = "input is " + err
//     //document.getElementById("error").innerHTML= err.message
// // }finally{
// //     document.getElementById("inpu").value = "";
// // }
// }
// }

function ValidateForm(){
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message");

    

    try {
        if(username.length !== 10) throw "username must be 10 characters"; 
        if(!/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10}$/.test(username)){
            throw "username must contain only lowercase letters, numbers and special characters";
        }
        if(username !== username.toLowerCase()){
            throw "username must be in lowercase"
        }
        if(password.length !== 8) throw "password must be 8 characters";
        if(password !== password.toLowerCase()){
            throw "password must be in lowercase"
        }
        if (!email.includes('@')) {
            throw "Email must contain '@'.";
        }
        if (email !== email.toLowerCase()) {
            throw "Email must be in lowercase.";
        }

        console.log('Ok');
        alert('Ok');

    } catch (error) {
        message.innerHTML = 'Error: ' + error;
    }
}


function best(){
   // document.body.style.backgroundColor ="red"
  const en =document.getElementById("click");
  en.innerText = 2 + 30;
  en.style.color = "red";
  en.style.fontSize = "20px";
  
}

document.getElementById("btn").style.backgroundColor = "black";
