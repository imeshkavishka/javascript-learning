//An html event can be somthing like a button click, a mouse hover, or a key press.

//intergrated fnction
var button1 = document.getElementById('c-btn').addEventListener('click', function() {
    alert('Button clicked!');
});

//named function
document.getElementById('c-btn').addEventListener('mouseout',txtChange);

function txtChange() {
    alert('Mouse Out!');
    document.getElementById('hdt').textContent = 'Mouse Out!';

}

//parameterized Function
document.getElementById('i-btn').addEventListener('click', function() {
    changeListBack('Hello');
});

function changeListBack(x) {
    document.getElementById('li-items').style.backgroundColor = 'lightblue';
    document.getElementById('li-items').firstElementChild.textContent = x;
}

//event parameters
 var button2 = document.getElementById('e-btn').addEventListener('click',clickBtn);

 function clickBtn(e) {
    console.log(e);
    console.log(e.target);
    console.log(e.target.id);
    console.log(e.target.className)
    console.log(e.target.type)
    console.log(e.type);

    //output
     var output = document.getElementById('output');
     output.innerHTML = '<H4>Class name : '+e.target.classList[0]+'</H4>';

     //clicking position
     console.log(e.clientX);
     console.log(e.offsetY);

     //check key press
     console.log(e.altKey);
     console.log(e.ctrlKey);
     console.log(e.shiftKey);
 }

 