function rev_int(x){

    let rev = 0 ;
    if(x < 0){
        rev = parseInt(String(x).slice(1).split('').reverse().join('')) * -1 ;
    }
    else {
        rev = parseInt(String(x).split('').reverse().join('')) ;
    }

    return ( -2147483648 > rev || rev > 2147483647)? 0: rev ;

    
}


let x = 234234238475 ;
console.log(rev_int(x));