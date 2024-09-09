
const prices = [40000, 35000, 18000, 55000, 12000, 60000, 20000];
function getMin(numbers){
    let min = numbers[0];
    for(const num of numbers){
        if(num < min){
            min = num;
        }
    }
    return min;
}
const cheap = getMin(prices);
console.log(cheap);