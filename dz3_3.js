const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];
for (i = 0; i < products.length; i++) {
    let sale = products[i].price;
    sale = sale - (sale / 100 * 15);
    products[i].price = sale;
}
products.forEach(sale => console.log(sale));