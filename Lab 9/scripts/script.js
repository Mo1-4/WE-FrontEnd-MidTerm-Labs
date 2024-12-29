// Question 1
let testimonials = document.querySelector(".testimonials-album");

let employees = [
    {image: "images/team-1.jpg", name: "Walter White", job: "Chief Executive Officer"},
    {image: "images/team-2.jpg", name: "Sara Jhonson", job: "Product Manager"},
    {image: "images/team-3.jpg", name: "William Anderson", job: "CTO"},
    {image: "images/team-4.jpg", name: "Amanda Jepson", job: "Accountant"}
]

employees.forEach(employee => {
    let testimonial = document.createElement("div");
    testimonial.classList.add("testimonials-album-item");
    testimonial.innerHTML = `
        <img src="${employee.image}" alt="Testimonial Image">
        <h3>${employee.name}</h3>
        <p>${employee.job}</p>
    `;
    testimonials.appendChild(testimonial);
});

// Question 2
let checkGrade = document.getElementById("checkGrade");
let gradeResult = document.getElementById("gradeResult");
checkGrade.addEventListener("click", () =>{
    let grade = parseFloat(document.getElementById("grade").value);
    let message = "";
    if(!isNaN(grade)){
        if(grade > 100 || grade < 0){
            gradeResult.style.color = "red";
            message = "Please Enter Valid Grade!";
        } else if (grade >= 90){
            gradeResult.style.color = "black";
            message = "Excellent 🥳";
        } else if(grade >= 70){
            gradeResult.style.color = "black";
            message = "Good 👍🏼";
        } else if(grade >= 50){
            gradeResult.style.color = "black";
            message = "Not Bad 🤏🏼";
        } else{
            gradeResult.style.color = "red";
            message = "Fail 👎🏼";
        }
    } else{
        gradeResult.style.color = "red";
        message = "Please Enter Valid Grade!";
    }
    gradeResult.style.display = "block";
    gradeResult.innerHTML = message;
})