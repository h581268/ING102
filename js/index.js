let dropdown_beregnladetid = document.getElementById('kwh');
let knapp_beregnladetid = document.getElementById('bergen-ladetid-knapp');

knapp_beregnladetid.addEventListener("click", () => {
    console.log(dropdown_beregnladetid.value);
    document.getElementById('graf-og-tabell').style.display = "block";
});