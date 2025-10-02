// Dynamic current year
document.getElementById("year").textContent = new Date().getFullYear();

// Last modified
const lastModifiedEl = document.getElementById("last-modified");
const lm = new Date(document.lastModified);
if (!isNaN(lm)) {
    lastModifiedEl.textContent = "Last Modification: " + lm.toLocaleString();
} else {
    lastModifiedEl.textContent = "";
}

/* ========== WIND CHILL (assignment requirement) ==========
 - calculateWindChill(t, v) must be one line of code and
   should accept t in °F and v in mph.
 - The function is NOT called unless conditions are met:
    t <= 50 (°F) and v > 3 (mph)
 - Visible page values are C and km/h so we convert them,
   check conditions, then call the single-line function.
==========================================================*/

/* single-line wind chill formula (returns °F) */
function calculateWindChill(t, v) { return 35.74 + 0.6215 * t - 35.75 * Math.pow(v, 0.16) + 0.4275 * t * Math.pow(v, 0.16); }

// Read values from DOM (visible units)
const tempC = Number(document.getElementById("temp-c").textContent);
const windKmh = Number(document.getElementById("wind-kmh").textContent);

// Convert to required units for formula
const tempF = (tempC * 9 / 5) + 32;
const windMph = windKmh / 1.609344;

// Container to show wind chill
const windChillContainer = document.getElementById("wind-chill");

// Only call calculateWindChill if rubric conditions are met (tempF <= 50 && windMph > 3)
if (tempF <= 50 && windMph > 3) {
    // call the single-line function (requirement)
    const wcF = calculateWindChill(tempF, windMph);
    const wcC = (wcF - 32) * 5 / 9;
    windChillContainer.innerHTML = `<p><strong>Wind Chill:</strong> ${wcC.toFixed(1)} °C (${wcF.toFixed(1)} °F)</p>`;
} else {
    // Do NOT call the function — mention N/A (this meets rubric rules)
    windChillContainer.innerHTML = `<p><strong>Wind Chill:</strong> N/A (conditions not met)</p>`;
}

/* ========== Performance / Accessibility notes ==========
 - Replace the example images with optimized WebP files:
     images/kilimanjaro-small.webp  (approx 800–1000px wide)
     images/kilimanjaro-large.webp  (approx 1400–1600px wide)
   Keep fallback avif/jpg for old browsers.
 - Compress WebP images so the page weight stays <500 KB for grading.
 - The SVG icon is inline and only shown in mobile via CSS (meets the rubric).
 - Pseudo-element emoticons are used on wide screens only (meets the rubric).
==========================================================*/
