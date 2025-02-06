const emailEl = document.getElementById("email");
const submitBtn = document.querySelector("button");
const errorMsgEl = document.querySelector(".error-msg");

errorMsgEl.style.display = "none";

function handleSubmit(event) {
    event.preventDefault();
    localStorage.setItem("email", emailEl.value);
    window.location.href = "success.html";
}

submitBtn.addEventListener("click", (event) => {
    const emailVal = emailEl.value
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailPattern.test(emailVal)) {
        errorMsgEl.style.display = "inline";

        setErrorStyle();
    }
});

emailEl.addEventListener("input", (event) => {
    errorMsgEl.style.display = "none";
    if (emailEl.value) {
        setDefaultStyle();
    }
});

function setDefaultStyle() {
    emailEl.style.borderColor = "#242742";
    emailEl.style.backgroundColor = "white";
    emailEl.style.color = "#242742";
}

function setErrorStyle() {
    emailEl.style.borderColor = "rgba(255,97,85,0.8)";
    emailEl.style.backgroundColor = "rgba(255,97,85,0.25)";
    emailEl.style.color = "#FF6155";
}
