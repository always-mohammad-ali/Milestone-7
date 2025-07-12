const product = [
    {brand:'lenovo', item:'laptop'},
    {brand:'appley', item:'laptop'},
    {brand:'samsung', item:'laptop'},
    {brand:'asusy', item:'laptop'},
]

// you can create brand new array-of-object using map from previous array-of-object to get just individual items of something.

const brands = product.map(brandName => brandName.brand);
console.log(brands)


// Difference between map and forEach is getting output through variables name. You will array-like-value by map , but you can't create variables for forEach.

product.forEach(brndName => console.log(brndName.brand))



const findYLetterProducts = product.filter(y => y.brand.includes('y'))
console.log(findYLetterProducts)