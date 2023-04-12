var myArr;

const data = {"Eyal": [
    { "name": "eyal", "age": 14, "city": "typicode" }
  ]};

fetch("data2.json")
    .then((res) => res.json())
    .then((j) => {
        myArr = Object.values(j);
        myArr.sort(function (a, b) {
            // by age
            // return a.value - b.value;
            // by name
            if (a[0].name < b[0].name) {
                return -1;
            }
            if (a[0].name > b[0].name) {
                return -1;
            }
        });
    })
    .then((x) => {        console.log(myArr); 
    });

fetch("data2.json",{
    method:'POST',
    headers: {
        'Content-Type':'application/json',
    },
    body:JSON.stringify(data),
})
    .then((res) => res.json())
    .then(x=>console.log(x));



// .then(response=>{

// //var count =Object.keys(response).length;

// Object.keys(response).forEach(function(key) {
//     var value = response[key];
//    // document.getElementById("myData").innerHTML = (value[0].name+", "+value[0].age);

//    var newP = document.createElement("p");
//     var textNode = document.createTextNode((value[0].name+", "+value[0].age));
// 	newP.appendChild(textNode);
//     document.getElementById("firstP").appendChild(newP);
// });

// });

function myFunction() {
    var x = document.getElementById("mySelect").value;

    document.getElementById("demo").innerHTML = "You selected: " + x;

    myArr.sort(function (a, b) {
        if (x == "name") {
            if (a[0].name < b[0].name) return -1;

            if (a[0].name > b[0].name) return 1;
        } else if (x == "age") {
            return a[0].age - b[0].age;
        } else if (x == "pupularty") {
        }
    });

    console.log(myArr);

    myArr.forEach(function(key) {

        document.getElementById("demo").innerHTML = key[0].name+", "+key[0].age;
        var newP = document.createElement("p");
        var textNode = document.createTextNode((key[0].name+", "+key[0].age));
        newP.appendChild(textNode);
        document.getElementById("firstP").appendChild(newP);
    });



}

function addRows() {
    var table = document.getElementById( 'myTable' ),
        row = table.insertRow(0),
        cell1 = row.insertCell(0),
        cell2 = row.insertCell(1);
  
    cell1.innerHTML = 'Cell 1';
    cell2.innerHTML = 'Cell 2';
  }