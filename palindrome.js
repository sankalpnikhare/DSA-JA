

function palindrome(number){
    
    let rev = 0;
    let original = number ;

    while(number > 0){
        let rem = number%10;
        rev = (10*rev) + rem;
        number = Math.floor(number/10);

    }
    if(rev == original){
        return true;
    }
    return false;
    
    
}

let number = 12;
console.log(palindrome(number));
