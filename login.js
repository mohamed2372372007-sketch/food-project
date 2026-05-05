localStorage.setItem("storedEmail", "faris@gmail.com");
localStorage.setItem("storedPass", "12345678");

let loginForm = document.getElementById("loginForm");
let message = document.getElementById("message");

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();

  let emailInput = document.getElementById("email-log").value.trim();
  let passwordInput = document.getElementById("password-log").value.trim();
  let savedEmail = localStorage.getItem("storedEmail");
  let savedPassword = localStorage.getItem("storedPass");

  if (emailInput === "" || passwordInput === "") {
    message.innerText = "All fields are required";
    message.style.color = "red";
    return;
  }
  if (!emailInput.includes("@") || !emailInput.includes(".")) {
    message.innerText = "Please enter a valid email";
    message.style.color = "red";
    return;
  }
  if (emailInput === savedEmail && passwordInput === savedPassword) {
    message.innerText = "Login successfully! ";
    message.style.color = "green";
    loginForm.reset();
  } else {
    message.innerText = "Incorrect email or password";
    message.style.color = "red";
  }
});
