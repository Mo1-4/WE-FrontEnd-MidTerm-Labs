let ageCalc = document.getElementById("ageCalc")

ageCalc.addEventListener("click", () => {
    let myYear = parseInt(document.getElementById("myYear").value)
    let myMonth = parseInt(document.getElementById("myMonth").value)
    let myDate = parseInt(document.getElementById("myDate").value)
    let demo = document.getElementById("demo")
    birthdateInput = `${myYear}-${myMonth}-${myDate}`; 
    if (!birthdateInput || isNaN(Date.parse(birthdateInput))) {
        demo.style.color = "red";
        demo.innerHTML = "Invalid birthdate, You Should Enter YYYY-MM-DD";
    } else {
        const birthDate = new Date(birthdateInput);
        const today = new Date();

        let years = today.getFullYear() - birthDate.getFullYear();
        let months = today.getMonth() - birthDate.getMonth();
        let days = today.getDate() - birthDate.getDate();

        if (months < 0) {
            years--;
            months += 12;
        }

        if (days < 0) {
            months--;
            const prevMonth = (today.getMonth() === 0 ? 11 : today.getMonth() - 1);
            const daysInPrevMonth = new Date(today.getFullYear(), prevMonth + 1, 0).getDate();
            days += daysInPrevMonth;
        }
        demo.style.color = "blue";
        demo.innerHTML = `You are ${years} years, ${months} months, and ${days} days old.`;
    }
})



