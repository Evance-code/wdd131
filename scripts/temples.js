
// Footer dynamic year and last modified
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Hamburger menu
const menuButton = document.getElementById("menu");
const nav = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
    nav.style.display = nav.style.display === "flex" ? "none" : "flex";
    menuButton.textContent = nav.style.display === "flex" ? "✖" : "☰";
});

