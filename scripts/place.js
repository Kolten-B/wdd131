// Function to calculate wind chill
function calculateWindChill(temperature, windSpeed) {
    if (temperature <= 10 && windSpeed > 4.8) {
        // Wind chill formula (Celsius)
        return 13.12 + 0.6215 * temperature -  11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
    } else {
        return "N/A";
    }
}

// Set wind chill and display it
const temperature = 12; // Celsius
const windSpeed = 18; // km/h
const windChill = calculateWindChill(temperature, windSpeed);
document.getElementById("windChillValue").textContent = windChill;

// Set last modified date
const lastModified = new Date(document.lastModified);
document.getElementById("lastModifiedDate").textContent = lastModified.toLocaleString();
