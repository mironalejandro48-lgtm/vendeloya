'use strict';

// VéndeloYa Marketplace JavaScript Code

// Function to display items in the marketplace
function displayItems(items) {
    const itemContainer = document.getElementById('item-container');
    itemContainer.innerHTML = '';

    items.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'item';
        itemElement.innerHTML = `<h3>${item.title}</h3><p>${item.description}</p><span>${item.price} $</span>`;
        itemContainer.appendChild(itemElement);
    });
}

// Sample data for the marketplace
const sampleItems = [
    { title: 'Item 1', description: 'Description for item 1', price: 100 },
    { title: 'Item 2', description: 'Description for item 2', price: 150 },
    { title: 'Item 3', description: 'Description for item 3', price: 200 }
];

// Display the sample items when the page loads
window.onload = function() {
    displayItems(sampleItems);
};
