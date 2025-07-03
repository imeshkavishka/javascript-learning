var tip = new Array();
var amount = new Array();

function calculateTip(bill) {
    var tip;
    if (bill >= 1000){
        tip = bill*(20/100);
    }
    else if (bill >=1000 && bill < 1500){
        tip = bill*(15/100);
    }
    else{
        tip = bill*(10/100);
    }
    tips.push(tip);
    amount.push(bill + tip);
    return tip;
}

console.log(calculateTip(1230));
console.log(calculateTip(982));
console.log(calculateTip(1640));

console.log(tips);
console.log(amount); 