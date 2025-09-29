window.onload = function() {
    // Hol dir die Liste der "New Releases"
    const newReleases = document.querySelectorAll("h2 + ul.games")[0].children;

    // Durch alle <li> iterieren
    for (let game of newReleases) {
        // wenn kein "sale", dann ausblenden
        if (!game.classList.contains("sale")) {
            game.style.display = "none";
        }
    }
};