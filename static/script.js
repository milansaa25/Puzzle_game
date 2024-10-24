const forms = document.querySelector(".forms");
const pwShowHide = document.querySelectorAll(".eye-icon");
const links = document.querySelectorAll(".link");
const forgotPasswordLink = document.querySelector(".forgotpassword-link");
const forgotPasswordBox = document.querySelector(".forgotpasswordform");
const loginBox = document.querySelector(".login");
const registerBox = document.querySelector(".signup");
const backBtn = document.querySelector(".backbtn");

// Show/Hide Password
pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");
        
        pwFields.forEach(password => {
            if (password.type === "password") {
                password.type = "text";
                eyeIcon.classList.replace("bx-hide", "bx-show");
            } else {
                password.type = "password";
                eyeIcon.classList.replace("bx-show", "bx-hide");
            }
        });
    });
});

// Toggle between Login and Signup Forms
links.forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault(); // Prevent default link behavior
        forms.classList.toggle("show-signup");
    });
});

// Show Forgot Password Form
forgotPasswordLink.addEventListener("click", e => {
    e.preventDefault(); // Prevent default link behavior
    forgotPasswordBox.style.display = "block";
    registerBox.style.display = "none";
    loginBox.style.display = "none";
});

// Back to Login/Signup
backBtn.addEventListener("click", () => {
    forgotPasswordBox.style.display = "none";
    registerBox.style.display = "none"; // Hide signup box by default
    loginBox.style.display = "block"; // Show login box by default
});
