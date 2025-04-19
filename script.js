let itemCount = 1;
let isHighlighted = false;

const specials = [
    "Fresh Croissants",
    "Blueberry Muffins",
    "Sourdough Bread",
    "Chocolate Eclairs",
    "Cinnamon Rolls"
];

function changeSpecial() {
    const specialElement = document.getElementById('dailySpecial');
    const randomSpecial = specials[Math.floor(Math.random() * specials.length)];
    specialElement.textContent = `Today's Special: ${randomSpecial}`;
}