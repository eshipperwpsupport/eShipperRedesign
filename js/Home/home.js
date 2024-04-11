import { sliderLogo } from "../helper.js";
import { sliderInput } from "../helper.js";

document.querySelector("#canada-usa").addEventListener("click", activateForm);
document.querySelector("#worldwide").addEventListener("click", activateForm);

function activateForm(e) {
  const id = e.target.id;

  if (id === "worldwide") {
    document.querySelector(`#canada-usa-Form`).classList.remove("active");
    document.querySelector(`#worldwide-Form`).classList.add("active");
    document.querySelector(`#canada-usa-Form`).classList.remove("active");
    document.querySelector(`#${id}`).classList.add("active");
    document.querySelector(`#canada-usa`).classList.remove("active");
  } else {
    document.querySelector(`#canada-usa-Form`).classList.add("active");
    document.querySelector(`#worldwide-Form`).classList.remove("active");
    document.querySelector(`#canada-usa-Form`).classList.add("active");

    document.querySelector(`#${id}`).classList.add("active");
    document.querySelector(`#worldwide`).classList.remove("active");
  }
}

document.querySelectorAll(".review-stars ul").forEach((ele) => {
  ele.innerHTML = `
    
  <li>
                      <svg
                        width="20"
                        height="19"
                        viewBox="0 0 20 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.9039 6.48748L13.5039 5.33557L10.7678 0.559477C10.4318 -0.0165703 9.59167 -0.0165703 9.25567 0.559477L6.49572 5.33557L1.09572 6.48748C0.447717 6.6314 0.183671 7.42352 0.615811 7.92743L4.31181 12.0314L3.73576 17.5031C3.6638 18.1755 4.33581 18.6554 4.95981 18.3913L9.99981 16.1593L15.0398 18.3913C15.6638 18.6554 16.3358 18.1753 16.2639 17.5033L15.6878 12.0316L19.3838 7.92762C19.8158 7.42352 19.5759 6.63162 18.9039 6.48766V6.48748Z"
                          fill="#FFBF40"
                        />
                      </svg>
                    </li>
                    <li>
                      <svg
                        width="20"
                        height="19"
                        viewBox="0 0 20 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.9039 6.48748L13.5039 5.33557L10.7678 0.559477C10.4318 -0.0165703 9.59167 -0.0165703 9.25567 0.559477L6.49572 5.33557L1.09572 6.48748C0.447717 6.6314 0.183671 7.42352 0.615811 7.92743L4.31181 12.0314L3.73576 17.5031C3.6638 18.1755 4.33581 18.6554 4.95981 18.3913L9.99981 16.1593L15.0398 18.3913C15.6638 18.6554 16.3358 18.1753 16.2639 17.5033L15.6878 12.0316L19.3838 7.92762C19.8158 7.42352 19.5759 6.63162 18.9039 6.48766V6.48748Z"
                          fill="#FFBF40"
                        />
                      </svg>
                    </li>
                    <li>
                      <svg
                        width="20"
                        height="19"
                        viewBox="0 0 20 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.9039 6.48748L13.5039 5.33557L10.7678 0.559477C10.4318 -0.0165703 9.59167 -0.0165703 9.25567 0.559477L6.49572 5.33557L1.09572 6.48748C0.447717 6.6314 0.183671 7.42352 0.615811 7.92743L4.31181 12.0314L3.73576 17.5031C3.6638 18.1755 4.33581 18.6554 4.95981 18.3913L9.99981 16.1593L15.0398 18.3913C15.6638 18.6554 16.3358 18.1753 16.2639 17.5033L15.6878 12.0316L19.3838 7.92762C19.8158 7.42352 19.5759 6.63162 18.9039 6.48766V6.48748Z"
                          fill="#FFBF40"
                        />
                      </svg>
                    </li>
                    <li>
                      <svg
                        width="20"
                        height="19"
                        viewBox="0 0 20 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.9039 6.48748L13.5039 5.33557L10.7678 0.559477C10.4318 -0.0165703 9.59167 -0.0165703 9.25567 0.559477L6.49572 5.33557L1.09572 6.48748C0.447717 6.6314 0.183671 7.42352 0.615811 7.92743L4.31181 12.0314L3.73576 17.5031C3.6638 18.1755 4.33581 18.6554 4.95981 18.3913L9.99981 16.1593L15.0398 18.3913C15.6638 18.6554 16.3358 18.1753 16.2639 17.5033L15.6878 12.0316L19.3838 7.92762C19.8158 7.42352 19.5759 6.63162 18.9039 6.48766V6.48748Z"
                          fill="#FFBF40"
                        />
                      </svg>
                    </li>
                    <li>
                      <svg
                        width="20"
                        height="19"
                        viewBox="0 0 20 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.9039 6.48748L13.5039 5.33557L10.7678 0.559477C10.4318 -0.0165703 9.59167 -0.0165703 9.25567 0.559477L6.49572 5.33557L1.09572 6.48748C0.447717 6.6314 0.183671 7.42352 0.615811 7.92743L4.31181 12.0314L3.73576 17.5031C3.6638 18.1755 4.33581 18.6554 4.95981 18.3913L9.99981 16.1593L15.0398 18.3913C15.6638 18.6554 16.3358 18.1753 16.2639 17.5033L15.6878 12.0316L19.3838 7.92762C19.8158 7.42352 19.5759 6.63162 18.9039 6.48766V6.48748Z"
                          fill="#FFBF40"
                        />
                      </svg>
                    </li>


  `;
});

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: false,

  // Default parameters
  slidesPerView: 1.25,
  spaceBetween: 10,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Responsive breakpoints
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
      // centeredSlides: false,
    },
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  on: {
    slideChangeTransitionStart: function () {
      const activeSlide = this.slides[this.activeIndex];
      const previousSlide = this.slides[this.previousIndex];

      // console.log(previousSlide);
      // console.log(activeSlide);

      // Apply the 'slide-out' animation to the currently active slide
      if (previousSlide) {
        // Check if there's a previous slide
        previousSlide.classList.add("slide-out-animation");
      }

      // Apply the 'slide-in' animation to the new active slide
      if (activeSlide) {
        // Check if there's an active slide
        activeSlide.classList.add("slide-in-animation");
      }
    },
    slideChangeTransitionEnd: function () {
      // Clean up the animation classes once the transition is complete
      this.slides.forEach((slide) => {
        slide.classList.remove("slide-out-animation", "slide-in-animation");
      });
    },
  },
});

/**
 *
 * LOGO SLIDER
 */
const images = [
  {
    url: "/assets/logo/Huffpost.svg",
    alt: "Description of Rivo SVG",
    id: "Huffpost",
  },
  {
    url: "/assets/logo/CTV.svg",
    alt: "Description of United Postal Service SVG",
    id: "CTV",
  },
  {
    url: "/assets/logo/The-Globe-and-Mail.svg",
    alt: "Description of Purolator SVG",
    id: "The-Globe-and-Mail",
  },
  {
    url: "/assets/logo/Global-news.svg",
    alt: "Description of FedEx SVG",
    id: "Global-news",
  },
  {
    url: "/assets/logo/National-Post.svg",
    alt: "Description of Canada Post SVG",
    id: "National-Post",
  },
  {
    url: "/assets/logo/Toronto-star.svg",
    alt: "Description of Canpar SVG",
    id: "Toronto-star",
  },
  {
    url: "/assets/logo/Business-Elite-Canada.svg",
    alt: "Description of Aramax SVG",
    id: "Business-Elite-Canada",
  },
  {
    url: "/assets/logo/Canadian-Shipper.svg",
    alt: "Description of Aramax SVG",
    id: "Canadian-Shipper",
  },
  {
    url: "/assets/logo/RCC.svg",
    alt: "Description of Aramax SVG",
    id: "RCC",
  },
  {
    url: "/assets/logo/Hosting-advice.svg",
    alt: "Description of Aramax SVG",
    id: "Hosting-advice",
  },
  {
    url: "/assets/logo/Brampton-Board-of-trade.svg",
    alt: "Description of Aramax SVG",
    id: "Brampton-Board-of-trade",
  },
  {
    url: "/assets/logo/eSeller.svg",
    alt: "Description of Aramax SVG",
    id: "eSeller",
  },
  // {
  //   url: "/assets/logo/Gulf-news.svg",
  //   alt: "Description of Aramax SVG",
  //   id: "Gulf-news",
  // },
  {
    url: "/assets/logo/Toronto-region.svg",
    alt: "Description of Aramax SVG",
    id: "Toronto-region",
  },
  {
    url: "/assets/logo/Inside-logistics.svg",
    alt: "Description of Aramax SVG",
    id: "Inside-logistics",
  },
  {
    url: "/assets/logo/EDC.svg",
    alt: "Description of Aramax SVG",
    id: "EDC",
  },
  {
    url: "/assets/logo/Maritime.svg",
    alt: "Description of Aramax SVG",
    id: "Maritime",
  },
  {
    url: "/assets/logo/Aviacionline.svg",
    alt: "Description of Aramax SVG",
    id: "Aviacionline",
  },
];

sliderLogo(images, "sliderlogo");
sliderLogo(images, "sliderlogo");

sliderInput();
