// Knapp for å vise riktig ladetid for valgt batterikapasitet
let knappBeregnladetid = document.getElementById('bergen-ladetid-knapp');

// tar ibruk riktig verdi i dropdown og viser riktig tabell og graf
let beregnLadetid = () => {
    knappBeregnladetid.addEventListener("click", () => {
        console.log(document.getElementById('kwh').value);
        document.getElementById('graf-og-tabell').style.display = "block";
    });
}

// bruker onclick metoden for å vise riktig ladetid for valgt batterikapasitet
knappBeregnladetid.onclick = beregnLadetid();