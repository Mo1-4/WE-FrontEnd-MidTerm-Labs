document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();
    const notice = document.getElementById("notice");

    if (phone == "" || email == "" || message == "" || name == "") {
        notice.style.display = "block";
        notice.style.color = "red";
        notice.innerHTML = "All fields must be filled out.";
    } else if (email.indexOf("@") == -1 || email.indexOf(".") == -1) {
        notice.style.display = "block";
        notice.style.color = "red";
        notice.innerHTML = "The email field is not valid.";
    } else if (phone.length < 11) {
        notice.style.display = "block";
        notice.style.color = "red";
        notice.innerHTML = "The Phone number must be 11 numbers.";
    } else if (message.length < 30) {
        notice.style.display = "block";
        notice.style.color = "red";
        notice.innerHTML = "The message field must be greater than 30 characters.";
    } else {
        notice.style.display = "block";
        notice.style.color = "green";
        notice.innerHTML = "Form submitted successfully.";
        setTimeout(() => {
            window.location.href = "index.html";
        }, 2000);
    }
});