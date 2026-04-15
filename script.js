document.addEventListener("DOMContentLoaded", () => {

let currentEmotion = "";

const buttons = document.querySelectorAll("#emotions button");
const productDiv = document.getElementById("products");
const searchInput = document.getElementById("search");

/* ===== BUTTON CLICK ===== */
buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
        if (index === 0) currentEmotion = "happy";
        if (index === 1) currentEmotion = "sad";
        if (index === 2) currentEmotion = "angry";
        if (index === 3) currentEmotion = "relaxed";

        setTheme(currentEmotion);   // 🔥 theme change
        displayProducts(currentEmotion);
    });
});

/* ===== FETCH + DISPLAY ===== */
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

/* ===== SEARCH ===== */
searchInput.addEventListener("input", () => {
    if (currentEmotion) {
        displayProducts(currentEmotion, searchInput.value.toLowerCase());
    }
});

/* ===== THEME FUNCTION ===== */
function setTheme(emotion) {
    const root = document.documentElement;

    if (emotion === "happy") {
        root.style.setProperty("--bg-color", "#fff9db");
        root.style.setProperty("--accent-color", "#f59f00");
        root.style.setProperty("--card-bg", "#fff3bf");
        root.style.setProperty("--text-color", "#5c3d00");
    }

    if (emotion === "sad") {
        root.style.setProperty("--bg-color", "#e7f0ff");
        root.style.setProperty("--accent-color", "#1c7ed6");
        root.style.setProperty("--card-bg", "#dbe4ff");
        root.style.setProperty("--text-color", "#1c3d5a");
    }

    if (emotion === "angry") {
        root.style.setProperty("--bg-color", "#ffe3e3");
        root.style.setProperty("--accent-color", "#e03131");
        root.style.setProperty("--card-bg", "#ffc9c9");
        root.style.setProperty("--text-color", "#5a1c1c");
    }

    if (emotion === "relaxed") {
        root.style.setProperty("--bg-color", "#e6fcf5");
        root.style.setProperty("--accent-color", "#099268");
        root.style.setProperty("--card-bg", "#c3fae8");
        root.style.setProperty("--text-color", "#1b4332");
    }
}

});