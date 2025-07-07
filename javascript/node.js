// const para = document.createElement("p");
// const node = document.createTextNode("This is new");
// para.appendChild(node);
// const element = document.getElementById("div1")
// element.appendChild(para);

// const myCollection = document.getElementsByTagName("p");
// document.getElementById("node").innerHTML = "The innerHTML of the other collection is: " + myCollection[1].innerHTML;
//const myCollection = document.getElementsByTagName("p");
//document.getElementById("demo").innerHTML = "The innerHTML of the second paragraph is: " + myCollection[0].innerHTML;
// const myCollection = document.getElementsByTagName("p");

// document.getElementById("node").innerHTML = "This document contains " + myCollection.length + " paragraphs.";  const toAddTo = document.getElementById('addedValue');

const toAddTo = document.getElementById('addedValue');

const toaddimgto = document.getElementById('newestdiv');
const imgTag = document.createElement('img');
imgTag.src = "../images/java.jpg";
imgTag.height = '200'
imgTag.width = '200'
toaddimgto.appendChild(imgTag);
