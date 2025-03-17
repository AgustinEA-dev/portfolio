import { translations, projects } from "./script-data.js";
import { currentLanguage } from "./script-translations.js";

export function renderProjects() {
    const container = document.getElementById('projects-container');
    container.innerHTML = '';

    const translatedProjects = translations[currentLanguage].projectsData;

    translatedProjects.forEach((project, index) => {
        const projectCard = document.createElement('div');
        projectCard.classList.add('project-card');

        projectCard.innerHTML = `
            <img src="${projects[index].imageUrl}" alt="${project.title}" loading="lazy">
            <h3>${project.title}</h3>
            <p>${project.description} ${project.features}</p>
            <a href="${projects[index].linkDeploy}" target="_blank">${translations[currentLanguage].viewDeploy}</a>
            <a href="${projects[index].linkGitHub}" target="_blank">${translations[currentLanguage].viewCode}</a>
        `;

        container.appendChild(projectCard);
    });
}
