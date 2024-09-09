
const phones = [
    {name: 'samsaung', price: 20000, camera: '12mp', color: 'black'},
    {name: 'oppo', price: 50000, camera: '12mp', color: 'black'},
    {name: 'redmi', price: 25000, camera: '12mp', color: 'black'},
    {name: 'xaomi', price: 50000, camera: '12mp', color: 'black'},
    {name: 'Iphone', price: 120000, camera: '12mp', color: 'black'},
    {name: 'vivo', price: 12000, camera: '12mp', color: 'black'},
]
function getCheapestPhone(phones){
    let min = phones[0];
    for(const phone of phones){
        if(phone.price < min.price){
            min = phone;
        }
    }
    return min;
}
const cheapPhone = getCheapestPhone(phones);
console.log(cheapPhone);