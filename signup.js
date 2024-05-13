document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    // Perform signup validation and registration here
    console.log("Signup details:", name, email, password);
    // Example: Display success message
    document.getElementById("signupSuccess").textContent = "Sign up successful!";
    window.location.href = "login.html";});
