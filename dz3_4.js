const products = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    },
];
console.log("Фильтр по фото");
for (i = 0; i < products.length; i++) {
    if ('photos' in products[i] && products[i].photos.length > 0) {
        const result = [products[i]];
        result.forEach(element => console.log(element));
    }
}

products.sort(function (x, y) {
    return x.price - y.price;
});
console.log("Сортировка по цене");
products.forEach(element => console.log(element));

