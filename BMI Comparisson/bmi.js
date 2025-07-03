var mass,height,bkim,bmic,isKasun;

//kasun's BMI
mass =prompt("Enter your mass in kg : ");
height =prompt("Enter your height in m : ");
bkim = mass / (height * height);

//Chamals BMI
mass =prompt("Enter Chamals mass in kg : ");
height =prompt("Enter Chamals height in m : ");
bmic = mass / (height * height);

isKasun = (bkim > bmic);
alert(isKasun);
