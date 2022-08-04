const products = Array.from(document.querySelectorAll('div.product'));
//console.log(products);

const addition = document.querySelectorAll("div.product__quantity-control_inc");// прибавление 
//console.log(addition);

const removal = document.querySelectorAll("div.product__quantity-control_dec"); //убавление
//console.log(removal);

const meaning = document.querySelectorAll('.product__quantity-value');//значение 
//console.log(meaning);



removal.forEach(function(item , index ){
    item.onclick = function (){
        if ((parseInt(meaning[index].innerText)) > 1  ){
            let minus = parseInt(meaning[index].innerText);
            minus --;
            meaning[index].innerText = minus;
        }
    }
})

addition.forEach(function(item , index ){
    item.onclick = function (){
        if (parseInt(meaning[index].innerText) >=1 ) {
            let plus = parseInt(meaning[index].innerText);
            plus++;
            meaning[index].innerText = plus;
        }
    }
})

const btn = Array.from(document.querySelectorAll('.product__add'));
console.log(btn);

const cartProducts = document.querySelector('.cart__products');

btn.forEach((add) => {
    add.addEventListener('click', ()=>{
        addCart(add);
    })
})
function addCart(element) {
    const id = element.closest(".product").dataset.id;
    const image = element.closest(".product").querySelector(".product__image");

    const cartProductvalue = cartProducts.querySelector(
        `.cart__product[data-id="${id}"] .cart__product-count`
    );

    const productvalue = element
        .closest(".product")
        .querySelector(".product__quantity-value").innerText;

    if (cartProductvalue) {
        cartProductvalue.innerText =
        Number(cartProductvalue.innerText) + Number(productvalue);
    } else {
        const cartDiv = document.createElement("div");
        cartDiv.className = "cart__product";
        cartDiv.dataset.id = id;
        cartDiv.innerHTML = `<img class="cart__product-image" src="${image.src}">
                            <div class="cart__product-count">${productvalue}</div>`;
        cartProducts.appendChild(cartDiv);
    }
}



