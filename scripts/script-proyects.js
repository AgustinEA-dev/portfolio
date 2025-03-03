const projects = [
    {
        title: "To-Do List",
        description: "To-Do List using a single linked list as the main structure.",
        subtitle: "Features:",
        features: "Add and remove tasks, interactive calendar, languge switcher, dinamic background that changes from day to night.",
        imageUrl: "assets/img-todo-list.jpg",
        linkDeploy: "https://lnkd.in/dsAyWEgS",
        linkGitHub: "https://lnkd.in/dqP9D6qP"
    },
    {
        title: "To-Do List",
        description: "To-Do List using a single linked list as the main structure.",
        subtitle: "Features:",
        features: "Add and remove tasks, interactive calendar, languge switcher, dinamic background that changes from day to night.",
        imageUrl: "assets/img-todo-list.jpg",
        linkDeploy: "https://lnkd.in/dsAyWEgS",
        linkGitHub: "https://lnkd.in/dqP9D6qP"
    },
    {
        title: "To-Do List",
        description: "To-Do List using a single linked list as the main structure.",
        subtitle: "Features:",
        features: "Add and remove tasks, interactive calendar, languge switcher, dinamic background that changes from day to night.",
        imageUrl: "assets/img-todo-list.jpg",
        linkDeploy: "https://lnkd.in/dsAyWEgS",
        linkGitHub: "https://lnkd.in/dqP9D6qP"
    },
    {
        title: "To-Do List",
        description: "To-Do List using a single linked list as the main structure.",
        subtitle: "Features:",
        features: "Add and remove tasks, interactive calendar, languge switcher, dinamic background that changes from day to night.",
        imageUrl: "assets/img-todo-list.jpg",
        linkDeploy: "https://lnkd.in/dsAyWEgS",
        linkGitHub: "https://lnkd.in/dqP9D6qP"
    },
    {
        title: "To-Do List",
        description: "To-Do List using a single linked list as the main structure.",
        subtitle: "Features:",
        features: "Add and remove tasks, interactive calendar, languge switcher, dinamic background that changes from day to night.",
        imageUrl: "assets/img-todo-list.jpg",
        linkDeploy: "https://lnkd.in/dsAyWEgS",
        linkGitHub: "https://lnkd.in/dqP9D6qP"
    },
    {
        title: "To-Do List",
        description: "To-Do List using a single linked list as the main structure.",
        subtitle: "Features:",
        features: "Add and remove tasks, interactive calendar, languge switcher, dinamic background that changes from day to night.",
        imageUrl: "assets/img-todo-list.jpg",
        linkDeploy: "https://lnkd.in/dsAyWEgS",
        linkGitHub: "https://lnkd.in/dqP9D6qP"
    },
    {
        title: "To-Do List",
        description: "To-Do List using a single linked list as the main structure.",
        subtitle: "Features:",
        features: "Add and remove tasks, interactive calendar, languge switcher, dinamic background that changes from day to night.",
        imageUrl: "assets/img-todo-list.jpg",
        linkDeploy: "https://lnkd.in/dsAyWEgS",
        linkGitHub: "https://lnkd.in/dqP9D6qP"
    },
];

function renderProjects() {
    const container = document.getElementById('projects-container');

    container.innerHTML = '';

    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.classList.add('project-card');

        projectCard.innerHTML = `
            <img src="${project.imageUrl}" alt="${project.title}">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
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


function animateTitle() {
    const title = document.querySelector('#projects-h2');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    observer.observe(title);
}

renderProjects();

animateTitle();