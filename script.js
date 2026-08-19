const memories = [

    {
        file: "Memory 1.jpg",
        title: "Hoi An",
        date: "21.02",
        description: "היום שבו באתי אליך לים"
    },

    {
        file: "Memory 2.jpg",
        title: "Hue",
        date: "22.02",
        description: "היום שבו נסעת לפגוש אותי שוב"
    },

    {
        file: "Memory 2.5.JPG",
        title: "Hue",
        date: "22.02",
        description: "הייתה לנו את השיחה"
    },

    {
        file: "Memory 3.jpg",
        title: "הבית של קוואן",
        date: "22.02",
        description: "הרבה סימני שאלה ובסוף נפרדנו בבוקר שאחרי"
    },

    {
        file: "Memory 4.JPG",
        title: "The long distance faze",
        date: "23.02–23.04",
        description: ""
    },

    {
        file: "Memory 5.MP4",
        title: "The long distance faze",
        date: "23.02–23.04",
        description: ""
    },

    {
        file: "Memory 6.JPG",
        title: "The long distance faze",
        date: "",
        description: "מתכונן לאיחוד הגדול…"
    },

    {
        file: "Memory 7.JPG",
        title: "האיחוד הגדול",
        date: "23.04",
        description: ""
    },

    {
        file: "Memory 8.JPG",
        title: "Di big crush",
        date: "29.04",
        description: "boom boom auchi auchi"
    },

    {
        file: "Memory 9.JPG",
        title: "The wedding",
        date: "30.04",
        description: ""
    },

    {
        file: "Memory 10.JPG",
        title: "Spicy Bomboklat",
        date: "30.04",
        description: ""
    },

    {
        file: "Memory 12.JPG",
        title: "The healing faze",
        date: "",
        description: "תראה איך אתה מטפל בי יפה"
    },

    {
        file: "Memory 13.JPG",
        title: "The healing faze",
        date: "",
        description: "יותם"
    },

    {
        file: "Memory 15.png",
        title: "The tattoo",
        date: "08.05",
        description: "auchi auchi #2"
    },

    {
        file: "Memory 16.jpg",
        title: "Tushita",
        date: "10.05",
        description: ""
    },

    {
        file: "Memory 17.jpg",
        title: "The fixing our phon faze",
        date: "11.05",
        description: "A trip to McLeod"
    },

    {
        file: "Memory 18.jpg",
        title: "Avocado Smoothies",
        date: "13.05",
        description: ""
    },

    {
        file: "Memory 19.JPG",
        title: "The waterfall",
        date: "15.05",
        description: ""
    },

    {
        file: "Memory 20.jpg",
        title: "The waterfall",
        date: "15.05",
        description: ""
    },

    {
        file: "Memory 21.JPG",
        title: "The waterfall",
        date: "15.05",
        description: ""
    },

    {
        file: "Memory 22.JPG",
        title: "The waterfall",
        date: "15.05",
        description: ""
    },

    {
        file: "Memory 22.5.JPG",
        title: "Meow",
        date: "18.05",
        description: ""
    },

    {
        file: "Memory 23.JPG",
        title: "Sethan",
        date: "19.05",
        description: "הגיחה הראשונה"
    },

    {
        file: "Memory 23.png",
        title: "Sethan",
        date: "22.05–12.06",
        description: "paratha power"
    },

    {
        file: "Memory 24.png",
        title: "Sethan",
        date: "22.05–12.06",
        description: "paratha power"
    },

    {
        file: "Memory 25.JPG",
        title: "The Movie",
        date: "22.05–12.06",
        description: "יא משוגע"
    },

    {
        file: "Memory 26.JPG",
        title: "Sethan",
        date: "22.05–12.06",
        description: "אוהבת אותך"
    },

    {
        file: "Memory 28.JPG",
        title: "The movie",
        date: "13.06",
        description: "הסרט שאין להזכיר את שמו"
    },

    {
        file: "Memory 29.JPG",
        title: "Taj",
        date: "16.06",
        description: "עוזבים את אינדיאה :((("
    },

    {
        file: "Memory 30.HEIC",
        title: "Sri Lanka",
        date: "19.06",
        description: ""
    },

    {
        file: "Memory 32.JPG",
        title: "החוף הסודי",
        date: "07.07",
        description: ""
    },

    {
        file: "Memory 33.HEIC",
        title: "Kalpitia",
        date: "09.07",
        description: ""
    },

    {
        file: "Memory 33.5.JPG",
        title: "Puttalam",
        date: "",
        description: ""
    },

    {
        file: "Memory 34.JPG",
        title: "Mama's food",
        date: "",
        description: "body dinner ready"
    },

    {
        file: "Memory 35.JPG",
        title: "My love",
        date: "",
        description: ""
    },

    {
        file: "Memory 36.JPG",
        title: "Eli's food",
        date: "",
        description: "מנצח את האוכל של מאמה פור מי"
    },

    {
        file: "Memory 37.JPG",
        title: "Eli's food",
        date: "",
        description: ""
    },

    {
        file: "Memory 38.png",
        title: "Vella island",
        date: "28.07",
        description: ""
    },

    {
        file: "Memory 39.png",
        title: "Vella island",
        date: "28.07",
        description: ""
    },

    {
        file: "Memory 40.png",
        title: "Australia",
        date: "01.08",
        description: "unbelievable"
    },

    {
        file: "Memory 41.png",
        title: "Moving in together",
        date: "18.08",
        description: "כאילו לא גרנו יחד עד עכשיו 🤪"
    }

];


let currentMemory = 0;


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

const memoryVideo =
    document.getElementById("memoryVideo");

const memoryTitle =
    document.getElementById("memoryTitle");

const memoryDate =
    document.getElementById("memoryDate");

const memoryDescription =
    document.getElementById("memoryDescription");

const previousButton =
    document.getElementById("previousButton");

const nextButton =
    document.getElementById("nextButton");

const restartButton =
    document.getElementById("restartButton");

const timelineDot =
    document.getElementById("timelineDot");

const timelineProgress =
    document.getElementById("timelineProgress");

const currentNumber =
    document.getElementById("currentNumber");

const totalNumber =
    document.getElementById("totalNumber");

const progressLine =
    document.querySelector(".progressLine::after");


/* =================================
   TOTAL
================================= */

totalNumber.textContent =
    String(memories.length)
        .padStart(2, "0");


/* =================================
   PRELOAD IMAGE
================================= */

function preloadImage(index) {

    if (
        index < 0 ||
        index >= memories.length
    ) {
        return;
    }

    const item =
        memories[index];

    if (
        item.file
            .toLowerCase()
            .endsWith(".mp4")
    ) {
        return;
    }

    const image =
        new Image();

    image.src =
        "Images/" + item.file;
}


/* =================================
   UPDATE TIMELINE
================================= */

function updateTimeline(index) {

    const total =
        memories.length - 1;

    const progress =
        total > 0
            ? (index / total) * 100
            : 0;


    timelineDot.style.top =
        progress + "%";


    timelineProgress.style.height =
        progress + "%";


    currentNumber.textContent =
        String(index + 1)
            .padStart(2, "0");


    /*
     * Progress bar
     */

    const progressElement =
        document.querySelector(".progressLine");

    if (progressElement) {

        progressElement.style.setProperty(
            "--progress",
            progress + "%"
        );

    }


    /*
     * Restart button
     */

    if (
        index === memories.length - 1
    ) {

        restartButton.classList.add(
            "visible"
        );

    } else {

        restartButton.classList.remove(
            "visible"
        );

    }

}


/* =================================
   SHOW MEMORY
================================= */

function showMemory(
    index,
    direction = 1
) {

    currentMemory = index;


    /*
     * Animate current memory out
     */

    memory.style.opacity = "0";

    memory.style.transform =
        direction > 0
            ? "translateX(-35px)"
            : "translateX(35px)";


    setTimeout(() => {

        const current =
            memories[index];


        const isVideo =
            current.file
                .toLowerCase()
                .endsWith(".mp4");


        /* =============================
           MEDIA
        ============================= */

        if (isVideo) {

            memoryImage.style.display =
                "none";

            memoryVideo.style.display =
                "block";

            memoryVideo.src =
                "Images/" + current.file;

            memoryVideo.load();

        } else {

            memoryVideo.pause();

            memoryVideo.removeAttribute(
                "src"
            );

            memoryVideo.load();

            memoryVideo.style.display =
                "none";

            memoryImage.style.display =
                "block";

            memoryImage.src =
                "Images/" + current.file;

            memoryImage.alt =
                current.title;
        }


        /* =============================
           TEXT
        ============================= */

        memoryTitle.textContent =
            current.title;


        memoryDate.textContent =
            current.date;


        memoryDescription.textContent =
            current.description;


        memoryDate.style.display =
            current.date
                ? "block"
                : "none";


        memoryDescription.style.display =
            current.description
                ? "block"
                : "none";


        /* =============================
           TIMELINE
        ============================= */

        updateTimeline(index);


        /* =============================
           ANIMATE IN
        ============================= */

        memory.style.transform =
            direction > 0
                ? "translateX(35px)"
                : "translateX(-35px)";


        requestAnimationFrame(() => {

            requestAnimationFrame(() => {

                memory.style.opacity =
                    "1";

                memory.style.transform =
                    "translateX(0)";

            });

        });


        /* =============================
           PRELOAD NEXT
        ============================= */

        preloadImage(
            index + 1
        );

        preloadImage(
            index - 1
        );

    }, 250);

}


/* =================================
   PLAY
================================= */

playButton.addEventListener(
    "click",
    () => {

        opening.classList.add(
            "hidden"
        );


        setTimeout(() => {

            timeline.classList.add(
                "active"
            );

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

            showMemory(
                currentMemory + 1,
                1
            );

        }

    }
);


/* =================================
   PREVIOUS
================================= */

previousButton.addEventListener(
    "click",
    () => {

        if (
            currentMemory > 0
        ) {

            showMemory(
                currentMemory - 1,
                -1
            );

        }

    }
);


/* =================================
   RESTART
================================= */

restartButton.addEventListener(
    "click",
    () => {

        restartButton.classList.remove(
            "visible"
        );


        showMemory(
            0,
            -1
        );

    }
);


/* =================================
   KEYBOARD
================================= */

document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "ArrowRight"
        ) {

            if (
                currentMemory <
                memories.length - 1
            ) {

                showMemory(
                    currentMemory + 1,
                    1
                );

            }

        }


        if (
            event.key === "ArrowLeft"
        ) {

            if (
                currentMemory > 0
            ) {

                showMemory(
                    currentMemory - 1,
                    -1
                );

            }

        }

    }
);
