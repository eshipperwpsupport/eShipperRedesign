const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,
  slidesPerView: 1.35,
  effect: "coverflow",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 0,
    modifier: 0,
  },
  spaceBetween: 20,
  //   centeredSlides: false,
  keyboard: {
    enabled: true,
  },

  on: {
    init: function () {
      updatePaginationVisibility(this); // Call the function when slide changes
    },
    slideChange: function () {
      updatePaginationVisibility(this); // Call the function when slide changes
    },
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 0,
      centeredSlides: true,
      pagination: {
        el: ".more-services .swiper-pagination",
      },
      // Navigation arrows
      navigation: {
        nextEl: ".more-services .swiper-button-next",
        prevEl: ".more-services .swiper-button-prev",
      },
      coverflowEffect: {
        rotate: 0,
        stretch: 0.1,
        depth: 7,
        modifier: 60,
      },
    },
  },
});

function updatePaginationVisibility(swiper) {
  // Select all bullets
  const allBullets = document.querySelectorAll(
    ".more-services .swiper-pagination-bullet"
  );
  const totalBullets = allBullets.length;
  // Remove 'visible' class from all bullets initially
  allBullets.forEach((bullet) => bullet.classList.remove("visible"));

  // console.log(allBullets);

  // Find index of the active bullet
  const activeIndex = Array.from(allBullets).findIndex((bullet) =>
    bullet.classList.contains("swiper-pagination-bullet-active")
  );

  // Determine start index based on active bullet position
  let startIndex;
  if (activeIndex <= 2) {
    // Covers first 3 slides where we want to show the first 4 bullets
    startIndex = 0;
  } else if (activeIndex > totalBullets - 4) {
    // Covers last slide scenarios
    startIndex = totalBullets - 3;
  } else {
    // For middle slides, keep the active bullet as the third bullet
    startIndex = activeIndex - 2;
  }

  // Add 'visible' class to relevant bullets
  for (let i = startIndex; i < startIndex + 3 && i < totalBullets; i++) {
    allBullets[i].classList.add("visible");
    // console.log(allBullets[i]);
  }
}
