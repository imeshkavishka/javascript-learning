function findLargest(a,b,c){
    try{
        if (typeof(a) !=='number'|| typeof(b)!=='number' || typeof(c)!=='number') {
            throw "Error : All inputs must be numbers";

        }
        else if(a==b || a==c || b==c){
            throw "Error : All inputs must be different";
        }
        else{
            if(a>b && b>c){
                console.log("A is the Largest number" );
            }
            else if(b>a && b>c){
                console.log("B is the Largest number" );
            }
            else if(c>a && c>b){
                console.log("C is the Largest number" );
            }
            else{
                console.log("Invalid input");
            }
        }
    }
    catch(err){
        console.log(err);
    }
    finally{
        console.log("Input values are: "+a+", "+b+", "+c);
    }
}
findLargest(10,20,30);
findLargest(10,20,"30");