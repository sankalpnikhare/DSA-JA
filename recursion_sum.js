let sum = 0 ;
let i = 0  ; 

function sum1(arr){
    if(i==arr.length){
        return sum ; 
    }
    sum += arr[i];
    i++;
    return sum1(arr);


}
let arr = [1,2];
console.log(sum1(arr));
