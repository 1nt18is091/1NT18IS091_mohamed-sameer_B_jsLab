// Title:Loops and array
// Description:for loops and arrays
// Author:Mohamed Sameer@1NT18IS091
//  Date: 21/5/21 

let person=[{
    name:"Sameer",
    age:20
},
{
    name:"Adi",
    age:60
}]


arr.forEach(element => {
    console.log(`${element}`);
});

for(let i=0;i<person.length;i++){
    if(person[i].age<=20){
        console.log(person[i].name+"is young")
    }
    else{
        console.log(person[i].name+"is old")
    }
}

var findName=prompt("Enter name to find:")

for(let i=0;i<person.length;i++){
    if(person[i].name=== findName){
        console.log("found you!")
    }
    else{
        console.log("Sorry couldnt find you")
    }
}

