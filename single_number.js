function single_number(arr){
    let hash = {};

    for(let i = 0 ; i < arr.length ; i++){
        if(!hash[arr[i]]){
            hash[arr[i]]= 1;
        }else{
            hash[arr[i]]++;
        }

    }
    for(let i = 0 ; i <arr.length ;i++){
        if(hash[arr[i]]==1){
            return arr[i];
        }
    }
}