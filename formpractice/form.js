    const form = document.getElementById("userForm");
    const toggleLink = document.getElementById("toggleForm");
    const title = document.getElementById("formTitle");
    const btn = document.getElementById("submitBtn");
    const message = document.getElementById("message");

    let isLoginMode = false;

    toggleLink.addEventListener("click", () => {
    isLoginMode = !isLoginMode;
    title.textContent = isLoginMode ? "Login" : "Sign Up";
    btn.textContent = isLoginMode ? "Login" : "Sign Up";
    toggleLink.textContent = isLoginMode ? "Don't have an account? Sign Up" : "Already have an account? Login";
    message.textContent = "";
    });

    form.addEventListener("submit", function(e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (isLoginMode) {
    // Login Logic
    const storedUser = JSON.parse(localStorage.getItem(username));

    if (storedUser && storedUser.password === password) {
    message.style.color = "green";
    message.textContent = "Login successful!";
    } else {
    message.style.color = "red";
    message.textContent = "Invalid username or password.";
    }

    } else {
    // Sign Up Logic
    if (localStorage.getItem(username)) {
    message.style.color = "red";
    message.textContent = "Username already exists.";
    } else {
    localStorage.setItem(username, JSON.stringify({ username, password }));
    message.style.color = "green";
    message.textContent = "Sign up successful! You can now login.";
    }
    }

    form.reset();
    });

