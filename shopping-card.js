const products = [
    {name: 'shampu', price: 300 ,quantity: 3 },
    {name: 'chiruni', price: 100,quantity: 5 },
    {name: 'shirt', price: 700 ,quantity: 2 },
    {name: 'pant', price: 1200 ,quantity: 1 },
]

function cartTotal(products){
    let total = 0;
    for(const product of products){
        const thisProductCost = product.price * product.quantity;
        total = total + thisProductCost;
    }
    return total;
}
const totalPrice = cartTotal(products);
console.log('Total Price :', totalPrice);
