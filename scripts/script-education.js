import { titles } from "./script-data.js";

const container = document.querySelector(".image-container");
const modal = document.getElementById("image-modal");
const modalImg = document.getElementById("modal-img");
const closeModal = document.querySelector(".close");
const showMoreBtn = document.getElementById("show-more-btn");

let showingAll = false;

function renderImages(limit = 3) {
    container.innerHTML = "";

    titles.slice(0, limit).forEach((imgData, index) => {
        const img = document.createElement("img");
        img.src = imgData.src;
        img.alt = imgData.alt;
        img.classList.add("hover-zoom", "fade-in");

        img.style.animationDelay = `${index * 0.1}s`;

        img.addEventListener("click", () => {
            modal.style.display = "flex";
            modalImg.src = img.src;
            modalImg.alt = img.alt;
        });

        container.appendChild(img);
    });
}

renderImages(3);

showMoreBtn.addEventListener("click", () => {
    showingAll = !showingAll;
    renderImages(showingAll ? titles.length : 3);
    showMoreBtn.textContent = showingAll ? "Mostrar menos" : "Mostrar más";
});

closeModal.addEventListener("click", () => modal.style.display = "none");
modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
});