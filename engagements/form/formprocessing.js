document.getElementById('myform').addEventListener('submit', function(event) {
            event.preventDefault();           
            alert("Form Submitted");

        const personname = document.getElementById('person').value;
        const emailname = document.getElementById('email').value;
        const passname = document.getElementById('passname').value;
        
        if (!personname || !emailname) {
            alert("You need a name and email.");
            return;
        }
        
        const formData = {
            name: personname,
            email: emailname,
            password: passname
        };

        console.log(formData);
        const xhr = new XMLHttpRequest();
        xhr.open("GET", "submit.json", true);
        xhr.setRequestHeader ("Content-Type", "application/json;charset=UTF-8");
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
            message = document.getElementById('message');
            const response = JSON.parse(xhr.responseText);
            message.textContent = response.message;
            form = document.getElementById('myform');
            form.reset();
            } else if (xhr.readyState === 4) {
                alert('Error submitting form.');
            }
        }
        xhr.send(JSON.stringify(formData));
        alert('Success!');
    })