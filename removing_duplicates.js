function rem_duplicate(arr){
    let x = 0 ;
    // let k = 1;

    for(let i = 0 ; i < arr.length ;i++){

        if(arr[i] > arr[x]){
            x =x + 1;
            arr[x] = arr[i];
            
        }
    }
    return x+1;
    

    


   

}

let arr = [2,2,3,3,4];
console.log(rem_duplicate(arr));


// let arr = [];
// console.log(arr[-1]);