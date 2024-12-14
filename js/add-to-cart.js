document.addEventListener("DOMContentLoaded", function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productCard = this.closest('.card');
            const productName = productCard.querySelector('.card-title').textContent;
            const productPrice = productCard.querySelector('.card-price').textContent.replace('$', '');

            const orderItems = JSON.parse(localStorage.getItem('orderItems')) || [];

            // التحقق إذا كان المنتج موجودًا بالفعل في السلة
            const existingItem = orderItems.find(item => item.name === productName);

            if (existingItem) {
                // إذا كان المنتج موجودًا، زيادة الكمية
                existingItem.quantity += 1;
            } else {
                // إذا كان المنتج غير موجود، إضافته مع الكمية 1
                orderItems.push({ name: productName, price: parseFloat(productPrice), quantity: 1 });
            }

            localStorage.setItem('orderItems', JSON.stringify(orderItems));

            alert(`${productName} تم إضافته إلى السلة`);
        });
    });
});
