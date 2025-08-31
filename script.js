const prices = document.querySelectorAll('.price');
let totalPrice = 0;

prices.forEach(price => {
    totalPrice += parseFloat(price.textContent);
});

const table = document.querySelector('table');
const totalRow = document.createElement('tr');
const totalCell = document.createElement('td');
totalCell.colSpan = 2;
totalCell.textContent = `Total: ${totalPrice}`;
totalRow.appendChild(totalCell);
table.appendChild(totalRow);