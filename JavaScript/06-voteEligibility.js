console.log("***** Vote Eligibility *****");
var voteEligibilty = function (age){
    if(age==null || age<=0 || age > 130){
        console.log(`Invalid Data: ${age}`);
    }
    else{
        //valid data
        if(age>=18){
            console.log(`Age is ${age} & eligible for vote`); 
        }
        else{
            console.log(`Age is ${age} & not eligible for vote`);  
        }
    }
}
voteEligibilty(45);    
voteEligibilty(17);    
voteEligibilty(8);     
voteEligibilty(20);    
voteEligibilty(-10);   
voteEligibilty(200);   
voteEligibilty(0); 
voteEligibilty(null);
voteEligibilty(undefined);