
// function multiply(num1, num2){
//     if(typeof num1 !== 'number' || typeof num2 !== 'number'){
//         return 'please provide a number';
//     }
//    const mult = num1 * num2;
//    return mult; 
// }
// const result = multiply('7', 5)
// // console.log(result);


// ******************************

// function fullName(first, second){
//     if(typeof first !== 'string'){
//         return ' please provide first string name.'
//     }
//     else if(typeof second !== 'string'){
//         return 'please provide second string name.'
//     }
//     const full = first + ' ' + second;
//     return full;
// }
// const resultName = fullName('khokan', 'chakma');
// console.log(resultName);

// ************************
 
function getPrice(products){
    if(typeof products !== 'object'){
        return 'please provide a object.'
    }
    const price = products.price;
    return price;
}
const price = getPrice({name: 'fish', price: 150, color: 'white'});
console.log(price);