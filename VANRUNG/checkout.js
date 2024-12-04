let listCart = [];
function checkCart(){
        var cookieValue = document.cookie
        .split('; ')
        .find(row => row.startsWith('listCart='));
        if(cookieValue){
            listCart = JSON.parse(cookieValue.split('=')[1]);
        }
}
checkCart();
addCartToHTML();
function addCartToHTML(){
    // clear data default
    let listCartHTML = document.querySelector('.returnCart .list');
    listCartHTML.innerHTML = '';

    let totalQuantityHTML = document.querySelector('.totalQuantity');
    let totalPriceHTML = document.querySelector('.totalPrice');
    let totalQuantity = 0;
    let totalPrice = 0;
    // if has product in Cart
    if(listCart){
        listCart.forEach(product => {
            if(product){
                let newCart = document.createElement('div');
                newCart.classList.add('item');
                newCart.innerHTML = 
                    `<img src="${product.image}">
                    <div class="info">
                        <div class="name">${product.name}</div>
                        <div class="price">${product.price} VND/1 product</div>
                    </div>
                    <div class="quantity">${product.quantity}</div>
                    <div class="returnPrice">${product.price * product.quantity} VND</div>`;
                listCartHTML.appendChild(newCart);
                totalQuantity = totalQuantity + product.quantity;
                totalPrice = totalPrice + (product.price * product.quantity);
            }
        })
    }
    totalQuantityHTML.innerText = totalQuantity;
    totalPriceHTML.innerText =  totalPrice +' VND';
}

    
   

    document.addEventListener("DOMContentLoaded", function() {
        // Lắng nghe sự kiện click cho nút "CHECKOUT"
        var checkoutButton = document.querySelector(".buttonCheckout");
        checkoutButton.addEventListener("click", function() {
            // Lấy tên khách hàng từ input
            var fullName = document.getElementById("name").value;
            
            // Hiển thị thông báo xác nhận và cảm ơn
            alert("The order for " + fullName + " has been successfully confirmed! Thank you for your purchase.");

            // Xóa dữ liệu trong các trường nhập liệu
            document.getElementById("name").value = "";
            document.getElementById("phone").value = "";
            document.getElementById("address").value = "";
            document.getElementById("country").selectedIndex = 0;
            document.getElementById("city").selectedIndex = 0;

            // Cập nhật tổng số lượng và giá trị thành 0
            document.querySelector(".totalQuantity").textContent = "0";
            document.querySelector(".totalPrice").textContent = "0";

            // Điều hướng trang về index.html
            window.location.href = "shop.html";
        });
    });

