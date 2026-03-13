function zeroes_end(arr){
    let k = 0;
    let new_arr = [];

    for(let i = 0 ;i< arr.length ;i++){
        if(arr[i]==0){
            
            k +=1 ;
            
        }
        else{
            new_arr.push(arr[i]);
        }

    }
    for(let j = 0 ; j<k ;j++){
        new_arr.push(0);
    }

    
    return new_arr;

    
}


let arr = [0,1,0,2,3];
console.log(zeroes_end(arr));
