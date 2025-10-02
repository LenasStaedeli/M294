const btn1 = document.querySelector("#min1");
const btn2 = document.querySelector("#plu1");
const p = document.querySelector("#p");
let Zahl = 0;

// --- Initialisierung: Zahl aus URL holen ---
const params = new URLSearchParams(window.location.search);
if (params.has("counter")) {
    Zahl = parseInt(params.get("counter")) || 0;
}
p.innerText = Zahl;

// --- Event-Listener für Buttons ---
btn1.addEventListener("click", () => {
    Zahl -= 1;
    updateState();
});

btn2.addEventListener("click", () => {
    Zahl += 1;
    updateState();
});

// --- Update Funktion ---
function updateState() {
    p.innerText = Zahl;

    const newUrl = `${window.location.pathname}?counter=${Zahl}`;

    history.pushState(
        { counter: Zahl },       // state-Objekt
        `Zähler ${Zahl}`,        // title (meist ignoriert)
        newUrl                   // neue URL mit Query Param
    );
}

// --- popstate-Event (Back/Forward Navigation) ---
window.addEventListener("popstate", (event) => {
    if (event.state && event.state.counter !== undefined) {
        Zahl = event.state.counter;
        p.innerText = Zahl;
    } else {
        // Fallback: Zahl aus URL lesen
        const params = new URLSearchParams(window.location.search);
        Zahl = parseInt(params.get("counter")) || 0;
        p.innerText = Zahl;
    }
});
