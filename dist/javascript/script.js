'use strict'

// learn function in javaScript 
// normal function

function sayHello(){
    console.log('Hello');
    return 'DCoder'
}
const text = sayHello();

console.log(text);

// ...a spread operator
const sum = (b, ...a) => {
    let total = 0;
    for(let i = 0; i < a.length; i++){
        total += a[i];
    }
    return total;
}

console.log('Total Sum: ', sum(10, 20, 30, 40, 50));

// copy array with slice from spread operator

const scores = [10, 20, 30, 40, 50];
const copyScore1 = scores.slice(3,4);
console.log(copyScore1);

// from function
const copyScore2 = Array.from(scores);
console.log(copyScore2);

// spread operator
const copyScore3 = [...scores];
console.log(copyScore3);

const product = {
    id: 1,
    name: "Pen",
    price: 1.2,
    stock: 10,
};

// Destructuring style `ES6`
const {id, name, price, stock} = product;
console.log(product.id);
console.log('Id : ' + id);
console.log('Name : ' + name);
console.log('Price : ' + price);
console.log('Stock : ' + stock);

console.log('\nDestructuring')
const printReceipt = ({ id, name, price, stock }) => {
    console.log(`id =  ${id}`);
    console.log(`name = ${name}`);
    console.log(`price = ${price}`);
    console.log(`stock = ${stock}`);
};
printReceipt(product)

// Destructuring Array

const priceList = [10, 20, 30, 40, 50];
console.log(priceList[0])
console.log(priceList.at(1));

const [price1, price2, ...rest] = priceList;
const [,, p3, p4, p5] = priceList;

console.log(price1, price2, rest);
console.log(p3,p4,p5);

// Stack and Heap

// npm = node package manager
// url that duplicate is base64

// fetch data from api

