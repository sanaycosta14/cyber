document.addEventListener("DOMContentLoaded", function() {
    const passwordInput = document.getElementById("password");
    const validateButton = document.getElementById("validateButton");
    const message = document.getElementById("message");

    validateButton.addEventListener("click", function() {
        const password = passwordInput.value;
        const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;

        let errors = [];

        function validate(pattern, errorMessage) {
            if (!pattern.test(password)) {
                errors.push(errorMessage);
            }
        }

        validate(/[a-z]/, "Pelo menos uma letra minúscula");
        validate(/[A-Z]/, "Pelo menos uma letra maiúscula");
        validate(/[0-9]/, "Pelo menos um número");
        validate(/[@$!%*?&#]/, "Pelo menos um caractere especial (@$!%*?&#)");

        if (password.length < 8) {
            errors.push("Pelo menos 8 caracteres");
        }

        if (strongPasswordRegex.test(password)) {
            message.textContent = "Senha segura!";
            message.style.color = "green";
        } else {
            message.textContent = "A senha não atende aos seguintes critérios:";
            for (let error of errors) {
                message.textContent += "\n- " + error;
            }
            message.style.color = "red";
        }
    });
});

/*function togglePassword() {
    var passwordInput = document.getElementById("password");
    var toggleBtn = document.querySelector(".toggle-password");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        toggleBtn.textContent = "Ocultar senha";
    } else {
        passwordInput.type = "password";
        toggleBtn.textContent = "Mostrar senha";
    }
}*/
