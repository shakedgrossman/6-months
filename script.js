const memories = [
    "Memory 1.jpg",
    "Memory 2.jpg",
    "Memory 2.5.JPG",
    "Memory 3.jpg",
    "Memory 4.JPG"
];


let currentMemory = 0;


const opening =
    document.getElementById("opening");

const playButton =
    document.getElementById("playButton");

const timeline =
    document.getElementById("timeline");

const memory =
    document.getElementById("memory");

const memoryImage =
    document.getElementById("memoryImage");

const memoryDate =
    document.getElementById("memoryDate");

const previousButton =
    document.getElementById("previousButton");

const nextButton =
    document.getElementById("nextButton");


/* =================================
   SHOW MEMORY
================================= */

function showMemory(index) {

    currentMemory = index;

    memoryImage.src =
        "Images/" + memories[index];

    memoryDate.textContent =
        "Memory " + (index + 1);

}


/* =================================
   PLAY
================================= */

playButton.addEventListener(
    "click",
    () => {

        opening.classList.add("hidden");

        setTimeout(() => {

            timeline.classList.add("active");

            showMemory(0);

        }, 500);

    }
);


/* =================================
   NEXT
================================= */

nextButton.addEventListener(
    "click",
    () => {

        if (
            currentMemory <
            memories.length - 1
        ) {

            currentMemory++;

            showMemory(currentMemory);

        }

    }
);


/* =================================
   PREVIOUS
================================= */

previousButton.addEventListener(
    "click",
    () => {

        if (currentMemory > 0) {

            currentMemory--;

            showMemory(currentMemory);

        }

    }
);
