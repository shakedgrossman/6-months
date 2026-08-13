/* =================================
   MEMORIES
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

const connector =
    document.getElementById("memoryConnector");

const point =
    document.getElementById("memoryPoint");

const memory =
    document.getElementById("memory");

const image =
    document.getElementById("memoryImage");

const date =
    document.getElementById("memoryDate");

const title =
    document.getElementById("memoryTitle");

const description =
    document.getElementById("memoryDescription");

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

let changing = false;


/* =================================
   START
================================= */

playButton.addEventListener(
    "click",
    () => {

        opening.classList.add(
            "hidden"
        );


        setTimeout(
            () => {

                timeline.classList.add(
                    "active"
                );

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

    memory.classList.remove(
        "show"
    );

    memory.classList.remove(
        "above"
    );

    memory.classList.remove(
        "below"
    );

    point.classList.remove(
        "activate"
    );


    void point.offsetWidth;


    /* =================================
       CONTENT
    ================================= */

    image.src =
        item.image;

    image.alt =
        item.title;

    date.textContent =
        item.date;

    title.textContent =
        item.title;

    description.textContent =
        item.description;


    /* =================================
       ALTERNATE POSITION
    ================================= */

    const above =
        index % 2 === 0;


    if (above) {

        connector.style.top =
            "calc(50% - 145px)";

        point.style.top =
            "calc(50% - 145px)";


        memory.classList.add(
            "above"
        );

    } else {

        connector.style.top =
            "calc(50% + 145px)";

        point.style.top =
            "calc(50% + 145px)";


        memory.classList.add(
            "below"
        );

    }


    /* =================================
       POINT ANIMATION
    ================================= */

    setTimeout(
        () => {

            point.classList.add(
                "activate"
            );

        },
        120
    );


    /* =================================
       MEMORY ENTERS
    ================================= */

    setTimeout(
        () => {

            memory.classList.add(
                "show"
            );

        },
        350
    );

}


/* =================================
   NEXT — DOWN
================================= */

nextButton.addEventListener(
    "click",
    () => {

        if (changing) {
            return;
        }


        changing = true;


        /* =================================
           END OF TIMELINE
        ================================= */

        if (
            currentMemory >=
            memories.length - 1
        ) {

            memory.classList.add(
                "exit"
            );

            point.classList.remove(
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


                    memory.classList.remove(
                        "exit"
                    );


                    changing = false;

                },
                850
            );


            return;

        }


        /* =================================
           CURRENT MEMORY LEAVES LEFT
        ================================= */

        memory.classList.add(
            "exit"
        );

        point.classList.remove(
            "activate"
        );


        /* =================================
           LOAD NEXT MEMORY
        ================================= */

        setTimeout(
            () => {

                memory.classList.remove(
                    "exit"
                );


                showMemory(
                    currentMemory + 1
                );


                setTimeout(
                    () => {

                        changing = false;

                    },
                    1000
                );

            },
            650
        );

    }
);


/* =================================
   PREVIOUS — UP
================================= */

previousButton.addEventListener(
    "click",
    () => {

        if (changing) {
            return;
        }


        if (currentMemory === 0) {
            return;
        }


        changing = true;


        /* Current memory leaves */

        memory.classList.add(
            "exit"
        );

        point.classList.remove(
            "activate"
        );


        /* Load previous */

        setTimeout(
            () => {

                memory.classList.remove(
                    "exit"
                );


                showMemory(
                    currentMemory - 1
                );


                setTimeout(
                    () => {

                        changing = false;

                    },
                    1000
                );

            },
            650
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
