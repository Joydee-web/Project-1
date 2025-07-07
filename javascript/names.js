// const names = ["Joy", "Nifemi", "Alex", "Ogunks", "Damilola", "Olabode", "Tiffany", "Jason", "Virony", "Kay"]
// const scores =[98, 50, 70, 20, 80, 59, 69, 72, 37, 95] 

// names.forEach((name) => {
//     console.log(name);
// });


// const objarray = [
//     {
//         pname: "Joy",
//         score: 98
//     },
//     {
//         pname: "Damilola",
//         score: 77
//     },
//     {
//         pname: "Jasonn",
//         score: 50
//     },
//     {
//         pname: "Tiffany",
//         score: 20
//     },
//     {
//         pname: "Ore",
//         score: 70
//     },
//      {
//         pname: "Ore",
//         score: 70
//     },
//      {
//         pname: "Ore",
//         score: 70
//     },
//      {
//         pname: "Ore",
//         score: 70
//     },
//      {
//         pname: "Ore",
//         score: 70
//     },
//     {
//         pname: "Ore",
//         score: 70
//     },
// ]




// let tbody  = document.getElementById("tbody");

// objarray.map((obj) => {
//     let tr = document.createElement("tr");
//     tbody.appendChild(tr);
//     let tdata_pname = document.createElement("td");
//     tdata_pname.innerHTML = obj.pname;
//     let tdata_score = document.createElement("td");
//     tdata_score.innerHTML = obj.score * 50 / 100;
//     tr.appendChild(tdata_pname);
//     tr.appendChild(tdata_score);
// });



const toAddTo = document.getElementById('addedValue');

const toaddimgto = document.getElementById('newestdiv');
const imgTag = document.createElement('img');
imgTag.src = "../images/java.jpg";
imgTag.height = '200'
imgTag.width = '200'
toaddimgto.appendChild(imgTag);



function handleAdd() {
    const arr = [];
    const added = document.getElementById('inputValue').value;
    if (arr.includes(added)) {
        alert(`${added} is included`);
        return;
    } else {
        arr.push(added);
    }

    function handleDelete(index) {
        arr.splice(index, 1)
    }


    arr.map((av) => {
        const divTag = document.createElement('div');
        const pTag = document.createElement('p');
        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.id = 'delete';
        pTag.innerText = av;
        toAddTo.appendChild(divTag);
        divTag.appendChild(pTag);
        divTag.appendChild(deleteButton);
        divTag.style.display = 'flex';
        divTag.style.gap = '20px';
    });

    // const toDelete = document.getElementById('delete');

    return false;
}
//     const para = document.createElement("p");
    //     const node = document.createTextNode("This is new");
    //     para.appendChild(node);
    //     const element = document.getElementById("div1")
    //     element.appendChild(para);
    //     const child = document.getElementById("p1");
    //     element.insertBefore(para,child);