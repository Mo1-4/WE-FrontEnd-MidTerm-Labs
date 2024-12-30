let ageCalc = document.getElementById("ageCalc")

ageCalc.addEventListener("click", () =>{
    let dateInput = parseInt(document.getElementById("dateInput").value)
    let monthInput = parseInt(document.getElementById("monthInput").value)
    let yearInput = parseInt(document.getElementById("yearInput").value)
    let message = document.getElementById("message")
    if(isNaN(dateInput) || isNaN(monthInput) || isNaN(yearInput)){
        message.classList.remove("text-primary")
        message.classList.add("text-danger")
        message.innerHTML = `Fields Not Valid`
    } else{
        const deffultDate = new Date()
        const myDate = new Date(`${yearInput}-${monthInput}-${dateInput}`)
        const newDay = Math.abs(deffultDate.getDate() - myDate.getDate())
        const newMonth = Math.abs(deffultDate.getMonth() - myDate.getMonth())
        const newYear = Math.abs(deffultDate.getFullYear() - myDate.getFullYear())
        if(dateInput > deffultDate.getDate() || monthInput > deffultDate.getMonth() || yearInput > deffultDate.getFullYear()){
            message.classList.remove("text-primary")
            message.classList.add("text-danger")
            message.innerHTML = `Dates Not Valid`
        } else if (dateInput < 0 || monthInput < 0 || yearInput < 0){
            message.innerHTML = `There are Not Negative Date`
        } else{
            message.classList.remove("text-danger")
            message.classList.add("text-primary")
            message.innerHTML = `Your Age is ${newYear} Years, ${newMonth} Months, ${newDay} Days Old`
        }
    }
})
