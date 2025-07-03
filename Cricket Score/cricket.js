var score1 ,score2 ,score3 ,SriAVG , EngAVG ;

//SriLanka Score
score1=parseInt(prompt("Enter Sri Lanka Score: "));
score2=parseInt(prompt("Enter Sri Lanka Score: "));
score3=parseInt(prompt("Enter Sri Lanka Score: "));

SriAVG=(score1+score2+score3)/3;

//England Score
score1=parseInt(prompt("Enter England Score: "));
score2=parseInt(prompt("Enter England Score: "));
score3=parseInt(prompt("Enter England Score: "));

EngAVG=(score1+score2+score3)/3;

if (SriAVG>EngAVG){
    alert('Sri Lanka is Won | Average Score is ' + SriAVG);
    console.log('Sri Lanka is Won | Average Score is ' + SriAVG);
}
else if (SriAVG<EngAVG){
    alert('England is Won | Average Score is ' + EngAVG);
    console.log('England is Won | Average Score is ' + EngAVG);
}
else {
    alert('Match is Drawn' );
    console.log('Match is Drawn' );
}