// //Function calling itself 
// function fun(num){
//     if (num==101){
//         return ; 
//     } 
//     console.log(num);
    
    
//     fun(num+1);
// }
// let n = 1 ; 
// fun(n);
function sum(n){
    if (n==0) return 0 ;
    return n + sum(n-1);
}
console.log(sum(5));

// console.log("Exprected value" , 5*(6) / 2);


