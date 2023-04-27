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
    // el: ".swiper-scrollbar",
    // },

    // Default parameters
    slidesPerView: 1,
    spaceBetween: 10,
    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 320px
        300: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        400: {
            slidesPerView: 1,
            spaceBetween: 15,
        },
        500: {
            slidesPerView: 1,
            spaceBetween: 15,
        },

        620: {
            slidesPerView: 1,
            spaceBetween: 40,
        },
        /*800: {
        slidesPerView: 2,
        spaceBetween: 20,
        },*/
        969: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 13,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        // when window width is >= 800px
        1500: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1800: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
    },
});

// BURGER-MENU
const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.nav');

navbarToggle.addEventListener('click', () => {
    navbarToggle.classList.toggle('active');
    navbarMenu.classList.toggle('active');
});