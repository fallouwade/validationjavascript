function showSection(id) {
    // Masquer toutes les sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Afficher la section demandée
    const sectionToShow = document.getElementById(id);
    if (sectionToShow) {
        sectionToShow.style.display = 'block';
    }
}

// Afficher la section par défaut (Accueil) lors du chargement de la page
window.onload = function() {
    showSection('home');
};


// single parametre

function sectionParametre(idd) {
    const section2 = document.querySelectorAll('.section2')
    section2.forEach(lesSections => {
        lesSections.style.display = 'none';
    });

    // Afficher la section demander
    const sectionParametre =document.getElementById(idd)
    if (sectionParametre) {
        sectionParametre.style.display = 'block';
    }
}

// Afficher la section par défaut (Accueil) lors du chargement de la page
window.onload = function() {
    sectionParametre('parametresgeneraux');
};



