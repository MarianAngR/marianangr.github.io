document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".filter-container .w3-button");
    const projects = document.querySelectorAll(".w3-third");

    const categories = {
        "Perfect Production": "Game Jam Projects",
        "SHUT UP!": "Game Jam Projects",
        "Los Ojos Verdes": "Game Jam Projects",
        "A La Carte": "Academic Projects"
    };

    window.filterProjects = function (category, clickedButton) {
        projects.forEach((project) => {
            const projectName = project.querySelector("p b").innerText.trim();
            const projectCategory = categories[projectName] || "Other";
            project.style.display = (category === "ALL" || projectCategory === category) ? "block" : "none";
        });

        buttons.forEach((btn) => btn.classList.remove("active-filter"));
        clickedButton.classList.add("active-filter");
    };
});

// Script to open and close sidebar
function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
}
 
function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
}