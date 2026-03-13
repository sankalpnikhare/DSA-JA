function remove_element(arr,val){

    let x =0 ;
    for(let i =0 ; i < arr.length ; i++){
        if(arr[i] !== val){
            arr[x] = arr[i];
            x = x+ 1;

        }

        return x ;
    }


}


let arr =[1,2,3,4,5,6,2,1,4];
let val = 2 ;
console.log(remove_element(arr,val));
