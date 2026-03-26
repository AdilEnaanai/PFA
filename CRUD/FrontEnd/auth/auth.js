const registration = document.getElementById("registration");
registration.style.display = "none";

const loginForm = document.getElementById("authentication");
loginForm.style.display = "block";

const registerLink = document.getElementById("registerLink");
registerLink.addEventListener("click", (e) => {
  e.preventDefault();
  registration.style.display = "block";
  loginForm.style.display = "none";
});

const loginLink = document.getElementById("authenticationLink");
loginLink.addEventListener("click", (e) => {
  e.preventDefault();
    registration.style.display = "none";
    loginForm.style.display = "block";
});

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

