const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	const prices = document.querySelectorAll('.prices');
    let totalPrice = 0;

    prices.forEach(price => {
        totalPrice += parseFloat(price.textContent);
    });

    alert(`Total Price: ${totalPrice}`);
};
getSumBtn.addEventListener("click", getSum);

