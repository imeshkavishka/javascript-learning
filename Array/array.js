var array =["ruwan","Nimal","Amara","Piyal"];
var marks = new Array(5,10,15,20,25);

console.log(array);
console.log(marks.length);

console.log(array[0]+"Have a "+marks[0]+" marks for the exam");


marks[0]=30;
array[0]="Ruwan Perera";

marks[marks.length]=35;
console.log(array);
console.log(marks);

//for add value to the end of the array
marks.push(40);

//for remove value from the end of the array
array.pop();

//for add the value to the beginning of the array
array.unshift("Kamal");

//for remove the value from the beginning of the array
array.shift();
console.log(array);
console.log(marks);
