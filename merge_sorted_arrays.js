// function merge(arr1,arr2){

    
//    let m = 4;
//    let n = 2 ;

//     let result =  [] ; 
//     for(let i = 0  ; i < m   ; i++){
//         result.push(arr1[i]);

//     }
//     for(let i = 0 ; i< n ; i++){
//         result.push(arr2[i]);
//     }

//     return result.sort((a,b)=>a-b)
// }
// let arr1 = [1,2,3,5 , 0 , 0];
// let arr2 = [4, 6 , 0]
// console.log(merge(arr1,arr2));


let c = 0 ;
function merge(arr1,m,arr2,n){
    for(let i = m ; i < arr1.length ; i++){
        arr1[i] = arr2[c];
            c++ ; 
    }
    return arr1.sort((a,b) => a - b) ;
}

let arr1 = [1,2,3,5 , 0 , 0];
let arr2 = [6 , 4 , 0]
console.log(merge(arr1,4 ,arr2 , 2));