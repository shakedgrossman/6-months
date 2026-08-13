// =========================
// PLAY BUTTON
// =========================

const playButton = document.getElementById("playButton");
const timeline = document.getElementById("timeline");

playButton.addEventListener("click", () => {

    timeline.scrollIntoView({
        behavior: "smooth"
    });

});


// =========================
// TIMELINE ANIMATION
// =========================

const memories = document.querySelectorAll(".memory");

const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

            }

        });

    },

    {
        threshold: 0.45
    }

);

memories.forEach((memory) => {

    observer.observe(memory);

});
