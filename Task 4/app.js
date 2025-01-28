// Function to register a new user
function register() {
    const username = document.getElementById("reg-username").value;
    const password = document.getElementById("reg-password").value;
    
    if (username && password) {
        // Save username and password to localStorage (simulating a database)
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        alert("User registered successfully!");
        document.getElementById("register-form").style.display = "none";
        document.getElementById("login-form").style.display = "block";
    } else {
        alert("Please fill all fields!");
    }
}

// Function to log in a user
function login() {
    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;
    
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');
    
    if (username === storedUsername && password === storedPassword) {
        document.getElementById("login-form").style.display = "none";
        document.getElementById("secured-page").style.display = "block";
    } else {
        alert("Incorrect username or password!");
    }
}

// Function to log out the user
function logout() {
    document.getElementById("secured-page").style.display = "none";
    document.getElementById("login-form").style.display = "block";
}

// Initial setup: Show login form if user is not logged in
if (localStorage.getItem('username') && localStorage.getItem('password')) {
    document.getElementById("login-form").style.display = "block";
} else {
    document.getElementById("register-form").style.display = "block";
}
