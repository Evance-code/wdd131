// Dynamic year
document.getElementById("year").textContent = new Date().getFullYear();

// Last modified
const lastModifiedElement = document.querySelector(".last-modified");
const lastModifiedDate = new Date(document.lastModified);
lastModifiedElement.textContent = "Last Modification: " + lastModifiedDate.toLocaleString();
