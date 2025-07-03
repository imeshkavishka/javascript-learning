//creating function expression
var proffesion = function (name,job){
    switch(job){
        case 'doctor':
            console.log(name + 'IS a work with patients');
            break;
        case 'engineer':
            console.log(name + 'IS a work with machines');
            break;
        case 'teacher':
            console.log(name + 'IS a work with students');
            break;
        default:
            console.log(name + 'IS a work with something else');       
    }
}

console.log(proffesion('Imesh','engineer'));
console.log(proffesion('kavishka','doctor'));
console.log(proffesion('Nishan','teacher'));
console.log(proffesion('kamal','driver'));