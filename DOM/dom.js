// console.dir(document);

// //get properties
// console.log(document.url);
// console.log(document.charset);
// console.log(document.lastModified);
// console.log(document.title);
// console.log(document.doctype);

// console.log(document.head);
// console.log(document.body);

// console.log(document.all);
// console.log(document.all[11]);

// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);

// //change the values
// document.title= "Document object model";
// console.log(document.title);

// //not the best way
// document.all[11].textContent="Shopping Item List";
// console.log(document.all[11]);


//chane the back color of all the list items
for(var i of li){
    length.style.backgroundColor = "lightblue";
}

//select elements using Query selector

var hd = document.querySelector('#navbar');
hd.style.norder = 'solid 1px #000';

var input = document.querySelector('input');
input.style.backgroundColor='#ebca14';
input.value='paint bucket';

//class selector 
var items= document.querySelector('.items');
items.style.backgroundColo= '#ebca14';

//mix selector
var it = document.querySelector('div .frm #frmt');
it.style.color = 'ebca14';


//select all elements
var hd = document.querySelectorAll('#hdt');
console.log(hd);

var dv =documet.querySelectorAll('div');
console.log(dv);

//class
//ID
var mx = document.querySelectorAll('.items');
console.log(mx);

//pseudo classes
var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');
console.log(odd);
for (var i of odd){
    i.style.backgroundColor = '#ebca14';
}
for(var i of even){
    i.style.backgroundColor = '#1422eb';
}