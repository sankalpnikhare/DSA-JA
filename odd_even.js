

function oddeven(number){

    // let num = Math.floor((number/2) * 2);

    if(Number.isInteger(number/2)){
        return "The number is even";

    }
    else{
        return "The number is odd"


    }
}

// let number = 2 ;
// console.log(oddeven(number));

function odd_or_even(number){

    if(number%2 == 0){
        return "The number is even";
    }
    else {
        return "The number is odd";
    }
}

// let number = 3; 
// console.log(odd_or_even(number));