import { translations, projects } from "./script-data.js";

export function renderProjects(language = "en") {
    const container = document.getElementById('projects-container');
    container.innerHTML = '';

    const translatedProjects = translations[language].projectsData;

    translatedProjects.forEach((project, index) => {
        const projectCard = document.createElement('div');
        projectCard.classList.add('project-card');

        projectCard.innerHTML = `
            <img src="${projects[index].imageUrl}" alt="${project.title}" loading="lazy">
            <h3>${project.title}</h3>
            <p>${project.description} ${project.features}</p>
            <a href="${projects[index].linkDeploy}" target="_blank">${translations[language].viewDeploy}</a>
            <a href="${projects[index].linkGitHub}" target="_blank">${translations[language].viewCode}</a>
        `;

        container.appendChild(projectCard);
    });
}

if (typeof renderProjects === "function") {
    renderProjects();
}

