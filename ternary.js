// // general problem solve

const age = 19;

if (age > 18 ){
    console.log('YES! you can vote')
}
else{
    console.log('NO! you cannot vote')
}


// ternary problem solve 
age > 18 ? console.log('you can vote') : console.log('you cannot vote');


// general problem solve 
const isLeader = true;
let price = 1500;

if (isLeader === true){
    price = 0;
}
else{
    price = price + 100
}
console.log(price)


// ternary problem solve 
price = isLeader === true ? console.log(0): console.log(price + 100);


// general problem solve
if(isLeader === true ){
    if(price > 1000){
        price = price / 2
    }

    else{
        price = 0;
    }
}

else{
    price = price * 2
}


// ternary problem solve 
price = isLeader === true ? price > 1000 ?  price / 2 : 0 : price * 2
console.log(price)