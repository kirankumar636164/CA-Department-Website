/* =====================================
   FILTER
===================================== */

const filterBtns =
document.querySelectorAll(".filter-btn");

const galleryItems =
document.querySelectorAll(".gallery-item");

filterBtns.forEach(btn => {

    btn.addEventListener("click", () => {

        filterBtns.forEach(b =>
            b.classList.remove("active")
        );

        btn.classList.add("active");

        const filter =
        btn.dataset.filter;

        galleryItems.forEach(item => {

            if(
                filter === "all" ||
                item.dataset.category === filter
            ){

                item.style.display = "block";

            } else {

                item.style.display = "none";

            }

        });

    });

});

/* =====================================
   LIGHTBOX
===================================== */

const modal =
new bootstrap.Modal(
document.getElementById("galleryModal")
);

const modalImg =
document.getElementById(
"modalGalleryImage"
);

galleryItems.forEach(item => {

    item.addEventListener("click", () => {

        modalImg.src =
        item.querySelector("img").src;

        modal.show();

    });

});