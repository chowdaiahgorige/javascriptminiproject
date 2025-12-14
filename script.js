const btn = document.querySelector(".btn9");
const form = document.querySelector("form");
const para = document.querySelector("#para001");
const book = document.querySelector(".section4");

const btn2 = document.querySelectorAll(".btn2"); // Add buttons
const btn11 = document.querySelectorAll(".btn1"); // Remove buttons

// BOOK SERVICE BUTTON
btn.addEventListener("click", (event) => {
    event.preventDefault();

    const name = form.querySelector('input[type="text"]');
    const email = form.querySelector('input[type="email"]');
    const phone = form.querySelector('input[type="tel"]');

    if (
        name.value.trim() === "" ||
        email.value.trim() === "" ||
        phone.value.trim() === ""
    ) {
        alert("Please fill all details before submitting!");
        return;
    }

    para.innerHTML =
        "Thank you for booking the service. We will get back to you soon!";
});

// ADD ITEM BUTTONS
btn2.forEach((btn) => {
    btn.addEventListener("click", () => {
        alert("Please add items");
    });
});

// REMOVE ITEM BUTTONS
btn11.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (confirm("Are you sure to remove?")) {
            btn.parentElement.remove();
        }
    });
});



