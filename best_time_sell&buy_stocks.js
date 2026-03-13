
function buy_sell(arr){
    let min = 0 ;
    let max = 0;

    for(let i = 0 ; i < arr.length ; i++){


        for(let j = i ; j < arr.length ; j++){

        }
    }
}















// function buy_sell(arr){


//     let min = arr[0];
    
//     let index = 0 ;

//     for(let i = 0 ; i < arr.length ; i++){
//         if(arr[i] < min ){
//             min = arr[i];
//             index = i ; 


//         }
//         // else if(arr[i] ==  min){
//         //     min = arr[i];
//         //     index = i; 
//         // }
        
//     }
//     let max = arr[index];

//     for(let j = index ; j < arr.length ; j++){
//         if(arr[j] > max){
//             max = arr[j];
//         }
//     }
//     if(index == arr.length - 1){
//         return 0;
//     }
//     return max - min ;
// }

let arr = [7,1,5,3,6,4];
console.log(buy_sell(arr));
