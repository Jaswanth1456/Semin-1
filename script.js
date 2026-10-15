// Student Registration
document.getElementById("signupForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim().toLowerCase();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    let message = document.getElementById("signupMessage");

    if (password !== confirmPassword) {
        message.style.color = "red";
        message.innerText = "Passwords do not match!";
        return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let existingUser = users.find(function(user) {
        return user.email === email;
    });

    if (existingUser) {
        message.style.color = "red";
        message.innerText = "Email already registered!";
        return;
    }

    let user = {
        name: name,
        email: email,
        password: password
    };

    users.push(user);

    localStorage.setItem("users", JSON.stringify(users));

    message.style.color = "green";
    message.innerText = "Registration successful!";

    document.getElementById("signupForm").reset();
});


// Student Login
document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let email = document.getElementById("loginEmail").value.trim().toLowerCase();
    let password = document.getElementById("loginPassword").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let user = users.find(function(u) {
        return u.email === email && u.password === password;
    });

    let message = document.getElementById("loginMessage");

    if (user) {
        message.style.color = "green";
        message.innerText = "Login successful! Welcome " + user.name;
    } else {
        message.style.color = "red";
        message.innerText = "Invalid email or password!";
    }
});