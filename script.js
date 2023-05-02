const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    allowSlideNext: true,

    // If we need pagination
    // pagination: {
    //   el: '.swiper-pagination',

    // },

    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    scrollbar: {
        draggable: true,
    },
    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },
    slidesPerView: 3,
    spaceBetween: 20,
    centeredSlides: true,
    autoHeight: true,

    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
    },
});

// *** ACCORDION ***

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
