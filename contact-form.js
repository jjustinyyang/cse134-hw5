document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");
    const messageText = document.getElementById("message");
    const errorMessage = document.getElementById("error-message");
    const infoMessage = document.getElementById("info-message");
    const charCount = document.getElementById("char-count");
    const formErrors = [];

    const pattern = /^[a-zA-Z0-9!., ]+$/;

    messageText.addEventListener("input", (e) => {
        const value = e.target.value;
        if (!pattern.test(value)) {
            messageText.setCustomValidity("Invalid character(s)");
            messageText.classList.add("error");
            errorMessage.textContent = "Invalid character(s)!";
            errorMessage.style.color = "red";
            errorMessage.style.display = "block";
            setTimeout(() => {
                errorMessage.style.display = "none";
            }, 1000);
            formErrors.push({
                field: "message",
                error: "Invalid character(s) entered",
                value: value
            });
        } else {
            messageText.classList.remove("error");
            messageText.setCustomValidity("");
        }
    });

    messageText.addEventListener("input", (e) => {
        const curr_char_count = e.target.value.length;
        charCount.textContent = `${curr_char_count} / 200`;

        if (curr_char_count >= 180) {
            infoMessage.textContent = `Caution: ${200 - curr_char_count} characters remaining.`;
        } else {
            infoMessage.textContent = "";
        }

        if (curr_char_count == 200) {
            formErrors.push({
                field: "message",
                error: "Over 200 characters",
            });
        }
    });

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const formErrorsInput = document.getElementById("form_errors");

        if (messageText.checkValidity()) {
            formErrorsInput.value = JSON.stringify(formErrors);
            form.submit();

            setTimeout(() => {
                infoMessage.textContent = "Thank you for your message!";
                infoMessage.style.color = "green";
            }, 1000)
        } else {
            setTimeout(() => {
                errorMessage.textContent = "Please correct the errors and try again";
                errorMessage.style.color = "red";
            }, 1000)
        }
    });
});