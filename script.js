
const bookBtn = document.querySelector(".btn9");
const form = document.querySelector("form");
const message = document.querySelector("#para001");

const addBtns = document.querySelectorAll(".btn2");
const removeBtns = document.querySelectorAll(".btn1");

const cartBox = document.querySelector(".import");
const cartItems = document.querySelector(".cart-items");
const totalEl = document.querySelector("#total");

const MAX_ITEMS = 4;
let total = 0;
let selectedServices = new Set(); 


cartBox.style.display = "none";


bookBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const name = form.querySelector('input[type="text"]');
    const email = form.querySelector('input[type="email"]');
    const phone = form.querySelector('input[type="tel"]');

    if (!name.value || !email.value || !phone.value) {
        alert("Please fill all details before submitting!");
        return;
    }

    message.textContent =
        "Thank you for booking the service. We will get back to you soon!";
});


addBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        const serviceP = btn.previousElementSibling;
        const serviceName = serviceP.childNodes[0].textContent.trim();
        const price = parseInt(
            serviceP.querySelector("span").textContent.replace("₹", "")
        );

        if (selectedServices.has(serviceName)) {
            alert("This service is already added");
            return;
        }

        
        if (selectedServices.size >= MAX_ITEMS) {
            alert("You can select only 4 different services");
            return;
        }

        cartBox.style.display = "block";

        const item = document.createElement("div");
        item.className = "items-added";
        item.dataset.service = serviceName; 
        item.innerHTML = `
            <p>${selectedServices.size + 1}</p>
            <p>${serviceName}</p>
            <p>₹${price}</p>
        `;

        cartItems.appendChild(item);
        selectedServices.add(serviceName);

        total += price;
        totalEl.textContent = `₹${total}`;
    });
});


removeBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        const items = cartItems.querySelectorAll(".items-added");

        if (items.length === 0) {
            alert("No items to remove");
            return;
        }

        const lastItem = items[items.length - 1];
        const serviceName = lastItem.dataset.service;
        const price = parseInt(
            lastItem.children[2].textContent.replace("₹", "")
        );

        cartItems.removeChild(lastItem);
        selectedServices.delete(serviceName);

        total -= price;
        totalEl.textContent = `₹${total}`;

        if (cartItems.children.length === 0) {
            cartBox.style.display = "none";
        }
    });
});
