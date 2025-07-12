const family = {
    live: 'usa',
    color:'nigga',
    income:540, 

}

const fetch = JSON.stringify(family);

console.log(family)
console.log(fetch)

// CONVERT JSON TO OBJECT AGAIN
const familyObj = JSON.parse(fetch);
console.log(familyObj)