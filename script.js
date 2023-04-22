const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    grabCursor: true,
    centeredSlides: true,

    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
        paginationClickable: true,
        dynamicBullets: true,
        dynamicMainBullets: 2,

    },
    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    // scrollbar: {
    //   el: ".swiper-scrollbar",
    // },

    // Default parameters
    slidesPerView: 1,
    spaceBetween: 10,
    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        //  when window width is >= 480px
        480: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        900: {
            slidesPerView: 2,
            spaceBetween: 5,
        },
        // when window width is >= 800px
        1024: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
    },
});