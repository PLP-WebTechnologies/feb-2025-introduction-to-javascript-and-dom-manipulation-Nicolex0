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

function toggleHighlight() {
    const specialElement = document.getElementById('dailySpecial');
    isHighlighted = !isHighlighted;
    
    if (isHighlighted) {
        specialElement.style.backgroundColor = '#ff7043';
        specialElement.style.color = 'white';
        specialElement.style.padding = '20px';
        specialElement.style.borderRadius = '10px';
    } else {
        specialElement.style.backgroundColor = '';
        specialElement.style.color = '';
        specialElement.style.padding = '15px';
        specialElement.style.borderRadius = '';
    }
}
