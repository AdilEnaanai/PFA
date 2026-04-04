const registration = document.getElementById("registration");
registration.style.display = "none";

const loginForm = document.getElementById("authentication");
loginForm.style.display = "block";

const registerLink = document.getElementById("registerLink");
registerLink.addEventListener("click", (e)=> {
  e.preventDefault();
  registration.style.display = "block";
  loginForm.style.display = "none";
});

const loginLink = document.getElementById("loginLink");
loginLink.addEventListener("click", (e) => {
  e.preventDefault();
    registration.style.display = "none";
    loginForm.style.display = "block";
});

const regForm = document.getElementById("regForm");
regForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.getElementById("regUsername").value;
  const password = document.getElementById("regPassword").value;
  const firstname = document.getElementById("firstname").value;
  const lastname = document.getElementById("lastname").value;

    fetch("http://127.0.0.1:5000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username, password, firstname, lastname })
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error("Error:", error);
    });
});

const authForm = document.getElementById("authForm");
authForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  fetch("http://127.0.0.1:5000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ username, password })
  })
  .then(response => response.json())
  .then(data => {
    console.log(data);
    window.location.href = "../profil.html";
  })
  .catch(error => {
    alert("Login failed: " + error.message);
  });
});