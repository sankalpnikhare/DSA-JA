function max_consecutive(arr){

    let curr_count = 0;
    let max_count = 0 ;
    for(let i = 0  ; i<arr.length ; i++){
        if(arr[i]== 1){
            curr_count ++ ; 

        }else{
            max_count =  Math.max(curr_count , max_count);

        }
    }
    return Math.max(curr_count , max_count)
}