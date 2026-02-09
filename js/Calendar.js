const btn = document.getElementById("christopher");
const popup = document.getElementById("popup");
const closeBtn = document.getElementById("close-popup");

btn.addEventListener("click", () => {
    popup.style.display = "flex"; 
});

closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
});

popup.addEventListener("click", (e) => {
    if (e.target === popup) {
        popup.style.display = "none";
    }
});
