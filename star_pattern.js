let n = 5;

for ( let i = 0 ; i < n ; i++ ){

    let row = " ";
    for (let j = 0 ; j < n ; j++){
        row = row + "*";
    }
    console.log(row)
}


for (let i = 0 ; i < n ; i++){
    let row = " " ;
    for (let j = 0 ; j<=i; j++){
        row = row + "*";
    }
    console.log(row);
}


for (let i = 0 ; i < n ; i++){

    let row = " ";
    for (let j = 0 ; j < n -(i+1); j++){
        row = row + " ";
    }

    for(let k = n-(i+1) ; k < n ; k++){
        row = row + "*";
    }
    console.log(row);


}

for(let i = 0 ; i< n ; i++){

    let row = " ";
    for (let  j = 0 ; j <= i ; j++){
        if(j%2==0){
            row = row +1 ;
        }
        else{
            row = row + 0
        }
    }
    console.log(row);
}
