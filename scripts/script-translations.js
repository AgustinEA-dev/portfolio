import { translations } from "./script-data.js";
import { renderProjects } from "./script-projects.js";

export let currentLanguage = "en";

function toggleLanguage() {
    currentLanguage = (currentLanguage === 'es') ? 'en' : 'es';
    updateUI();
}

function updateUI() {
    document.querySelector("nav ul li:nth-child(1) a").innerText = translations[currentLanguage].navbar.projects;
    document.querySelector("nav ul li:nth-child(2) a").innerText = translations[currentLanguage].navbar.about;
    document.querySelector("nav ul li:nth-child(3) a").innerText = translations[currentLanguage].navbar.education;
    document.querySelector(".movil-menu ul li:nth-child(1) a").innerText = translations[currentLanguage].movil.projects
    document.querySelector(".movil-menu ul li:nth-child(2) a").innerText = translations[currentLanguage].movil.about
    document.querySelector(".movil-menu ul li:nth-child(3) a").innerText = translations[currentLanguage].movil.education
    document.querySelector("#projects-h2").innerText = translations[currentLanguage].projects;
    document.querySelector("#about-h2").innerText = translations[currentLanguage].aboutTitle;
    document.querySelector("#education-h2").innerText = translations[currentLanguage].educationTitle;
    document.querySelector(".hero h1").innerText = translations[currentLanguage].heroTitle;
    document.querySelector(".hero h2").innerText = translations[currentLanguage].heroSubtitle;
    document.querySelector(".hero .btn").innerText = translations[currentLanguage].viewProjects;
    document.querySelector("#show-more-btn").innerText = translations[currentLanguage].showMore;
    document.querySelector("footer p").innerHTML = translations[currentLanguage].footerText;
    document.querySelector("footer .footer-links li:nth-child(1) a").innerText = translations[currentLanguage].footerLinks.projects;
    document.querySelector("footer .footer-links li:nth-child(2) a").innerText = translations[currentLanguage].footerLinks.about;
    document.querySelector("footer .footer-links li:nth-child(3) a").innerText = translations[currentLanguage].footerLinks.education;

    const aboutSections = document.querySelectorAll(".about-section p");
    aboutSections.forEach((section, index) => {
        section.innerHTML = translations[currentLanguage].aboutSections[index];
    });
}

document.getElementById("changeLanguageButton").addEventListener("click", toggleLanguage);

updateUI();