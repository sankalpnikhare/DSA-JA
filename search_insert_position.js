let number  ; 
function insert(nums, target){
    for(let i = 0 ; i < nums.length ; i++){
        if(nums[i] == target){
            // let number  =  i ;  
            let number =  i ;
            return number
        }
    }
    if(!number){
        nums.push(target);
       nums.sort((a,b)=>a-b);
       for(let i = 0 ; i < nums.length ; i++){
        if(nums[i] == target){
            return i ; 
        }
       }
    

    }
    
}


let nums = [1,3,5,6] ; 
let target = 5;
console.log(insert(nums, target));
