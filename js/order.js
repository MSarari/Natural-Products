document.addEventListener("DOMContentLoaded", function() {
    const orderItems = JSON.parse(localStorage.getItem('orderItems')) || [];
    const orderItemsContainer = document.getElementById('order-items');
    const totalPriceElement = document.getElementById('total-price');
    
    if (orderItems.length > 0) {
        orderItems.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.name}</td>
                <td>${item.quantity}</td>
                <td>${item.price}</td>
            `;
            orderItemsContainer.appendChild(row);
        });

        const totalPrice = orderItems.reduce((total, item) => total + (item.price * item.quantity), 0);
        totalPriceElement.textContent = totalPrice.toFixed(2);
    }

    const confirmOrderButton = document.getElementById('confirm-order');
    confirmOrderButton.addEventListener('click', function() {
        localStorage.removeItem('orderItems');
        alert('Order confirmed. Thank you!');
        window.location.href = 'index.html';
    });
});
