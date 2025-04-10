document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefaultfault();
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const question = document.getElementById("question").value;

    const formData = {
        name: name,
        age: age,
        question: question
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