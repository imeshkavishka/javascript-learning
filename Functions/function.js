//sum function
function sum(num1,num2){
    var value =num1+num2;
    console.log("The sum is: " + value);
    return value;
}
sum(51,46);

//birth yaer function
function age(birthyear){
    var age1 = 2025- birthyear;
    console.log("Your age is: " + age1);
    return age1;
}

console.log("Your age is: " + age(1990));

//retuye function
function retuyedate(firstname ,birthday){
    var date = age(birthday);
    var retuyedate = 60 - date;
    console.log(firstname+"retuyedate is: " + retuyedate);
    return retuyedate;
}

birthday("Imesh",1990);