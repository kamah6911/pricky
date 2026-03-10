const app = document.getElementById("app")

const state = {
    currentCategory: "Home appliances",

    products: [
        {
            name:"Microwave Oven",
            price:120,
            category:"Home appliances",
            image:"https://images.unsplash.com/photo-1586201375761-83865001e31b"
        },

        {
            name:"Smart TV",
            price:600,
            category:"Home appliances",
            image:"https://images.unsplash.com/photo-1593784991095-a205069470b6"
        },

        {
            name:"Leather Jacket",
            price:90,
            category:"clothing",
            image:"https://images.unsplash.com/photo-1520975916090-3105956dac38"
        },

        {
            name:"Sneakers",
            price:70,
            category:"clothing",
            image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff"
        },

        {
            name:"Modern Sofa",
            price:450,
            category:"furniture",
            image:"https://images.unsplash.com/photo-1555041469-a586c61ea9bc"
        },

        {
            name:"Wood Table",
            price:220,
            category:"furniture",
            image:"https://images.unsplash.com/photo-1505691723518-36a5ac3be353"
        },

        {
            name:"Decor Lamp",
            price:40,
            category:"others",
            image:"https://images.unsplash.com/photo-1507473885765-e6ed057f782c"
        }
    ]
}

function setCategory(category){
    state.currentCategory = category
    render()
}

function header(){
    return `
    <header>
        <div class="logo">Pricky</div>

        <nav>
            <button onclick="setCategory('Home appliances')">Home Appliances</button>
            <button onclick="setCategory('clothing')">Clothing</button>
            <button onclick="setCategory('furniture')">Furniture</button>
            <button onclick="setCategory('others')">Others</button>
        </nav>
    </header>
    `
}

function hero(){
    return `
    <div class="container">
        <div class="hero">
        <h1>Welcome to ModernStore</h1>
        <p>Elegant products for modern living</p>
        </div>
    </div>
    `
}

function productList(){

    const filtered = state.products.filter(
        p => p.category === state.currentCategory
    )

    return `
    <div class="container">

        <h2>${state.currentCategory}</h2>

        <div class="products">

        ${filtered.map(product => `
        
        <div class="card">

            <img src="${product.image}">

            <h3>${product.name}</h3>

            <div class="price">KSH${product.price}</div>

            <button>Add to Cart</button>

        </div>

        `).join("")}

        </div>

    </div>
    `
}

function render(){

    app.innerHTML = `
        ${header()}
        ${hero()}
        ${productList()}
    `
}

render()