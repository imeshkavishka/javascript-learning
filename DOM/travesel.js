//perant node
console.log(DataTransferItemList.parentNode);
DataTransferItemList.parentNode.style.backgroundcolor = '#afafaf';
console.log(DataTransferItemList.parentNode.parentNode);

//parent element
//Most of the time similar to parentNode
console.log(itemsList.parentElement);
console.parentElement.style.backgroundColor = '#afafaf';
// console.log(itemsList.parentElement.parentElement);

//child nodes
console.log(itemsList.childNodes);
console.log(itemsList.childNodes[0]);

//children
console.log(itemsList.children);
console.log(itemsList.children[0]);

//first element child
console.log(itemsList.firstElementChild);
itemsList.firstElementChild.style.backgroundColor = '#afafaf';

//last child 
//work like childnodes
console.log(itemsList.lastChild);

//last element child
console.log(itemsList.lastElementChild);
itemsList.lastElementChild.style.backgroundColor = '#afafaf';

//next sibling
//work like childnodes
console.log(itemsList.nextSibling);

//next element sibling
console.log(itemsList.nextElementSibling);
itemsList.nextElementSibling.style.backgroundColor = '#afafaf';

//previous sibling
//work like childnodes
console.log(itemsList.previousSibling);

//previous element sibling
console.log(itemsList.previousElementSibling);
itemsList.previousElementSibling.style.backgroundColor = '#afafaf';

//------------------------

//create an element
//create an input
var input = document.createElement('input');

//add a class
input.className = 'test';

//add an id
input.id = 'test';

//add an attribute
input.setAttribute('type', 'text');
console.log(input);

//create a div
varnewDiv = document.createElement('div');

//create a text node
var newDivText = document.createTextNode('Hello World');

//add text to div
newDiv.appendChild(newDivText);
console.log(newDiv);

//insert creatdc elements to the document
var form = document.querySelector('.frm form');
var button = document.querySelector('.frm form button');

input.style.backgroundColor = '#afafaf';
form.insertBefore(input, button);

