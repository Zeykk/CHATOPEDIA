
window.onload = function () {
    const list = document.getElementById("cat-list");
    list.innerHTML = "";
    if (typeof catData === "undefined") {
        list.innerHTML = "<p>Erreur de chargement des données.</p>";
        return;
    }
    catData.forEach(cat => {
        const div = document.createElement("div");
        div.className = "cat-card";
        div.innerHTML = `<h2>${cat.nom}</h2><p>${cat.description}</p>`;
        list.appendChild(div);
    });
};
