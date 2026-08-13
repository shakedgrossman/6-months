/* =================================
   MEMORIES
================================= */

/*
   The memories are listed manually so
   GitHub's alphabetical/binary-looking
   file order does not affect the timeline.
*/

const memories = [

    {
        file: "Memory 1.jpg"
    },

    {
        file: "Memory 2.jpg"
    },

    {
        file: "Memory 2.5.JPG"
    },

    {
        file: "Memory 3.jpg"
    },

    {
        file: "Memory 4.JPG"
    },

    {
        file: "Memory 5.MP4",
        type: "video"
    },

    {
        file: "Memory 6.JPG"
    },

    {
        file: "Memory 7.JPG"
    },

    {
        file: "Memory 8.JPG"
    },

    {
        file: "Memory 9.JPG"
    },

    {
        file: "Memory 10.JPG"
    },

    {
        file: "Memory 11.png"
    },

    {
        file: "Memory 12.JPG"
    },

    {
        file: "Memory 13.JPG"
    },

    {
        file: "Memory 14.JPG"
    },

    {
        file: "Memory 15.png"
    },

    {
        file: "Memory 16.jpg"
    },

    {
        file: "Memory 17.jpg"
    },

    {
        file: "Memory 18.jpg"
    },

    {
        file: "Memory 19.JPG"
    },

    {
        file: "Memory 20.jpg"
    },

    {
        file: "Memory 21.JPG"
    },

    {
        file: "Memory 22.JPG"
    },

    {
        file: "Memory 22.5.JPG"
    },

    {
        file: "Memory 23.JPG"
    },

    {
        file: "Memory 23.png"
    },

    {
        file: "Memory 24.png"
    },

    {
        file: "Memory 25.JPG"
    },

    {
        file: "Memory 26.JPG"
    },

    {
        file: "Memory 28.JPG"
    },

    {
        file: "Memory 29.JPG"
    },

    {
        file: "Memory 30.HEIC"
    },

    {
        file: "Memory 32.JPG"
    },

    {
        file: "Memory 33.HEIC"
    },

    {
        file: "Memory 33.5.JPG"
    },

    {
        file: "Memory 34.JPG"
    },

    {
        file: "Memory 34.5.JPG"
    },

    {
        file: "Memory 35.JPG"
    },

    {
        file: "Memory 36.JPG"
    },

    {
        file: "Memory 37.JPG"
    },

    {
        file: "Memory 38.png"
    },

    {
        file: "Memory 39.png"
    },

    {
        file: "Memory 40.png"
    },

    {
        file: "Memory 41.png"
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

const mediaContainer =
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
   CREATE MEDIA
================================= */

function updateMedia(item) {

    const path =
        "Images/" + item.file;


    /*
       If the memory is a video,
       replace the image with a video.
    */

    if (item.type === "video") {

        const video =
            document.createElement("video");

        video.src = path;

        video.controls = true;

        video.playsInline = true;

        video.preload = "metadata";

        video.className =
            "memory-media";


        mediaContainer.replaceWith(
            video
        );


        return video;

    }


    /*
       Normal image.
    */

    let img =
        document.getElementById(
            "memoryImage"
        );


    /*
       If the previous memory was a video,
       recreate the image element.
    */

    if (!img) {

        img =
            document.createElement("img");

        img.id =
            "memoryImage";

        img.className =
            "memory-media";

        memory.insertBefore(
            img,
            document.querySelector(
                ".memory-info"
            )
        );

    }


    img.src = path;

    img.alt =
        item.file;

    return img;

}


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
       MEDIA
    ================================= */

    updateMedia(item);


    /* =================================
       TEMPORARY TEXT
    ================================= */

    date.textContent =
        `Memory ${index + 1}`;


    title.textContent =
        "";


    description.textContent =
        "";


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
           LOAD NEXT
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


        memory.classList.add(
            "exit"
        );

        point.classList.remove(
            "activate"
        );


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
