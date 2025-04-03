document.addEventListener("DOMContentLoaded", function () {
    // Smooth Scrolling
    document.querySelectorAll("a").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            if (this.getAttribute("href").startsWith("#")) {
                event.preventDefault();
                document.querySelector(this.getAttribute("href")).scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

    // Animated Text Effect
    let text = document.querySelector(".animated-text");
    let textArray = ["Sourabh Tyagi", "VLSI Engineer", "Analog IC Designer"];
    let index = 0;

    setInterval(() => {
        text.innerHTML = textArray[index];
        index = (index + 1) % textArray.length;
    }, 2000);
});
