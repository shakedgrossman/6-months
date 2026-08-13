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
            500
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


    /* Reset memory */

    memory.classList.remove("show");

    memory.classList.remove("above");

    memory.classList.remove("below");


    /* Reset point animation */

    memoryPoint.classList.remove("activate");


    /*
     * Force the browser to recognize
     * the animation as a new animation.
     */

    void memoryPoint.offsetWidth;


    /* Update content */

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
       ABOVE / BELOW
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
            "150px";

        memoryPoint.style.top =
            "calc(50% - 150px)";

        memory.classList.add("above");

    } else {

        /*
         * Branch goes downward.
         */

        memoryBranch.style.top =
            "50%";

        memoryBranch.style.height =
            "150px";

        memoryPoint.style.top =
            "calc(50% + 150px)";

        memory.classList.add("below");

    }


    /* =================================
       POINT FIRST
    ================================= */

    setTimeout(
        () => {

            memoryPoint.classList.add(
                "activate"
            );

        },
        100
    );


    /* =================================
       THEN PHOTO
    ================================= */

    setTimeout(
        () => {

            memory.classList.add("show");

        },
        350
    );

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


        /* =================================
           LAST MEMORY
        ================================= */

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

                    ending.classList.add(
                        "active"
                    );

                    isChanging = false;

                },
                700
            );


            return;

        }


        /* =================================
           REMOVE CURRENT MEMORY
        ================================= */

        memory.classList.remove(
            "show"
        );

        memoryPoint.classList.remove(
            "activate"
        );


        /* =================================
           LOAD NEXT MEMORY
        ================================= */

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
