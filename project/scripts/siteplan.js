// siteplan.js
// For WDD131 project: basic dynamic interaction example

document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header h1");

    header.addEventListener("click", () => {
        alert("Welcome to the Tanzania JobConnect site plan!");
    });
});
