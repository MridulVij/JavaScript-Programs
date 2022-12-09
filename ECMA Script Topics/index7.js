// Arrays in js

// declaration of Arrat -> var array_name = [];

// 1. Traversing of Array in js
var myName = ['Mridul', 'vij', 'M', 'R', 'I', 'D', 'U', 'L'];


//method 1
console.log("Method 1");
for(var i=0; i<myName.length; i++){
    console.log(myName[i]);
}

//method 2
// "for of loop" used for elements printing
console.log("Method 2");
for(let elements of myName){
    console.log(elements);
}

//method 3
// "for in loop" used for index printing
console.log("Method 3");
for(let index in myName){
    console.log(index);
}

//method 4
// for each loop to get element, index etc
console.log("Method 4");
myName.forEach(function(element, index, array){
    console.log(element + "Index: " + index + " " + array)
});


// 2. Searching and Filter in an Array
