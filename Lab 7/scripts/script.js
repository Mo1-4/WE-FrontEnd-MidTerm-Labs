// Question 1
const gallery = document.getElementById("gallary");
const imageURLS = ["camping-1.jpg","camping-2.jpg","camping-3.jpg","camping-4.jpg","camping-5.jpg","camping-6.jpg"];

imageURLS.forEach((url) =>{
    const image = document.createElement("img");
    image.src = `images/${url}`;
    image.alt = `Image From ${url}`
    gallery.appendChild(image);
})

// Question 2
let addButton = document.getElementById("calc");
let result = document.getElementById("result");

addButton.addEventListener("click", () =>{
    let num1 = parseFloat(document.getElementById("inp1").value);
    let num2 = parseFloat(document.getElementById("inp2").value);
    if (!isNaN(num1) && !isNaN(num2)){
        result.style.display = "block";
        result.style.color = "black";
        result.innerHTML = `The Result Is: ${num1 + num2}`;
    } else{
        result.style.display = "block";
        result.style.color = "red";
        result.innerHTML = `Enter Valid Number`;
    }
})

// Question 3
let visitCount = localStorage.getItem('page_view');

if (!visitCount) {
    visitCount = 0;
}

localStorage.setItem('page_view', ++visitCount);

document.getElementById('visitorCount').textContent = `You have visited this page ${visitCount} times.`;
