// Array of background image URLs
const backgroundImages = [
    "pic1.jpg",
    "pic2.jpg",
    "pic3.jpg",
    "pic4.jpg",
    "pic5.jpg"
];

// Function to add background images
function addBackgroundImages() {
    const container = document.getElementById('background-images');
    for (let i = 0; i < backgroundImages.length; i++) {
        const img = document.createElement('img');
        img.src = backgroundImages[i];

        // Random position within the viewport
        const randomX = Math.random() * 100; // Random percentage for left position
        const randomY = Math.random() * 100; // Random percentage for top position
        img.style.left = `${randomX}vw`;
        img.style.top = `${randomY}vh`;

        container.appendChild(img);
    }
}

// Array of quirky quotes
const quotes = [
    "Be yourself; everyone else is already taken.",
    "Life is too important to be taken seriously.",
    "Normal is boring. Dare to be different!",
    "Creativity is intelligence having fun.",
    "Stay weird. It's better that way.",
    "The world needs more sparkle and sass.",
    "Embrace the glorious mess that you are.",
    "Your vibe attracts your tribe.",
    "Life is short, make it sweet.",
    "Dare to be different; it's more fun that way!"
];

// Function to generate a new quote
function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").textContent = quotes[randomIndex];
}

// Call the function to add background images on page load
window.onload = addBackgroundImages;
