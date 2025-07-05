//bubbling 
document.getElementById('myP1').addEventListener('click',
    function(){
        alert("You Clicked the white element");
    }, false);

document.getElementById('myDiv1').addEventListener('click',
    function(){
        alert('You clicked the orange element');
    },flase
);

//capturing
document.getElementById('myP2').addEventListener('click',
    function(){
        alert('You clicked the white element');
    },true
);
document.getElementById('myDiv2').addEventListener('click',
    function(){
        alert("You clicked the orange element")
    },true
);


//remove the event listeners
function myFunc(){
    alert('Button has clicked');
}

//add
document.getElementById('ev-btn').addEventListener('click',myFunc);

//remove
document.getElementById('rm-btn').addEventListener('click',
    function(){
        document.getElementById('ev-btn').removeEventListener('click',myFunc);
        console.log('Event has removed');
    }
);

//diferent types of events for mouse

var btn = document.getElementById('t-btn');

// btn.addEventListener('click',typeofEvent1);
// btn.addEventListener('dbclick',typeofEvent1);
// btn.addEventListener('mousedown',typeofEvent1);
// btn.addEventListener('mouseup',typeofEvent1);

btn.addEventListener('mouseenter',typeofEvent1);

function typeofEvent1(e){
    console.log('Event type : '+e.type);

    document.querySelector('#box h2').textContent= 'Mouse X : '
    +e.offsetY+','+e.offsetX;

    document.body.style.backgroundColor = 'rgba('+e.offsetX+','
    +e.offsetY+','+e.offsetX+')';
}



//diferent type of events for keybord

//var keyInput = document.querySelector('input[type="text"]');
//  keyInput.addEventListener('keydown',typeofEvent2);
//  keyInput.addEventListener('keyup',typeofEvent2);
//  keyInput.addEventListener('keypress',typeofEvent2);
//  keyInput.addEventListener('focus',typeofEvent2);
//  keyInput.addEventListener('bulr',typeofEvent2);
//  keyInput.addEventListener('copy',typeofEvent2);

//keyInput.addEventListener('cut',typeofEvent2);
//keyInput.addEventListener('input',typeofEvent2);


//--other different types of events
//-select
var select = document.querySelector('select');

//select.addEventListener('change',typeOfEvent);
select.addEventListener('input',typeofEvent3);

function typeofEvent3(e){
    console.log('Event type : '+e.type);
    console.log('Value : '+e.target.value);
}

//--form
var form = document.querySelector('form');

form.addEventListener('submit', typeOfEvent4);

function typeOfEvent4(e){
    e.preventDefault();
    console.log('Event type : '+e.type);
}