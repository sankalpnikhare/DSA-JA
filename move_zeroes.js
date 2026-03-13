function move_zeroes(arr){
    j=0;
    

    for(let i = 0 ; i < arr.length  ; i++){
        

        if(arr[i]!= 0){
            arr[j] = arr[i];
            j += 1;
        
        }
        


        
    }
    for( let k = j   ; k < arr.length; k++){
        arr[k] = 0 ;
        
    }
    return arr;

}

let arr = [0,1,0,3,4,0,5 , 0 , 0];
console.log(move_zeroes(arr));


// Leetcode
// var moveZeroes = function(nums) {
//     let j = 0 ;
//     for(let i = 0 ; i < nums.length ; i++){
//         if(nums[i] !== 0){
//             nums[j] = nums[i];
//             j ++ ;
//         }
        
//     }
//     for(let k = j ; k < nums.length ; k++){
//             nums[k] = 0 ;
//     }
//     return nums ;
    
// };
