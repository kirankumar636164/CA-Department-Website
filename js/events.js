/* ======================================================
   EVENTS DATA
====================================================== */

const events = [

    {
        title: "Hackathon 2026",
        category: "Competition",
        date: "15 Aug 2026",
        venue: "Computer Lab Complex",
        image: "assets/images/events/hackathon.jfif",
        description: "24-hour coding challenge where students solve real-world technology problems."
    },

    {
        title: "AI Workshop",
        category: "Workshop",
        date: "20 Aug 2026",
        venue: "Computer Lab Complex",
        image: "assets/images/events/ai.jfif",
        description: "Learn machine learning and artificial intelligence with practical demonstrations."
    },

    {
        title: "Web Development Bootcamp",
        category: "Bootcamp",
        date: "25 Aug 2026",
        venue: "Computer Lab Complex",
        image: "assets/images/events/web.jfif",
        description: "Build responsive websites using HTML, CSS, JavaScript and Bootstrap."
    },

    {
        title: "Cyber Security Workshop",
        category: "Workshop",
        date: "30 Aug 2026",
        venue: "Computer Lab Complex",
        image: "assets/images/events/cyber.jfif",
        description: "Learn ethical hacking and modern security techniques."
    },

    {
        title: "Cloud Computing Seminar",
        category: "Seminar",
        date: "05 Sep 2026",
        venue: "Computer Lab Complex",
        image: "assets/images/events/cloud.jfif",
        description: "Industry experts discuss cloud technologies and career opportunities."
    },

    {
        title: "Data Science Bootcamp",
        category: "Bootcamp",
        date: "10 Sep 2026",
        venue: "Computer Lab Complex",
        image: "assets/images/events/datascience.jpg",
        description: "Introduction to analytics, Python and machine learning."
    },

    {
        title: "Project Expo",
        category: "Exhibition",
        date: "15 Sep 2026",
        venue: "Computer Lab Complex",
        image: "assets/images/events/expo.jfif",
        description: "Students showcase innovative academic projects."
    },

    {
        title: "Tech Quiz",
        category: "Competition",
        date: "20 Sep 2026",
        venue: "Computer Lab Complex",
        image: "assets/images/events/quiz.jpg",
        description: "Competitive technical quiz covering modern technologies."
    },

    {
        title: "Startup Talk",
        category: "Industry",
        date: "25 Sep 2026",
        venue: "Computer Lab Complex",
        image: "assets/images/events/startup.jpg",
        description: "Entrepreneurs share startup journeys and experiences."
    },

    {
        title: "Resume Workshop",
        category: "Career",
        date: "01 Oct 2026",
        venue: "Computer Lab Complex",
        image: "assets/images/events/resume.jpg",
        description: "Build professional resumes and improve interview readiness."
    },

    {
        title: "Innovation Day",
        category: "Event",
        date: "10 Oct 2026",
        venue: "Computer Lab Complex",
        image: "assets/images/events/innovation.jpg",
        description: "Students present innovative ideas and prototypes."
    },

    {
        title: "Coding Challenge",
        category: "Competition",
        date: "15 Oct 2026",
        venue: "Computer Lab Complex",
        image: "assets/images/events/coding.jpg",
        description: "Competitive programming challenge for students."
    },

    {
        title: "UI UX Workshop",
        category: "Workshop",
        date: "20 Oct 2026",
        venue: "Computer Lab Complex",
        image: "assets/images/events/uiux.jpg",
        description: "Learn modern interface and experience design principles."
    },

    {
        title: "DevOps Seminar",
        category: "Seminar",
        date: "25 Oct 2026",
        venue: "Computer Lab Complex",
        image: "assets/images/events/devops.jpg",
        description: "Explore CI/CD pipelines and DevOps practices."
    },

    {
        title: "Alumni Meet",
        category: "Networking",
        date: "30 Oct 2026",
        venue: "Computer Lab Complex",
        image: "assets/images/events/alumni.jpg",
        description: "Meet successful alumni and build connections."
    }

];

/* ======================================================
   DOM ELEMENTS
====================================================== */

const eventsContainer = document.getElementById("eventsContainer");
const searchInput = document.getElementById("searchInput");
const filterButtons = document.querySelectorAll(".filter-btn");
const sortSelect = document.getElementById("sortSelect");
const resultsCount = document.getElementById("resultsCount");

/* ======================================================
   CURRENT STATE
====================================================== */

let currentSearch = "";
let currentCategory = "All";
let currentSort = "default";

/* ======================================================
   RENDER EVENTS
====================================================== */

function renderEvents(eventsArray) {

    eventsContainer.innerHTML = "";

    eventsArray.forEach((event, index) => {

        eventsContainer.innerHTML += `

        <div class="col-lg-4 col-md-6"
             data-aos="fade-up"
             data-aos-delay="${index * 50}">

            <div class="event-card">

                <div class="event-image">

                    <img src="${event.image}"
                         alt="${event.title}">

                    <span class="event-badge">
                        ${event.category}
                    </span>

                </div>

                <div class="event-content">

                    <div class="event-date">

                        <i class="bi bi-calendar-event"></i>

                        ${event.date}

                    </div>

                    <h4>${event.title}</h4>

                    <p>${event.description}</p>

                    <button
                        class="btn btn-primary details-btn"
                        data-index="${events.indexOf(event)}">

                        View Details

                    </button>

                </div>

            </div>

        </div>

        `;
    });

}

/* ======================================================
   UPDATE EVENTS
====================================================== */

function updateEvents() {

    let filteredEvents = [...events];

    /* SEARCH */

    if (currentSearch) {

        filteredEvents = filteredEvents.filter(event =>
            event.title.toLowerCase()
                .includes(currentSearch.toLowerCase())
        );

    }

    /* FILTER */

    if (currentCategory !== "All") {

        filteredEvents = filteredEvents.filter(event =>
            event.category === currentCategory
        );

    }

    /* SORT */

    if (currentSort === "az") {

        filteredEvents.sort((a, b) =>
            a.title.localeCompare(b.title)
        );

    }

    if (currentSort === "za") {

        filteredEvents.sort((a, b) =>
            b.title.localeCompare(a.title)
        );

    }

    /* RESULTS COUNTER */

    if (resultsCount) {

        resultsCount.textContent =
            `${filteredEvents.length} Events Found`;

    }

    /* NO RESULTS */

    if (filteredEvents.length === 0) {

        eventsContainer.innerHTML = `

<div class="col-12">

    <div class="no-events">

        <i class="bi bi-search"></i>

        <h3>No Events Found</h3>

        <p>Try a different search or filter.</p>

    </div>

</div>
`;

        return;

    }

    renderEvents(filteredEvents);

}

/* ======================================================
   SEARCH
====================================================== */

searchInput.addEventListener("input", () => {

    currentSearch = searchInput.value;

    updateEvents();

});

/* ======================================================
   FILTER
====================================================== */

filterButtons.forEach(btn => {

    btn.addEventListener("click", () => {

        filterButtons.forEach(button =>
            button.classList.remove("active")
        );

        btn.classList.add("active");

        currentCategory = btn.dataset.category;

        updateEvents();

    });

});

/* ======================================================
   SORT
====================================================== */

sortSelect.addEventListener("change", () => {

    currentSort = sortSelect.value;

    updateEvents();

});

/* ======================================================
   MODAL
====================================================== */

const modal =
    new bootstrap.Modal(
        document.getElementById("eventModal")
    );

document.addEventListener("click", (e) => {

    if (!e.target.classList.contains("details-btn")) return;

    const event =
        events[e.target.dataset.index];

    document.getElementById("modalTitle").textContent =
        event.title;

    document.getElementById("modalImage").src =
        event.image;

    document.getElementById("modalDate").textContent =
        event.date;

    document.getElementById("modalVenue").textContent =
        event.venue;

    document.getElementById("modalCategory").textContent =
        event.category;

    document.getElementById("modalDescription").textContent =
        event.description;

    modal.show();

});

/* ======================================================
   INITIAL LOAD
====================================================== */

updateEvents();