const email = localStorage.getItem("email");
const emailElement = document.querySelector("strong");

if (email) {
    emailElement.innerHTML = email;
} else {
    emailElement.innerHTML = "ash@loremcompany.com";
}

function goBack() {
    window.location.href = 'index.html';
}
