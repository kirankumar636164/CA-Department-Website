/* =====================================
   CONTACT FORM VALIDATION
===================================== */

const form = document.getElementById("contactForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const courseInput = document.getElementById("course");
const messageInput = document.getElementById("message");

const successMessage =
document.getElementById("successMessage");

/* =====================================
   ERROR ELEMENTS
===================================== */

const nameError =
document.getElementById("nameError");

const emailError =
document.getElementById("emailError");

const phoneError =
document.getElementById("phoneError");

const courseError =
document.getElementById("courseError");

const messageError =
document.getElementById("messageError");

/* =====================================
   MESSAGE COUNTER
===================================== */

const messageCount =
document.getElementById("messageCount");

if (messageCount) {

    messageInput.addEventListener("input", () => {

        messageCount.textContent =
            `${messageInput.value.length} / 500`;

    });

}

/* =====================================
   HELPER FUNCTIONS
===================================== */

function markValid(input) {

    input.style.borderColor = "#28a745";

}

function markInvalid(input) {

    input.style.borderColor = "#dc3545";

}

function clearError(errorElement) {

    errorElement.textContent = "";

}

function clearAllErrors() {

    nameError.textContent = "";
    emailError.textContent = "";
    phoneError.textContent = "";
    courseError.textContent = "";
    messageError.textContent = "";

}

/* =====================================
   REAL TIME VALIDATION
===================================== */

nameInput.addEventListener("input", () => {

    const namePattern = /^[A-Za-z ]+$/;

    if (
        nameInput.value.trim().length >= 3 &&
        namePattern.test(nameInput.value.trim())
    ) {

        markValid(nameInput);
        clearError(nameError);

    }

});

emailInput.addEventListener("input", () => {

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (
        emailPattern.test(
            emailInput.value.trim()
        )
    ) {

        markValid(emailInput);
        clearError(emailError);

    }

});

phoneInput.addEventListener("input", () => {

    const phonePattern =
        /^[6-9]\d{9}$/;

    if (
        phonePattern.test(
            phoneInput.value.trim()
        )
    ) {

        markValid(phoneInput);
        clearError(phoneError);

    }

});

courseInput.addEventListener("change", () => {

    if (courseInput.value !== "") {

        markValid(courseInput);
        clearError(courseError);

    }

});

messageInput.addEventListener("input", () => {

    if (
        messageInput.value.trim().length >= 20
    ) {

        markValid(messageInput);
        clearError(messageError);

    }

});

/* =====================================
   FORM SUBMIT
===================================== */

form.addEventListener("submit", (e) => {

    e.preventDefault();

    let valid = true;

    clearAllErrors();

    /* NAME */

    const namePattern =
        /^[A-Za-z ]+$/;

    if (nameInput.value.trim() === "") {

        nameError.textContent =
            "Name is required";

        markInvalid(nameInput);

        valid = false;

    }
    else if (
        nameInput.value.trim().length < 3
    ) {

        nameError.textContent =
            "Minimum 3 characters required";

        markInvalid(nameInput);

        valid = false;

    }
    else if (
        !namePattern.test(
            nameInput.value.trim()
        )
    ) {

        nameError.textContent =
            "Only letters and spaces allowed";

        markInvalid(nameInput);

        valid = false;

    }
    else {

        markValid(nameInput);

    }

    /* EMAIL */

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailInput.value.trim() === "") {

        emailError.textContent =
            "Email is required";

        markInvalid(emailInput);

        valid = false;

    }
    else if (
        !emailPattern.test(
            emailInput.value.trim()
        )
    ) {

        emailError.textContent =
            "Enter a valid email address";

        markInvalid(emailInput);

        valid = false;

    }
    else {

        markValid(emailInput);

    }

    /* PHONE */

    const phonePattern =
        /^[6-9]\d{9}$/;

    if (phoneInput.value.trim() === "") {

        phoneError.textContent =
            "Phone number is required";

        markInvalid(phoneInput);

        valid = false;

    }
    else if (
        !phonePattern.test(
            phoneInput.value.trim()
        )
    ) {

        phoneError.textContent =
            "Enter a valid Indian mobile number";

        markInvalid(phoneInput);

        valid = false;

    }
    else {

        markValid(phoneInput);

    }

    /* COURSE */

    if (courseInput.value === "") {

        courseError.textContent =
            "Please select a course";

        markInvalid(courseInput);

        valid = false;

    }
    else {

        markValid(courseInput);

    }

    /* MESSAGE */

    if (
        messageInput.value.trim() === ""
    ) {

        messageError.textContent =
            "Message is required";

        markInvalid(messageInput);

        valid = false;

    }
    else if (
        messageInput.value.trim().length < 20
    ) {

        messageError.textContent =
            "Minimum 20 characters required";

        markInvalid(messageInput);

        valid = false;

    }
    else {

        markValid(messageInput);

    }

    /* SUCCESS */

    if (valid) {

        successMessage.classList.remove(
            "d-none"
        );

        form.reset();

        [
            nameInput,
            emailInput,
            phoneInput,
            courseInput,
            messageInput
        ].forEach(input => {

            input.style.borderColor = "";

        });

        if (messageCount) {

            messageCount.textContent =
                "0 / 500";

        }

        setTimeout(() => {

            successMessage.classList.add(
                "d-none"
            );

        }, 5000);

    }

});