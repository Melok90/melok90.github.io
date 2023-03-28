
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    freeMode: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination-2",
        },
    breakpoints: {
                768: {
                slidesPerView: 2,
                spaceBetween:20,
                },
                1240: {
                slidesPerView: 3,
                spaceBetween: 65,
                },
                1800: {
                    slidesPerView: 4,
                    spaceBetween: 65,
                    },
            },
});

var swiper3 = new Swiper(".swiper3", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  freeMode: true,
  autoplay: {
      delay: 2000,
      disableOnInteraction: false,
      },
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
      },
  pagination: {
    el: ".swiper-pagination",
  },
  breakpoints: {
              
              768: {
              slidesPerView: 2,
              spaceBetween:15,
              },
              1240: {
              slidesPerView: 3,
              spaceBetween: 45,
              },
             
          },
});

const openPopUp = document.getElementById ("open-popUp");
const windowOuterWidth = window.outerWidth

openPopUp.addEventListener("click", function(e) {
    if ( windowOuterWidth < 992) {

        document.getElementById('drop-down').classList.toggle("active");
        document.querySelector('.dark-screen').classList.toggle("active");
        document.querySelector('body').classList.toggle("block");
    }
  
} );





