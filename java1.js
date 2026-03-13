function reverseinteger(number){
    let numberCopy = number ;
    let rev = 0;
    let numberabs = Math.abs(number);
    

    while(numberabs>0){
        let rem = numberabs%10;
        rev = (10*rev) + rem;
        numberabs = Math.floor(numberabs/10);
        
    }
    return (numberCopy<0) ? -rev : rev;

}
let number = 1234;
let result = reverseinteger(number);
console.log(result);