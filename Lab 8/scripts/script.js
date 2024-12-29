// Question 1
document.getElementById("form").addEventListener("submit", (e) => {
    const fullName = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const notice = document.getElementById("notice");

    if (fullName == "" || email == "") {
        notice.style.display = "block";
        notice.style.color = "red";
        notice.innerHTML = "All fields must be filled out.";
        e.preventDefault();
        return;
    } else if (email.indexOf("@") == -1 || email.indexOf(".") == -1) {
        notice.style.display = "block";
        notice.style.color = "red";
        notice.innerHTML = "The email field is not valid.";
        e.preventDefault();
    } else if (message.length < 30 || message.length > 300) {
        notice.style.display = "block";
        notice.style.color = "red";
        notice.innerHTML = "the message must be between 30 and 300 characters.";
        e.preventDefault();
    } else {
        alert("form valid")
    }
});

// Question 2
let employees = [
    {id: "1", name: "Mohamed", work: "UI Designer", active: "Yes"},
    {id: "2", name: "Mohanad", work: "UX Designer", active: "Not active"},
    {id: "3", name: "Ahmed", work: "Back End Developer", active: "Yes"},
    {id: "4", name: "Kareem", work: "front End Developer", active: "Not active"}
]

employees.forEach((item) =>{
    console.log(`ID: ${item.id} \n Name: ${item.name} \n Work: ${item.work} \n Active: ${item.active}`) //Console Output
    console.log("----------------------------")
})

// Question 3
let visitCount = localStorage.getItem('page_view');

if (!visitCount) {
    visitCount = 0;
}

localStorage.setItem('page_view', ++visitCount);

document.getElementById('visitorCount').textContent = `You have visited this page ${visitCount} times.`;