document.getElementById("myForm").addEventListener("submit", function(event){
    event.preventDefault();
    const first=document.getElementById("FirstName").value
    const last=document.getElementById("LastName").value
    const age=document.getElementById("age").value;

    if(!first||!last){
        alert("Please provide your full name")
        return;
    }

    if(!age||age<18){
        alert("You must be 18 years or older to submit this form")
        return;
    }

    const formData = {
        FirstName: FirstName,
        LastName: LastName,
        password: document.getElementById("Password").value,
        remember: document.getElementById("Remember").checked,
        state: document.getElementById("state").value,
        class: document.querySelector('input[name="class"]:checked') ? document.querySelector('input[name="class"]:checked').value:null
    };

    console.log(formData);
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "submit.json", true);
    xhr.setRequestHeader('Content-Type',"application/json;charset=UTF-8");
    xhr.onreadystatechange = function(){
        if (xhr.readyState === 4 && xhr.status === 200){
            alert("Form submitted successfully.");
        }else if(xhr.readyState===4){
            alert("Error submitting form");
        }
    };
    xhr.send(JSON.stringify(formData));
});