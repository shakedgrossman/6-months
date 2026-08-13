const memories = [
    {
        file: "Memory 1.jpg"
    }
];

let currentMemory = 0;

const opening = document.getElementById("opening");
const playButton = document.getElementById("playButton");

const timeline = document.getElementById("timeline");

const memory = document.getElementById("memory");
const memoryImage = document.getElementById("memoryImage");

const memoryPoint = document.getElementById("memoryPoint");
const memoryConnector = document.getElementById("memoryConnector");

const nextButton = document.getElementById("nextButton");
const previousButton = document.getElementById("previousButton");


function showMemory(index) {

    const item = memories[index];

    currentMemory = index;

    memoryImage.src = "Images/" + item.file;

    memoryImage.onerror = function () {
        console.log(
            "Could not load:",
            "Images/" + item.file
        );
    };

    const isAbove = index % 2 === 0;

    if (isAbove) {

        memory.classList.remove("below");
        memory.classList.add("above");

        memoryConnector.style.top =
            "calc(50% - 150px)";

        memoryPoint.style.top =
            "calc(50% - 150px)";

    } else {

        memory.classList.remove("above");
        memory.classList.add("below");

        memoryConnector.style.top =
            "calc(50% + 150px)";

        memoryPoint.style.top =
            "calc(50% + 150px)";
    }

    memory.classList.add("show");

    memoryPoint.classList.add("activate");
}


playButton.addEventListener("click", () => {

    opening.classList.add("hidden");

    setTimeout(() => {

        timeline.classList.add("active");

        showMemory(0);

    }, 700);

});


nextButton.addEventListener("click", () => {

    if (
        currentMemory <
        memories.length - 1
    ) {

        memory.classList.remove("show");

        setTimeout(() => {

            showMemory(
                currentMemory + 1
            );

        }, 500);
    }

});


previousButton.addEventListener("click", () => {

    if (currentMemory > 0) {

        memory.classList.remove("show");

        setTimeout(() => {

            showMemory(
                currentMemory - 1
            );

        }, 500);
    }

});
