import { projects } from "./script-data.js";

export function renderProjects() {
    const container = document.getElementById('projects-container');

    container.innerHTML = '';

    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.classList.add('project-card');

        projectCard.innerHTML = `
            <img src="${project.imageUrl}" alt="${project.title}" loading="lazy">
            <h3>${project.title}</h3>
            <p>${project.description} ${project.features}</p>
            <a href="${project.linkDeploy}" target="_blank">Ver Deploy</a>
            <a href="${project.linkGitHub}" target="_blank">Código</a>
        `;

        container.appendChild(projectCard);

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = 'translateY(0)';
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        observer.observe(projectCard);
    });
}


if (typeof renderProjects === "function") {
    renderProjects();
}

