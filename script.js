// GSAP Fade-in Animation
document.addEventListener("DOMContentLoaded", () => {
    gsap.to(".fade-in", { opacity: 1, duration: 1, stagger: 0.3 });
});

// Scroll Animations
document.addEventListener("scroll", function () {
    let skills = document.querySelectorAll('.fill');
    skills.forEach(skill => {
        skill.style.width = skill.getAttribute('style').split(":")[1];
    });
});
