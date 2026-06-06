/* =====================================
   SCROLL TO TOP
===================================== */

const scrollBtn =
document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){

        scrollBtn.classList.add("show");

    } else {

        scrollBtn.classList.remove("show");

    }

});

scrollBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

document
.querySelectorAll(".nav-link")
.forEach(link => {

    link.addEventListener("click", () => {

        const navMenu =
        document.getElementById("navMenu");

        if(navMenu.classList.contains("show")){

            bootstrap.Collapse
            .getOrCreateInstance(navMenu)
            .hide();

        }

    });

});