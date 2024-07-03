const registerForm = document.querySelector(".login-form");

const saveSubmit = event => {
    event.preventDefault();

    const emailValue = registerForm.elements.email.value.trim();
    const passwordValue = registerForm.elements.password.value.trim();

    if (emailValue === "" || passwordValue === "") {
        return console.log("All form fields must be filled in");
    } else {
        const userInfo = {
            email: emailValue,
            password: passwordValue
        };
        console.log(userInfo);
    };
}

registerForm.addEventListener("submit", saveSubmit);
registerForm.reset();