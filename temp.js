function duplicates(arr){

    arr.sort((a,b)=> a -b );
    
    let new_arr = [];
    for(let i = 0 ; i < arr.length ; i++){
        let k =0 ;
        for(let j =  0 ; j < arr.length ; j++){
            if(i !==j && arr[i] === arr[j]){
                k ++ ; 
                

            }


        }
        if(k > 0  && new_arr[new_arr.length -1 ] !== arr[i]){
            new_arr.push(arr[i]);
        }
        
    }
    return new_arr;
}

let arr = [2,3,1,2,3];
console.log(duplicates(arr));
