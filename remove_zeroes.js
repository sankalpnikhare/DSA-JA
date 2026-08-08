function rem_zero(arr){
    let hash = {} ; 
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i]!== 0 ){
            hash[arr[i]] = true ;
        }
    }
    return Object.keys(hash)
}
//another way
function remove_zero(arr){
    for(let i =  0 ; i < arr.length ; i++){
        if(arr[i]===0){
            arr.splice(i ,1 );
            i-- ; 
        }
    }
    return arr ; 
}

let arr = [1,2,3,0,4 , 0];
console.log(remove_zero(arr));
