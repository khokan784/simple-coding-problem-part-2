
const products = [
    {name: 'shampu', price: 300 },
    {name: 'chiruni', price: 100 },
    {name: 'shirt', price: 700 },
    {name: 'pant', price: 1200 }
]
function getProductsPrice(products){
    let total = 0;
    for(const product of products){
        total = total + product.price;
    }
    return total;
}
const totalPrice =  getProductsPrice(products);
console.log('total price :',totalPrice);