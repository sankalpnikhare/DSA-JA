function countdigit(number){

    let str = String(number);//Typcaste the integer into string
    return str.length;
}

let number = 123;
console.log(countdigit(number));


function countingdigit(n){

    let count = 0;
    while(n > 0){
        n = Math.floor(n/10);
        count++;
    }
    return count;
}
let n = 1 ;
console.log(countingdigit(n));