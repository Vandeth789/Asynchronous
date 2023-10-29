'use strict'

const titleElement = document.querySelector('#title');
const descriptionElement = document.querySelector('#description');
const priceElement = document.querySelector('#price');
const fileElement = document.querySelector('#file');

// Input value from user
async function createProduct(){
    const title = titleElement.value
    const description = descriptionElement.value
    const price = Number(priceElement.value)
    const file = fileElement.files[0]
    const imageUrl = await uploadImage(file);
    const product = {
        title,
        price,
        description,
        categoryId: 1,
        images: [
            imageUrl.location 
        ]
    };
    fetch('https://api.escuelajs.co/api/v1/products/', {
        method: 'POST',
        body: JSON.stringify(product),
        headers: {
            'content-type': 'application/json'
        }
    })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}



// Upload image to server
async function uploadImage(file){
    //Create form data
    const formData = new FormData();
    formData.append('file', file);
    // send request to server
    const res = await fetch('https://api.escuelajs.co/api/v1/files/upload', {
        method: 'POST',
        body: formData,
    });
    return res.json();
}