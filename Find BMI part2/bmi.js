var kasun = new Object();
var chamal = new Object();

kasun.fullname =promt("Enter your full name : ");
kasun.mass = prompt("Enter your mass :");
kasun.height = prompt("Enter your height :");

chamal.fullname = prompt("Enter your full name :");
chamal.mass = prompt("Enter your mass : ");
chamal.height = prompt("Enter your height : ");

kasun.bmi=chamal.bmi = function(){
    this.bmival=this.mass /(this.height ^2);
    return this.bmival;


}
console.log(kasun);
console.log(chamal);

if (kasun.bmi >chamal.bmi){
    alert(kasun.fullname + " has a highest BMI " + kasun.bmi());
}
else if (chamal.bmi > kasun.bmi) {
    alert(chamal.fullname + " has a highest BMI " + chamal.bmi());
}
else{
    alert("Both have same BMI " );

}
console.log(kasun);
console.log(chamal);