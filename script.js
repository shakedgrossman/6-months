/* =================================
   MEMORY DATA
================================= */

const memories = [

    {
        image: "Images/01.jpg",
        date: "15.02.2026",
        title: "The beginning",
        description: "Our story started here."
    },

    {
        image: "Images/02.jpg",
        date: "28.02.2026",
        title: "A little moment",
        description: "One of those moments I never want to forget."
    },

    {
        image: "Images/03.jpg",
        date: "12.03.2026",
        title: "Another memory",
        description: "And somehow, everything kept getting better."
    },

    {
        image: "Images/04.jpg",
        date: "01.04.2026",
        title: "That day",
        description: "A memory worth keeping forever."
    },

    {
        image: "Images/05.jpg",
        date: "20.04.2026",
        title: "Us",
        description: "And this is only the beginning."
    }

];


/* =================================
   ELEMENTS
================================= */

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

const memoryTitle =
    document.getElementById("memoryTitle");

const memoryDescription =
    document.getElementById("memoryDescription");

const memoryPoint =
    document.getElementById("memoryPoint");

const memoryBranch =
    document.getElementById("memoryBranch");

const nextButton =
    document.getElementById("nextButton");

const ending =
    document.getElementById("ending");


/* =================================
   STATE
================================= */

let currentMemory = 0;

let isChanging = false;


/* =================================
   OPEN TIMELINE
================================= */

playButton.addEventListener("click", () => {

    opening.style.opacity = "0";

    setTimeout(() => {

        opening.style.visibility = "hidden";

        timeline.classList.add("active");

        showMemory(0);

    }, 700);

});


/* =================================
   SHOW MEMORY
================================= */

function showMemory(index) {

    const item = memories[index];

    currentMemory = index;


    /* Remove previous state */

    memory.classList.remove("above");
    memory.classList.remove("below");
    memory.classList.remove("show");

    memoryPoint.classList.remove("activate");


    /* Update content */

    memoryImage.src = item.image;

    memoryImage.alt = item.title;

    memoryDate.textContent = item.date;

    memoryTitle.textContent = item.title;

    memoryDescription.textContent =
        item.description;


    /* Determine whether memory is above
       or below the timeline */

    const isAbove = index % 2 === 0;


    if (isAbove) {

        /*
         * Timeline is at 50%.
         *
         * Branch goes upward.
         */

        memoryBranch.style.top = "50%";

        memoryBranch.style.height = "150px";

        memoryPoint.style.top =
            "calc(50% - 150px)";

        memory.classList.add("above");

    } else {

        /*
         * Branch goes downward.
         */

        memoryBranch.style.top = "50%";

        memoryBranch.style.height = "150px";

        memoryPoint.style.top =
            "calc(50% + 150px)";

        memory.classList.add("below");

    }


    /*
     * First activate the point.
     */

    setTimeout(() => {

        memoryPoint.classList.add("activate");

    }, 100);


    /*
     * Then slide the photograph in.
     */

    setTimeout(() => {

        memory.classList.add("show");

    }, 350);


    /* Update button */

    if (index === memories.length - 1) {

        nextButton.innerHTML = `
            <span class="next-arrow">→</span>
            <span class="next-label">FINISH</span>
        `;

    } else {

        nextButton.innerHTML = `
            <span class="next-arrow">→</span>
            <span class="next-label">NEXT</span>
        `;

    }

}


/* =================================
   NEXT BUTTON
================================= */

nextButton.addEventListener("click", () => {

    if (isChanging) {
        return;
    }

    isChanging = true;


    /*
     * Last memory:
     * go to ending.
     */

    if (currentMemory >= memories.length - 1) {

        memory.classList.remove("show");

        setTimeout(() => {

            ending.classList.add("active");

            isChanging = false;

        }, 700);

        return;
    }


    /*
     * Remove current memory.
     */

    memory.classList.remove("show");

    memoryPoint.classList.remove("activate");


    /*
     * Wait for the old photograph
     * to leave before introducing
     * the next memory.
     */

    setTimeout(() => {

        showMemory(currentMemory + 1);

        setTimeout(() => {

            isChanging = false;

        }, 1000);

    }, 600);

});
