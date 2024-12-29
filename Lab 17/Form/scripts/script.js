document.getElementById("form").addEventListener("submit", (e) => {
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const notice = document.getElementById("notice");

    if (phone == "" || email == "") {
        notice.style.display = "block";
        notice.style.color = "red";
        notice.innerHTML = "All fields must be filled out.";
        e.preventDefault();
    } else if (email.indexOf("@") == -1 || email.indexOf(".") == -1) {
        notice.style.display = "block";
        notice.style.color = "red";
        notice.innerHTML = "The email field is not valid.";
        e.preventDefault();
    } else if (phone.length < 11) {
        notice.style.display = "block";
        notice.style.color = "red";
        notice.innerHTML = "The message must be 11 numbers.";
        e.preventDefault();
    } else {
        alert("form valid")
    }
});