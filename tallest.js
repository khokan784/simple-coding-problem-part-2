// ******max************
const heights =[45, 81, 64, 25, 75, 54, 68, 99, 38];
function getTallest(numbers){
    let max = numbers[0];
    for(const num of numbers){
        if(num > max){
            max = num;
        }
    }
    return max;
}
const tallest = getTallest(heights);
console.log('max number is:',tallest);

// *******min**********************

function getMin(numbers){
    let min = numbers[0];
    for(const num of numbers){
        if(num < min){
            min = num;
        }
    }
    return min;
}
const min = getMin(heights);
console.log('min number is:',min);
