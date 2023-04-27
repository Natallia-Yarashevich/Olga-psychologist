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
        480: {
            slidesPerView: 1,
            // spaceBetween: 10,
        },
        //  when window width is >= 480px

        620: {
            slidesPerView: 1,
            // spaceBetween: 10,
        },
        750: {
            slidesPerView: 2,
            // spaceBetween: 10,
        },
        968: {
            slidesPerView: 3,
            // spaceBetween: 10,
        },
        1300: {
            slidesPerView: 3,
            // spaceBetween: 10,
        },
        // when window width is >= 800px
        1500: {
            slidesPerView: 4,
            // spaceBetween: 10,
        },
        1800: {
            slidesPerView: 4,
            spaceBetween: 10,
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