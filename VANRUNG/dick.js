let searhForm = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () => {
    searhForm.classList.toggle('active')
}
const loginButton = document.getElementById('login-btn')
loginButton.addEventListener("click", function () {
    // Chuyển hướng đến file HTML khác
    window.location.href = "login.html"; // Đường dẫn đến file HTML cần mở
});


// const shopPath = basePath + "../Shop/shop.html"; // Thêm đường dẫn
// window.location.href = shopPath;

window.addEventListener('scroll', function() {
    var header = document.querySelector('.header');
    var scrollPosition = window.scrollY;
  
    if (scrollPosition > 0) {
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }
  });
let navbar = document.querySelector('.navbari');
document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
}
window.onscroll = () => {
    searhForm.classList.remove('active')
    navbar.classList.remove('active')
}

let iconCart = document.querySelector('icon-cart');// show cai gio hang
let closeCart = document.querySelector('.close');//dong no lai
let body = document.querySelector('body');


iconCart.addEventListener('click', () => {
    body.classList.toggle('showCart')
    console.log('active')
})
closeCart.addEventListener('click', () => {
    body.classList.toggle('showCart')
})

let listProducts = [];
let listProductHTML = document.querySelector('.listProduct');
const initApp = () => {
    //getdataformjson
    fetch('product.json')
        .then(response => response.json())
        .then(data => {
            listProducts = data;
            addDataToHTML();
        })
}
initApp();

const addDataToHTML = () => {
    listProductHTML.innerHTML = "";
    if (listProducts.length > 0) {
        listProducts.forEach(product => {
            let newProduct = document.createElement('div');
            newProduct.classList.add('item');
            newProduct.dataset.id = product.id;
            newProduct.innerHTML = `
             <img src="${product.img}" alt="" >
                    <h2>${product.name}</h2>
                    <div class="price">$${product.price}</div>
                    <button class="addCart">
                      Add To Cart  
                    </button>
            `;
            listProductHTML.appendChild(newProduct);
        });

    }
}
let carts = [];
let listCartHTML = document.querySelector('listCart')
let iconCartSpan = document.querySelector('icon-cart span')
listProductHTML.addEventListener('click', (even) => {
    let positionClick = even.target;
    if (positionClick.classList.contains('addCart')) {
        let product_id = positionClick.parentElement.dataset.id;
        addToCart(product_id);
    }
})
const addToCart = (product_id) => {

    let positionThisProductInCart = carts.findIndex((value) => value.product_id == product_id);

    if (carts.length <= 0) {

        carts = [{
            product_id: product_id,

            quantity: 1

        }]

    } else if (positionThisProductInCart < 0) {
        carts.push({
            product_id: product_id, quantity: 1
        });

    } else {
        carts[positionThisProductInCart].quantity = carts[positionThisProductInCart].quantity + 1;
    }



    console.log(carts);



}


const addCartToHTML = () => {

    listCartHTML.innerHTML = '';
    let totalQuantity = 0;

    if (carts.length > 0) {

        carts.forEach (cart => {
            totalQuantity = totalQuantity*cart.quantity;
            let newCart = document.createElement('div');
            newCart.classList.add('item');
            let positionProduct = listProducts.findIndex((value) =>value.id == cart.product_id );
            let infor = listProducts[positionProduct];
                newCart.innerHTML = `
                
                        <div class="image">
                            <img src="${infor.img}" alt="">

                        </div>
                        <div class="name">${infor.name}</div>
                        <div class="totalPrice">
                            $${infor.price * cart.quantity}
                        </div>
                        <div class="quantity">
                            <span class="minus">
                                < </span>
                                    <span>${cart.quantity}</span>
                                    <span class="plus">></span>
                        </div>
                 
                 `;
                 listCartHTML.appendChild(newCart);
        })

    }

        iconCartSpan.innerText = totalQuantity;


}







// const products =document.querySelector('.container-product')

// //sync ham bat dong bo
// const getData = async () =>{
//     const response = await fetch('product.json');
//     const data = await response.json();
//   if(data){
//     products.innerHTML =data.map(item=>{
//         return` <div class="item">
//                     <img src="${item.img}" alt="" >
//                     <h2>${item.name}</h2>
//                     <div class="price">$${item.price}</div>
//                     <button class="addCart">
//                         Add To Cart
//                     </button>
//                 </div>`
//     })
//   }

// }
// getData()



