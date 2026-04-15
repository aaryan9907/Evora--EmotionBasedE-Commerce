document.addEventListener("DOMContentLoaded", () => {

let currentEmotion = "";

const products = {
    happy: [
        "Chocolate Box 🍫",
        "Flowers Bouquet 🌸",
        "Gift Hamper 🎁"
    ],
    sad: [
        "Ice Cream 🍦",
        "Comfort Hoodie 🧥",
        "Motivational Book 📘"
    ],
    angry: [
        "Stress Ball 🔴",
        "Punching Bag 🥊",
        "Gaming Console 🎮"
    ],
    relaxed: [
        "Scented Candles 🕯️",
        "Soft Music Playlist 🎵",
        "Tea Set 🍵"
    ]
};

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

function displayProducts(emotion, searchTerm = "") {
    const items = products[emotion];

    productDiv.innerHTML = `<h2>${emotion.toUpperCase()} Products</h2>`;

    const container = document.createElement("div");
    container.classList.add("product-container");

    items
        .filter(item => item.toLowerCase().includes(searchTerm))
        .forEach(item => {
            const card = document.createElement("div");
            card.classList.add("product-card");

            card.innerHTML = `
                <h3>${item}</h3>
                <p>Perfect for your mood!</p>
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