function missing_number(arr){
    let n = arr.length ;
    let expected_sum = n * (n+1) /2 ;
    let actual_sum = 0 ;

    for(let i = 0 ; i<arr.length ; i++){
        actual_sum += arr[i];
    }
    return expected_sum - actual_sum ; 
}