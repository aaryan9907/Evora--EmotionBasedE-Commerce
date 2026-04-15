document.addEventListener("DOMContentLoaded", () => {

let currentEmotion = "";

const buttons = document.querySelectorAll("#emotions button");
const productDiv = document.getElementById("products");
const searchInput = document.getElementById("search");

buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
        if (index === 0) currentEmotion = "happy";
        if (index === 1) currentEmotion = "sad";
        if (index === 2) currentEmotion = "angry";
        if (index === 3) currentEmotion = "relaxed";

        displayProducts(currentEmotion);
    });
});

async function displayProducts(emotion, searchTerm = "") {
    const response = await fetch(`http://127.0.0.1:5000/products?emotion=${emotion}`);
    const items = await response.json();

    productDiv.innerHTML = `<h2>${emotion.toUpperCase()} Products</h2>`;

    const container = document.createElement("div");
    container.classList.add("product-container");

    items
    .filter(item => item.name.toLowerCase().includes(searchTerm))
    .forEach(item => {
        const card = document.createElement("div");
        card.classList.add("product-card");

        card.innerHTML = `
            <img src="${item.image}" alt="${item.name}" />
            <h3>${item.name}</h3>
            <p>${item.rating}</p>
            <p><strong>${item.price}</strong></p>
            <button>Buy Now</button>
        `;

        container.appendChild(card);
    });

    productDiv.appendChild(container);
}

searchInput.addEventListener("input", () => {
    if (currentEmotion) {
        displayProducts(currentEmotion, searchInput.value.toLowerCase());
    }
});

});