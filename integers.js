let obj = {          //checked
    name:"Sankalp", 
    arr:[1,2,3,4,5],
    age:20,

}
console.log(obj.age)


let arr= [1,2,[2,3,4,[10,3,3,9]]];
console.log(arr);

function sum(a,b){        //checked
    let sum = a + b;  
    return sum;

}

function square(num){       //checked
    let square = num * num ; 
    return square ;

}

function voting(age){    //checked
    if (age = 0){
        console.log("Invalid Input");

    }
    else if(age >= 18){
        console.log("Yes, You are eligible for vote");
    }
    else{
        console.log('Sorry you are not eligible for vote');
    }

}
for (let i= 0;i<5 ; i++){
    console.log("Hello therer")
}

function oddoreven(num){               //checked
    if (num%2==0){
        console.log("The number is even");  
    }
    else{
        console.log("The given number is odd");
    }
}


console.log(sum(5,10));
console.log(square(2));
console.log(voting(20));
console.log(oddoreven(2));


function infiniteloop(){              //checked
    for(let i = 1 ; i>0 ; i++){
        console.log(i);
    }
}

let arr2 = [1,2,3,4,5,6,7,"Dum"]

for (let i = 0 ; i < arr2.length ; i++){
    if (arr2[i]%2 == 1){
        console.log(arr2[i])
    }
}

function searchelement(integer){            //checked
    for (let i = 0 ; i < arr3.length ; i++){
        if (arr3[i] == integer){
            index = i
            return index
        }
        else{
            return -1
        }
    }
}

arr3 = [1,2,3,4,5]
searchelement(3)

function reversestarpattern(limit){             //checked
    for (let i = 0; i< limit ;i++){
    let row = '';
    for(let j = 0 ; j<limit-(i+1);j++){
        row = row + " ";
    }
    for(let k = 0 ; k<i+1;k++){
        row = row + "*";
    }
    console.log(row);
}
}
limit = 5;
reversestarpattern(limit);


function onezerostarpattern(limit){   //checked
    for(let i = 1; i <=limit ; i++){
        let row = '';

        for(let j = 1 ; j<=i ; j++){
            if(j%2===0){               //odd or even differ
                row = row + "0";
            }
            else{
                row = row + "1";
            }
        }
        console.log(row)
    
    }
}

onezerostarpattern(limit);


function onezerostarpattern2(limit){    //checked
    for (let i = 0 ; i<=limit ; i++){
        let row = '' ; bit = '1' ;

        for (let j = 0; j<=i ; j++){
            row = row + bit;
            if (bit == '1'){
                bit = 0;
            }
            else{
                bit = 1;
            }
        }
        console.log(row);
    }
}

onezerostarpattern2(limit);

function countdigit(number3){   //checked ,,, existing varibale names overlapped
    let counter = 0;
    if (number ==0 ) return 1;
    number3 = Math.abs(number3) //converting negative to positive
    while(number3 > 0){
        number3 = Math.floor(number3/10);
        counter = counter + 1;
    }
    return counter ;
}
let number3 = 345;
countdigit(number3);
//second way

function countdigit1(number4){
    let num = number4.toString().length;     //checked ,,, existing varibale names overlapped
    console.log(num);
}
let number4 = 23545;
countdigit1(number4);
