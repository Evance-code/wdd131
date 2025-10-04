// ============================
// Temple Data
// ============================
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Extra temples (you should verify the URLs)
    {
        templeName: "Salt Lake Utah",
        location: "Salt Lake City, Utah, United States",
        dedicated: "1893, April, 6",
        area: 253015,
        imageUrl:
            "https://www.churchofjesuschrist.org/media/collection/salt-lake-utah-temple-images?lang=eng"  // replace with direct JPG/PNG link
    },
    {
        templeName: "Rome Italy",
        location: "Rome, Italy",
        dedicated: "2019, March, 10",
        area: 41010,
        imageUrl:
            "https://www.churchofjesuschrist.org/media/collection/rome-italy-temple-images?lang=eng"  // replace with direct link
    },
    {
        templeName: "Accra Ghana",
        location: "Accra, Ghana",
        dedicated: "2004, January, 11",
        area: 17500,
        imageUrl:
            "https://www.churchofjesuschrist.org/media/collection/accra-ghana-temple-images?lang=eng"  // replace with direct link
    }
];

// ============================
// DOM References
// ============================
const cardsContainer = document.querySelector("#temple-cards");
const navLinks = document.querySelectorAll(".navigation a");
const menuButton = document.getElementById("menu");
const nav = document.querySelector(".navigation");

// ============================
// Functions
// ============================
function displayTemples(list) {
    // Clear out any previous content
    cardsContainer.innerHTML = "";

    list.forEach(temple => {
        const card = document.createElement("div");
        card.classList.add("temple-card");

        card.innerHTML = `
      <h2>${temple.templeName}</h2>
      <p><strong>Location:</strong> ${temple.location}</p>
      <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
      <p><strong>Size:</strong> ${temple.area.toLocaleString()} sq ft</p>
      <img src="${temple.imageUrl}" alt="Photo of ${temple.templeName}" loading="lazy">
    `;

        cardsContainer.appendChild(card);
    });
}

// Helper: get year from the dedicated string
function getYear(dedicatedStr) {
    // assumes format "YYYY, Month, Day"
    const parts = dedicatedStr.split(",");
    const year = parseInt(parts[0]);
    return year;
}

// Filter functions
function showAll() {
    displayTemples(temples);
}

function showOld() {
    const filtered = temples.filter(t => getYear(t.dedicated) < 1900);
    displayTemples(filtered);
}

function showNew() {
    const filtered = temples.filter(t => getYear(t.dedicated) > 2000);
    displayTemples(filtered);
}

function showLarge() {
    const filtered = temples.filter(t => t.area > 90000);
    displayTemples(filtered);
}

function showSmall() {
    const filtered = temples.filter(t => t.area < 10000);
    displayTemples(filtered);
}

// ============================
// Event Listeners
// ============================
// Navigation filter clicks
navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const choice = e.target.textContent.trim();

        switch (choice) {
            case "Home":
                showAll();
                break;
            case "Old":
                showOld();
                break;
            case "New":
                showNew();
                break;
            case "Large":
                showLarge();
                break;
            case "Small":
                showSmall();
                break;
            default:
                showAll();
        }
    });
});

// Hamburger menu toggle
menuButton.addEventListener("click", () => {
    if (nav.style.display === "flex") {
        nav.style.display = "none";
        menuButton.textContent = "☰";
    } else {
        nav.style.display = "flex";
        menuButton.textContent = "✖";
    }
});

// ============================
// Initialize page
// ============================
showAll();  // Display all temples by default

// ============================
// Footer dynamic year and last modified
// ============================
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;
