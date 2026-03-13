function rev_string(arr){


    let left = 0 ;
    let right = arr.length - 1;

    while(left < right){
        [arr[left] , arr[right]] = [arr[right] , arr[left]];
        left += 1 ;
        right -= 1 ;
        
    }
    return arr;
}
let str = ["h" ,'a' , 's ', 'f'];
console.log(rev_string(str));
