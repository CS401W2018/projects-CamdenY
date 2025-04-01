document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const username = document.getElementById("username").value;
    const age = parseInt(document.getElementById("age").value, 10);
    const password = document.getElementById("password").value;
    const repassword = document.getElementById("repassword").value;

    if (!name || !username) {
        alert("Please provide a full name and username");
        return;
    }

    if (password !== repassword) {
        alert("Passwords must match");
        return;
    }

    if (password.length < 8) {
        alert("Password must be longer than 8 characters");
        return;
    }

    if (!age || age < 18) {
        alert("You must be 18 years or older to submit this form");
        return;
    }

    const formData = {
        name: name,
        username: username,
        password: password,
        repassword: repassword,
        email: document.getElementById("email").value, 
        island: document.getElementById("island").value,
        state: document.querySelector('input[name="state"]:checked') 
            ? document.querySelector('input[name="state"]:checked').value 
            : null,
        reason: document.getElementById("reason").value
    };

    console.log(formData);
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "submit.json", true); // Changed to POST
    xhr.setRequestHeader('Content-Type', "application/json;charset=UTF-8");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            alert("Form submitted successfully.");
        } else if (xhr.readyState === 4) {
            alert("Error submitting form");
        }
    };
    xhr.send(JSON.stringify(formData));
});