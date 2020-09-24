//Knapp for å velge fylke
let knappVelgFylke = document.getElementById("valgt-fylke-knapp");
// Hvis knappen blir funnet på siden
if (knappVelgFylke) {
    let velgFylke = () => {
        knappVelgFylke.addEventListener("click", () => {
            if (document.getElementById("ladepunkt").value == 'Rogaland') {
                window.location = './rogaland.html';
            } else if (document.getElementById("ladepunkt").value == 'Vestland') {
                window.location = './vestland.html';
            }
        })
    }

    knappVelgFylke.onclick = velgFylke();
}


// Knapp for å vise riktig ladetid for valgt batterikapasitet
let knappBeregnladetid = document.getElementById("bergen-ladetid-knapp");
// Hvis knappen blir funnet på siden
if (knappBeregnladetid) {
    // tar ibruk riktig verdi i dropdown og viser riktig tabell og graf
    let beregnLadetid = () => {
        knappBeregnladetid.addEventListener("click", () => {
            document.getElementById("graf-og-tabell").style.display = "block";
        });
    }

    // bruker onclick metoden for å vise riktig ladetid for valgt batterikapasitet
    knappBeregnladetid.onclick = beregnLadetid();
}