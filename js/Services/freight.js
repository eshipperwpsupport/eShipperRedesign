import buildButton from "../../assets/Button/button.js";
import eShipperCard from "../../assets/Card/eShipperCard.js";
import eShipperCard2 from "../../assets/Card/eshipperCard-2.js";
import { sliderLogo } from "../helper.js";
import { sliderInput } from "../helper.js";
import { eshipperHeaderInstantQuote } from "../helper.js";
import { play_lottie } from "../helper.js";
import { loop_arrow } from "../helper.js";
import { createButton } from "../helper.js";
import Icon_text_block from "../../assets/IconTextBlock/Icon_text_block.js";

/**
 *
 * CREATE BUTTON SECTION
 */

// HERO SECTION

createButton(
  ".hero .include-btn",
  "Start Now",
  "btn button-black-bg text-white rounded-pill"
);

createButton(
  ".hero .include-btn.mobile",
  "Start Now",
  "btn button-black-bg text-white rounded-pill"
);

// SCALE AND GROW SECTION

createButton(
  ".scale_and_grow .include-btn",
  "Get a Quote",
  "btn button-white-bg-black rounded-pill"
);

// SUPPORT SECTION

createButton(
  ".support .include-btn",
  "Book a Meeting",
  "btn button-purple-txt-white-bg rounded-pill "
);

// HOW IT WORKS

createButton(
  ".how_it_works .include-btn",
  "Sign Up",
  "btn button-black-bg text-white rounded-pill"
);

/**
 *
 * LOGO SLIDER
 */
const images = [
  {
    url: "/eShipperRedesign/assets/logo/Skip.svg",
    alt: "Description of Skip SVG",
    id: "Skip",
  },
  {
    url: "/eShipperRedesign/assets/logo/UniUni.svg",
    alt: "Description of Aramax SVG",
    id: "UniUni",
  },
  {
    url: "/eShipperRedesign/assets/logo/AppleExpress.svg",
    alt: "Description of Aramax SVG",
    id: "AppleExpress",
  },
  {
    url: "/eShipperRedesign/assets/logo/Intelcom.svg",
    alt: "Description of Aramax SVG",
    id: "Intelcom",
  },
  {
    url: "/eShipperRedesign/assets/logo/Fleetoptics.svg",
    alt: "Description of Aramax SVG",
    id: "Fleetoptics",
  },
  {
    url: "/eShipperRedesign/assets/logo/eShipperSameday.svg",
    alt: "Description of Aramax SVG",
    id: "eshippersameday",
  },
  {
    url: "/eShipperRedesign/assets/logo/United-Postal-service.svg",
    alt: "Description of Aramax SVG",
    id: "USPS",
  },
  {
    url: "/eShipperRedesign/assets/logo/Purolator.svg",
    alt: "Description of Aramax SVG",
    id: "Purolator",
  },
  {
    url: "/eShipperRedesign/assets/logo/FedEx.svg",
    alt: "Description of Aramax SVG",
    id: "FedEx",
  },
  {
    url: "/eShipperRedesign/assets/logo/Canada-Post.svg",
    alt: "Description of Aramax SVG",
    id: "CanadaPost",
  },
  {
    url: "/eShipperRedesign/assets/logo/Canpar.svg",
    alt: "Description of Aramax SVG",
    id: "Canpar",
  },
  {
    url: "/eShipperRedesign/assets/logo/Aramax.svg",
    alt: "Description of Aramax SVG",
    id: "aramax",
  },
];

sliderLogo(images, "sliderlogo");
sliderLogo(images, "sliderlogo");

sliderInput();

/**
 *
 * PARALAX SCROLL EFFECT
 */

gsap.registerPlugin(ScrollTrigger);

// target only the section with the class 'layered-pin'
// const layeredPinSection = document.querySelector(".layered-pin");

gsap.registerPlugin(ScrollTrigger);
gsap.utils.toArray("#layered-pin-1").forEach((container, i) => {
  ScrollTrigger.create({
    trigger: container,
    start: "top top",
    pin: true,
    pinSpacing: false,
    // snap: 1,
  });
  gsap.from(container.children, {
    y: 50,
    opacity: 0,
    scrollTrigger: {
      trigger: container,
      start: "top center",
      end: "top top",
      toggleActions: "play none reverse reset",
    },
  });
});

/**
 *
 * PLAY ANIMATION ON HOVER ON CARD
 */
play_lottie();

/**
 *
 * LOOP ARROW ANIMATION 3 TIMES
 */
loop_arrow();

/**
 *
 * COMPONENT - ICON TEXT BLOCK
 * FOR
 * HOW IT WORKS
 */

const how_it_works = [
  {
    svg: `
        
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="14" cy="14" r="14" fill="#111827"/>
<path d="M9.40859 7.74L12.9686 6H14.7886V18.28H18.8486V20H8.54859V18.28H12.9686V7.9L10.2886 9.18L9.40859 7.74Z" fill="white"/>
</svg>


        `,
    header: `Sign up for free`,
    paragragh: `No payment information required`,
  },

  {
    svg: `
        
       <svg width="28" height="28" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="19" cy="19" r="19" fill="#111827"/>
<path d="M13.128 25.352C13.192 24.68 13.336 23.976 13.56 23.24C13.784 22.488 14.096 21.776 14.496 21.104C14.912 20.416 15.416 19.784 16.008 19.208C16.616 18.632 17.328 18.168 18.144 17.816C18.72 17.56 19.272 17.32 19.8 17.096C20.344 16.856 20.824 16.6 21.24 16.328C21.656 16.04 21.992 15.712 22.248 15.344C22.504 14.96 22.632 14.504 22.632 13.976C22.632 13.464 22.52 13.016 22.296 12.632C22.088 12.248 21.816 11.928 21.48 11.672C21.144 11.416 20.768 11.224 20.352 11.096C19.952 10.968 19.568 10.904 19.2 10.904C18.704 10.904 18.216 10.96 17.736 11.072C17.272 11.168 16.848 11.328 16.464 11.552C16.08 11.776 15.76 12.064 15.504 12.416C15.248 12.752 15.08 13.16 15 13.64L12.912 13.4C13.024 12.664 13.272 12.016 13.656 11.456C14.04 10.896 14.512 10.432 15.072 10.064C15.648 9.68 16.288 9.392 16.992 9.2C17.712 9.008 18.448 8.912 19.2 8.912C19.872 8.912 20.536 9.024 21.192 9.248C21.864 9.456 22.456 9.768 22.968 10.184C23.496 10.6 23.92 11.12 24.24 11.744C24.576 12.368 24.744 13.08 24.744 13.88C24.744 14.712 24.592 15.416 24.288 15.992C23.984 16.568 23.568 17.072 23.04 17.504C22.512 17.936 21.896 18.312 21.192 18.632C20.504 18.952 19.768 19.28 18.984 19.616C18.12 20 17.408 20.584 16.848 21.368C16.304 22.152 15.904 23 15.648 23.912H25.128V26H13.128V25.352Z" fill="white"/>
</svg>


        `,
    header: `Create your shipments`,
    paragragh: `Input location and package details`,
  },

  {
    svg: `
        
      <svg width="28" height="28" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="19" cy="19" r="19" fill="#111827"/>
<path d="M24.336 13.52C24.336 14.272 24.16 14.952 23.808 15.56C23.456 16.152 22.968 16.648 22.344 17.048C23.112 17.48 23.712 18.048 24.144 18.752C24.592 19.456 24.816 20.264 24.816 21.176C24.816 21.912 24.664 22.592 24.36 23.216C24.072 23.84 23.664 24.376 23.136 24.824C22.608 25.272 21.984 25.624 21.264 25.88C20.544 26.136 19.76 26.264 18.912 26.264C18.176 26.264 17.48 26.16 16.824 25.952C16.168 25.744 15.584 25.456 15.072 25.088C14.56 24.704 14.128 24.256 13.776 23.744C13.44 23.216 13.224 22.648 13.128 22.04L15.408 21.848C15.632 22.568 16.064 23.144 16.704 23.576C17.36 24.008 18.096 24.224 18.912 24.224C19.456 24.224 19.952 24.144 20.4 23.984C20.864 23.824 21.264 23.608 21.6 23.336C21.936 23.048 22.192 22.712 22.368 22.328C22.56 21.944 22.656 21.528 22.656 21.08C22.656 20.632 22.56 20.224 22.368 19.856C22.192 19.472 21.936 19.144 21.6 18.872C21.264 18.584 20.864 18.368 20.4 18.224C19.952 18.064 19.456 17.984 18.912 17.984H18.072V16.184H18.912C19.392 16.184 19.832 16.12 20.232 15.992C20.632 15.848 20.976 15.664 21.264 15.44C21.552 15.2 21.776 14.92 21.936 14.6C22.112 14.264 22.2 13.904 22.2 13.52C22.2 13.136 22.112 12.784 21.936 12.464C21.776 12.144 21.552 11.864 21.264 11.624C20.976 11.384 20.624 11.2 20.208 11.072C19.808 10.928 19.368 10.856 18.888 10.856C18.216 10.856 17.592 11.016 17.016 11.336C16.44 11.64 16.016 12.096 15.744 12.704L13.56 12.536C13.672 12.008 13.888 11.528 14.208 11.096C14.528 10.648 14.92 10.264 15.384 9.944C15.864 9.624 16.4 9.376 16.992 9.2C17.584 9.008 18.216 8.912 18.888 8.912C19.688 8.912 20.416 9.032 21.072 9.272C21.744 9.496 22.32 9.816 22.8 10.232C23.28 10.632 23.656 11.112 23.928 11.672C24.2 12.232 24.336 12.848 24.336 13.52Z" fill="white"/>
</svg>



        `,
    header: `Get rates`,
    paragragh: `Choose from competitive rates with multiple carrier options`,
  },

  {
    svg: `
        
       <svg width="28" height="28" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="19" cy="19" r="19" fill="#111827"/>
<path d="M21.168 22.328H12.552V20.264L18.24 9.2H20.664L15 20.264H21.168V15.92H23.376V20.264H25.416V22.328H23.376V26H21.168V22.328Z" fill="white"/>
</svg>



        `,
    header: `Print shipping labels`,
    paragragh: `Print one shipping label, multiple labels
or a batch - the choice is yours`,
  },
  {
    svg: `
        
       <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="14" cy="14" r="14" fill="#111827"/>
<path d="M13.9913 12.52C15.4847 12.52 16.658 12.8733 17.5113 13.58C18.378 14.2867 18.8113 15.2667 18.8113 16.52C18.8113 17.9733 18.378 19.12 17.5113 19.96C16.658 20.8 15.4847 21.22 13.9913 21.22C12.6313 21.22 11.518 20.9133 10.6513 20.3C9.78466 19.6733 9.26466 18.82 9.09133 17.74L10.8513 17.54C11.038 18.14 11.4113 18.6133 11.9713 18.96C12.5313 19.3067 13.2047 19.48 13.9913 19.48C14.9513 19.48 15.7047 19.22 16.2513 18.7C16.8113 18.1667 17.0913 17.44 17.0913 16.52C17.0913 15.7733 16.8113 15.1867 16.2513 14.76C15.7047 14.32 14.9513 14.1 13.9913 14.1H10.8513V14.06L9.71133 14.1L10.6313 7H18.3913V8.72H12.1313L11.6713 12.52H13.9913Z" fill="white"/>
</svg>
        `,
    header: `Ship`,
    paragragh: `Schedule free pickups with any carrier`,
  },
  {
    svg: `
        
<svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="19" cy="19" r="19" fill="#111827"/>
<path d="M18.96 14.552C19.872 14.552 20.704 14.704 21.456 15.008C22.224 15.296 22.88 15.704 23.424 16.232C23.984 16.76 24.416 17.384 24.72 18.104C25.04 18.808 25.2 19.584 25.2 20.432C25.2 21.28 25.04 22.064 24.72 22.784C24.416 23.488 23.984 24.104 23.424 24.632C22.88 25.144 22.224 25.552 21.456 25.856C20.704 26.144 19.872 26.288 18.96 26.288C18.064 26.288 17.232 26.144 16.464 25.856C15.712 25.552 15.056 25.144 14.496 24.632C13.952 24.104 13.52 23.488 13.2 22.784C12.896 22.064 12.744 21.28 12.744 20.432C12.744 19.888 12.808 19.368 12.936 18.872C13.08 18.376 13.272 17.92 13.512 17.504L13.536 17.456C13.568 17.392 13.6 17.336 13.632 17.288C13.664 17.24 13.696 17.184 13.728 17.12L18.744 9.2H21.264L17.832 14.648C18.008 14.616 18.192 14.592 18.384 14.576C18.576 14.56 18.768 14.552 18.96 14.552ZM18.96 16.664C18.4 16.664 17.88 16.76 17.4 16.952C16.92 17.144 16.496 17.408 16.128 17.744C15.776 18.08 15.496 18.48 15.288 18.944C15.096 19.408 15 19.904 15 20.432C15 20.96 15.104 21.456 15.312 21.92C15.52 22.368 15.8 22.76 16.152 23.096C16.504 23.432 16.92 23.696 17.4 23.888C17.896 24.064 18.416 24.152 18.96 24.152C19.536 24.152 20.064 24.056 20.544 23.864C21.04 23.672 21.464 23.408 21.816 23.072C22.168 22.736 22.44 22.344 22.632 21.896C22.84 21.448 22.944 20.96 22.944 20.432C22.944 19.904 22.84 19.416 22.632 18.968C22.44 18.504 22.16 18.104 21.792 17.768C21.44 17.416 21.024 17.144 20.544 16.952C20.064 16.76 19.536 16.664 18.96 16.664Z" fill="white"/>
</svg>

        `,
    header: `Track`,
    paragragh: `Track and trace your shipments with any carrier from our unified dashboard`,
  },
];

document
  .querySelectorAll(".how_it_works .card-item .Icon_Text_Block")
  .forEach((div, index) => {
    if (index < how_it_works.length) {
      // Check if the feature exists to avoid errors
      div.innerHTML = Icon_text_block(
        how_it_works[index].svg,
        how_it_works[index].header,
        how_it_works[index].paragragh
      ); // Populate div with the corresponding feature
    }
  });

/**
 *
 * TOGGLE ESHIPPER_HEADER_INSTANT QUOTE FORM
 */

document.querySelector("#canada").addEventListener("click", function (e) {
  // Call your function here
  eshipperHeaderInstantQuote(e);
});
document
  .querySelector("#worldwide")
  .addEventListener("click", eshipperHeaderInstantQuote);
