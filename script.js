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

const timelineLine =
    document.getElementById("timelineLine");

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

const memoryBranch =
    document.getElementById("memoryBranch");

const memoryPoint =
    document.getElementById("memoryPoint");

const nextButton =
    document.getElementById("nextButton");

const previousButton =
    document.getElementById("previousButton");

const ending =
    document.getElementById("ending");

const replayButton =
    document.getElementById("replayButton");


/* =================================
   STATE
================================= */

let currentMemory = 0;

let isChanging = false;


/* =================================
   PLAY
================================= */

playButton.addEventListener(
    "click",
    () => {

        opening.classList.add("hidden");

        setTimeout(
            () => {

                timeline.classList.add("active");

                showMemory(0);

            },
            600
        );

    }
);


/* =================================
   SHOW MEMORY
================================= */

function showMemory(index) {

    const item =
        memories[index];

    currentMemory =
        index;


    /* Reset */

    memory.classList.remove("show");

    memory.classList.remove("above");

    memory.classList.remove("below");

    memoryPoint.classList.remove("activate");


    /*
     * Reset animation.
     */

    void memoryPoint.offsetWidth;


    /* Content */

    memoryImage.src =
        item.image;

    memoryImage.alt =
        item.title;

    memoryDate.textContent =
        item.date;

    memoryTitle.textContent =
        item.title;

    memoryDescription.textContent =
        item.description;


    /* =================================
       MEMORY POSITION
    ================================= */

    const isAbove =
        index % 2 === 0;


    if (isAbove) {

        /*
         * Branch goes upward.
         */

        memoryBranch.style.top =
            "50%";

        memoryBranch.style.height =
            "145px";

        memoryPoint.style.top =
            "calc(50% - 145px)";

        memory.classList.add("above");

    } else {

        /*
         * Branch goes downward.
         */

        memoryBranch.style.top =
            "50%";

        memoryBranch.style.height =
            "145px";

        memoryPoint.style.top =
            "calc(50% + 145px)";

        memory.classList.add("below");

    }


    /* =================================
       POINT
    ================================= */

    setTimeout(
        () => {

            memoryPoint.classList.add(
                "activate"
            );

        },
        120
    );


    /* =================================
       PHOTO
    ================================= */

    setTimeout(
        () => {

            memory.classList.add("show");

        },
        380
    );


    /* =================================
       TIMELINE LENGTH
    ================================= */

    /*
     * Keep the timeline centered around
     * the current memory instead of
     * crossing the whole screen.
     */

    const left =
        Math.max(
            9,
            50 - (index * 2)
        );

    const right =
        Math.max(
            9,
            50 - (index * 2)
        );

    timelineLine.style.left =
        left + "%";

    timelineLine.style.width =
        (100 - left - right) + "%";

}


/* =================================
   NEXT
================================= */

nextButton.addEventListener(
    "click",
    () => {

        if (isChanging) {
            return;
        }


        isChanging = true;


        /* Last memory */

        if (
            currentMemory >=
            memories.length - 1
        ) {

            memory.classList.remove(
                "show"
            );

            memoryPoint.classList.remove(
                "activate"
            );


            setTimeout(
                () => {

                    timeline.classList.remove(
                        "active"
                    );

                    ending.classList.add(
                        "active"
                    );

                    isChanging = false;

                },
                700
            );


            return;

        }


        /* Remove current */

        memory.classList.remove(
            "show"
        );

        memoryPoint.classList.remove(
            "activate"
        );


        /* Next */

        setTimeout(
            () => {

                showMemory(
                    currentMemory + 1
                );


                setTimeout(
                    () => {

                        isChanging = false;

                    },
                    1000
                );

            },
            600
        );

    }
);


/* =================================
   PREVIOUS
================================= */

previousButton.addEventListener(
    "click",
    () => {

        if (isChanging) {
            return;
        }


        if (currentMemory === 0) {
            return;
        }


        isChanging = true;


        memory.classList.remove(
            "show"
        );

        memoryPoint.classList.remove(
            "activate"
        );


        setTimeout(
            () => {

                showMemory(
                    currentMemory - 1
                );


                setTimeout(
                    () => {

                        isChanging = false;

                    },
                    1000
                );

            },
            600
        );

    }
);


/* =================================
   REPLAY
================================= */

replayButton.addEventListener(
    "click",
    () => {

        ending.classList.remove(
            "active"
        );


        currentMemory = 0;


        setTimeout(
            () => {

                timeline.classList.add(
                    "active"
                );

                showMemory(0);

            },
            700
        );

    }
);
