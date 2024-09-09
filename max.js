function getMax(num1, num2){
    if(num1 > num2){
        return num1;
    }
    else{
        return num2;
    }
}
const Max1 = getMax(56, 76);
const Max2 = getMax(72, 96);
const ultimateMax = getMax(Max1, Max2);
console.log(ultimateMax);


// ************************************************


function getIntoThreeMax(num1, num2, num3){
    if(num1 > num2 && num1 > num3){
        return num1;
    }
    else if(num2 > num1 && num2 > num3){
        return num2;
    }
    else{
        return num3;
    }
}
const maxInThree = getIntoThreeMax(112, 88, 20);
console.log(maxInThree);


// ***********************************

const max = Math.max(4, 3, 8, 11, 9, 7, 2, 6);
console.log(max);