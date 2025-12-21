const themeBtn = document.getElementById("themeBtn");
themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

let count = 0;
const countBtn = document.getElementById("countBtn");
const counter = document.getElementById("counter");

countBtn.addEventListener("click", () => {
    count++;
    counter.textContent = count;
});

const toggleBtn = document.getElementById("toggleBtn");
const hiddenText = document.getElementById("hiddenText");

toggleBtn.addEventListener("click", () => {
    hiddenText.classList.toggle("hidden");
});

