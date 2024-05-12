document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    // Perform login validation and authentication here
    console.log("Login details:", email, password);
    // Redirect to index.html upon successful login
    window.location.href = "index.html";
});
