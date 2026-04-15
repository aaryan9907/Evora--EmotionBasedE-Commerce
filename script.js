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

buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
        let emotion;

        if (index === 0) emotion = "happy";
        if (index === 1) emotion = "sad";
        if (index === 2) emotion = "angry";
        if (index === 3) emotion = "relaxed";

        displayProducts(emotion);
    });
});

function displayProducts(emotion) {
    const items = products[emotion];

    productDiv.innerHTML = `<h2>${emotion.toUpperCase()} Products</h2>`;

    items.forEach(item => {
        const p = document.createElement("p");
        p.textContent = item;
        productDiv.appendChild(p);
    });
}