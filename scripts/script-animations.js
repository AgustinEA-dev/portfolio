document.addEventListener("DOMContentLoaded", function () {
    const numParticles = 100;
    const body = document.body;
    for (let i = 0; i < numParticles; i++) {
        let particle = document.createElement("div");
        particle.classList.add("particle");
        particle.style.left = Math.random() * 100 + "vw";
        particle.style.top = Math.random() * 100 + "vh";
        particle.style.animationDuration = 3 + Math.random() * 5 + "s";
        body.appendChild(particle);
    }
});

export function animateTitle() {
    const titles = document.querySelectorAll('#projects-h2, #about-h2, #education-h2');
    const aboutSections = document.querySelectorAll('.about-section');
    const projectCards = document.querySelectorAll(".project-card")

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    titles.forEach(title => observer.observe(title));
    projectCards.forEach(projectCard => observer.observe(projectCard));
    aboutSections.forEach(section => observer.observe(section));
}

document.addEventListener('DOMContentLoaded', animateTitle);

