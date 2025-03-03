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

