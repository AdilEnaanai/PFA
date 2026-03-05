document.getElementById("casablanca").style.display = "block";
document.getElementById("rabat").style.display = "none";
document.getElementById("marrakech").style.display = "none";
document.getElementById("fes").style.display = "none";

function showCity(cityId) {
    const villes = ["casablanca", "rabat", "marrakech", "fes"];
    villes.forEach(id => {
        document.getElementById(id).style.display = (id == cityId) ? "block" : "none";
    });
}

