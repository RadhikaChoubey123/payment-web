function showAlert() {
    alert("Get started with Payzone! ");
}

document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Thank you for your message. We will get back to you soon.");
});