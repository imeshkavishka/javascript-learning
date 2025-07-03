var result =80;

switch (true) {
    case result <=100 && result >=75:
        console.log("Grade A");
        break;
    case result <=74 && result >=55:
        console.log('Grade B');
        break;
    case result <=54 && result >=45:
        console.log('Grade C');
        break;
    case result <=44 && result >=35:
        console.log('Grade S')
        break;
    default:
        console.log('Grade F')
}