//Function calling itself 
function fun(num){
    if (num==0){
        return ; 
    } 
    console.log(num);
    
    
    fun(num-1);
}

fun(5);

