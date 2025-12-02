const btn = document.querySelector(".btn9");
const form = document.querySelector("form");
const para = document.querySelector("#para001");
const book=document.querySelector(".section4")

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

    // Show final message
     
     para.innerHTML = " “Thank you ForBooking the Service We will get back to you soon!”.";

    
});

