var productPrice = 29.99
var taxRate = 0.25
var shippingRate = 2.99
var total = (productPrice * taxRate) + shippingRate
console.log('total', total)
var totalRounded = Math.ceil(total)
console.log('totalRounded (with Math.ceil)', totalRounded)

var totalRounded = Math.round(total * 100) / 100
console.log('totalRounded', totalRounded)


var x = 10
x = 32
x = 1
console.log('var x', x)

let y = 849223
y  = 3
y  = 23
console.log('let y', y)

const z = 323
// z = 99
console.log('const z', z)


const xyz = 10
console.log('const xyz', xyz)
function myFunc() {
    const xyz = 3
    console.log('const xyz', xyz ** 2)
}
myFunc()