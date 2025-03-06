document.getElementById("backButton").addEventListener("click", function() {
    window.location.href = "INDEX.HTML";
});

document.getElementById("gitHubLink2").addEventListener("click", function() {
    window.open("https://github.com/JoaoTulio29", "_blank");
});

document.addEventListener("DOMContentLoaded", () => {
    const planets = document.querySelectorAll(".plan"); // Seleciona todos os planetas
    let currentIndex = 0; // Índice do planeta atual

    function showPlanet(index) {
        planets.forEach((planet, i) => {
            planet.classList.toggle("active", i === index);
        });
    }

    document.querySelector(".left").addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + planets.length) % planets.length;
        showPlanet(currentIndex);
    });

    document.querySelector(".right").addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % planets.length;
        showPlanet(currentIndex);
    });

    showPlanet(currentIndex); // Exibe o primeiro planeta ao carregar a página
});
