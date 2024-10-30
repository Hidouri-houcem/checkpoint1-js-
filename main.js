document.addEventListener("DOMContentLoaded",function(){
    const cart = document.querySelector(".cart");
    const totalPriceElement  = document.getElementById("total-price");
    const emptyMessage = document.createElement("p");
    emptyMessage.innerText = "Votre panier est vide";
    emptyMessage.style.display = "none";
    cart.appendChild(emptyMessage);



    function updateTotalPrice() {
        let total = 0;
        document.querySelectorAll(".cart-item").forEach(function (item) {
            const price = parseFloat(item.querySelector(".item-price").innerText.replace('$', ''));
            const quantity = parseInt(item.querySelector(".item-quantity").innerText);
            total += price * quantity;
        });
        totalPriceElement.innerText = `$${total.toFixed(2)}`;
    }



    function checkIfCartIsEmpty() {
        const items = document.querySelectorAll(".cart-item");
        if (items.length === 0) {
            emptyMessage.style.display = "block"; 
            totalPriceElement.innerText = "$0.00"; 
        } else {
            emptyMessage.style.display = "none"; 
        }
    }



    cart.addEventListener("click", function (e) {
        const target = e.target;
        const item = target.closest(".cart-item");

        if (item) {
            const quantityElement = item.querySelector(".item-quantity");

            
            if (target.classList.contains("add-btn")) {
                quantityElement.innerText = parseInt(quantityElement.innerText) + 1;
                updateTotalPrice();
            }

    
            if (target.classList.contains("subtract-btn")) {
                if (parseInt(quantityElement.innerText) > 1) {
                    quantityElement.innerText = parseInt(quantityElement.innerText) - 1;
                    updateTotalPrice();
                }
            }

        
            if (target.classList.contains("remove-btn")) {
                item.remove();
                updateTotalPrice();
                checkIfCartIsEmpty();
            }


            if (target.classList.contains("heart-btn")) {
                target.classList.toggle("liked"); 
            }
        }
    });



    updateTotalPrice();
    checkIfCartIsEmpty();

});