document.addEventListener("DOMContentLoaded", function() {
    const orderItems = JSON.parse(localStorage.getItem('orderItems')) || [];
    const orderItemsContainer = document.getElementById('order-items');
    const totalPriceElement = document.getElementById('total-price');
    
    // عرض المنتجات في صفحة الطلب
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

        // حساب السعر الإجمالي
        const totalPrice = orderItems.reduce((total, item) => total + (item.price * item.quantity), 0);
        totalPriceElement.textContent = totalPrice.toFixed(2);
    }

    // عند تأكيد الطلب، مسح السلة
    const confirmOrderButton = document.getElementById('confirm-order');
    confirmOrderButton.addEventListener('click', function() {
        localStorage.removeItem('orderItems');
        alert('تم تأكيد الطلب. شكراً لك!');
        window.location.href = 'index.html'; // يمكن تغيير الصفحة بعد التأكيد
    });
});
