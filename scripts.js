// Array of background image URLs
const backgroundImages = [
    "images/pic1.jpg",
    "images/pic2.jpg",
    "images/pic3.jpg",
    "images/pic4.jpg",
    "images/pic5.jpg"
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

const confettiContainer = document.createElement("div");
document.body.appendChild(confettiContainer);

for (let i = 0; i < 50; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti-piece");
    confetti.style.left = `${Math.random() * 100}vw`;
    confetti.style.animationDuration = `${2 + Math.random() * 3}s`;
    confettiContainer.appendChild(confetti);
}

// Array of quirky quotes
const quotes = [
    "Be yourself; everyone else is already taken.",
    "Life is too important to be taken seriously.",
    "Normal is boring. Dare to be different!",
    "Creativity is intelligence having fun.",
    "Stay weird. It's better that way.",
    "The world needs more sparkle and sass.",
    "Life is short, make it sweet.",
    "Dare to be different; it's more fun that way!",
    "Embrace the glorious mess that you are.",
    "Why fit in when you were born to stand out?",
    "Some people are lost in the fire; some are built from it.",
    "Reality called, but I hung up.",
    "Live in the moment. Unless it’s unpleasant, in which case, eat chocolate.",
    "Be a voice, not an echo.",
    "I’m not lazy, just in energy-saving mode.",
    "You are enough. A thousand times enough.",
    "Make today so awesome that yesterday gets jealous.",
    "Be a fruit loop in a world of Cheerios.",
    "Throw kindness around like confetti.",
    "Perfectly imperfect and proud of it!",
    "Some people chase dreams; I nap and let them catch me.",
    "Less perfection, more authenticity.",
    "A little bit of crazy, a lot of heart.",
    "Don't follow the crowd; let the crowd follow you.",
    "If you stumble, make it part of the dance.",
    "Weird is a side effect of awesome."
];


// Function to generate a new quote
function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").textContent = quotes[randomIndex];
}

// Call the function to add background images on page load
window.onload = addBackgroundImages;

window.onscroll = function() {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercentage = (scrollTop / scrollHeight) * 100;
    document.getElementById("scroll-indicator").style.width = scrollPercentage + "%";
};
