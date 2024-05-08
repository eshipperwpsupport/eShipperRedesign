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
  "Book a Meeting",
  "btn button-white-bg-black rounded-pill"
);

// SUPPORT SECTION

createButton(
  ".tailored_built_for_growth .include-btn",
  "Sign Up",
  "btn button-black-bg text-white rounded-pill"
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
// CTA SECTION

createButton(
  ".CTA .include-btn",
  "Book a Meeting",
  "btn button-teal-txt-white-bg rounded-pill "
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
    paragragh: `No payment information required.`,
  },

  {
    svg: `
        
       <svg width="28" height="28" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="19" cy="19" r="19" fill="#111827"/>
<path d="M13.128 25.352C13.192 24.68 13.336 23.976 13.56 23.24C13.784 22.488 14.096 21.776 14.496 21.104C14.912 20.416 15.416 19.784 16.008 19.208C16.616 18.632 17.328 18.168 18.144 17.816C18.72 17.56 19.272 17.32 19.8 17.096C20.344 16.856 20.824 16.6 21.24 16.328C21.656 16.04 21.992 15.712 22.248 15.344C22.504 14.96 22.632 14.504 22.632 13.976C22.632 13.464 22.52 13.016 22.296 12.632C22.088 12.248 21.816 11.928 21.48 11.672C21.144 11.416 20.768 11.224 20.352 11.096C19.952 10.968 19.568 10.904 19.2 10.904C18.704 10.904 18.216 10.96 17.736 11.072C17.272 11.168 16.848 11.328 16.464 11.552C16.08 11.776 15.76 12.064 15.504 12.416C15.248 12.752 15.08 13.16 15 13.64L12.912 13.4C13.024 12.664 13.272 12.016 13.656 11.456C14.04 10.896 14.512 10.432 15.072 10.064C15.648 9.68 16.288 9.392 16.992 9.2C17.712 9.008 18.448 8.912 19.2 8.912C19.872 8.912 20.536 9.024 21.192 9.248C21.864 9.456 22.456 9.768 22.968 10.184C23.496 10.6 23.92 11.12 24.24 11.744C24.576 12.368 24.744 13.08 24.744 13.88C24.744 14.712 24.592 15.416 24.288 15.992C23.984 16.568 23.568 17.072 23.04 17.504C22.512 17.936 21.896 18.312 21.192 18.632C20.504 18.952 19.768 19.28 18.984 19.616C18.12 20 17.408 20.584 16.848 21.368C16.304 22.152 15.904 23 15.648 23.912H25.128V26H13.128V25.352Z" fill="white"/>
</svg>


        `,
    header: `Create your shipments`,
    paragragh: `Input location and package details.`,
  },

  {
    svg: `
        
      <svg width="28" height="28" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="19" cy="19" r="19" fill="#111827"/>
<path d="M24.336 13.52C24.336 14.272 24.16 14.952 23.808 15.56C23.456 16.152 22.968 16.648 22.344 17.048C23.112 17.48 23.712 18.048 24.144 18.752C24.592 19.456 24.816 20.264 24.816 21.176C24.816 21.912 24.664 22.592 24.36 23.216C24.072 23.84 23.664 24.376 23.136 24.824C22.608 25.272 21.984 25.624 21.264 25.88C20.544 26.136 19.76 26.264 18.912 26.264C18.176 26.264 17.48 26.16 16.824 25.952C16.168 25.744 15.584 25.456 15.072 25.088C14.56 24.704 14.128 24.256 13.776 23.744C13.44 23.216 13.224 22.648 13.128 22.04L15.408 21.848C15.632 22.568 16.064 23.144 16.704 23.576C17.36 24.008 18.096 24.224 18.912 24.224C19.456 24.224 19.952 24.144 20.4 23.984C20.864 23.824 21.264 23.608 21.6 23.336C21.936 23.048 22.192 22.712 22.368 22.328C22.56 21.944 22.656 21.528 22.656 21.08C22.656 20.632 22.56 20.224 22.368 19.856C22.192 19.472 21.936 19.144 21.6 18.872C21.264 18.584 20.864 18.368 20.4 18.224C19.952 18.064 19.456 17.984 18.912 17.984H18.072V16.184H18.912C19.392 16.184 19.832 16.12 20.232 15.992C20.632 15.848 20.976 15.664 21.264 15.44C21.552 15.2 21.776 14.92 21.936 14.6C22.112 14.264 22.2 13.904 22.2 13.52C22.2 13.136 22.112 12.784 21.936 12.464C21.776 12.144 21.552 11.864 21.264 11.624C20.976 11.384 20.624 11.2 20.208 11.072C19.808 10.928 19.368 10.856 18.888 10.856C18.216 10.856 17.592 11.016 17.016 11.336C16.44 11.64 16.016 12.096 15.744 12.704L13.56 12.536C13.672 12.008 13.888 11.528 14.208 11.096C14.528 10.648 14.92 10.264 15.384 9.944C15.864 9.624 16.4 9.376 16.992 9.2C17.584 9.008 18.216 8.912 18.888 8.912C19.688 8.912 20.416 9.032 21.072 9.272C21.744 9.496 22.32 9.816 22.8 10.232C23.28 10.632 23.656 11.112 23.928 11.672C24.2 12.232 24.336 12.848 24.336 13.52Z" fill="white"/>
</svg>



        `,
    header: `Get rates`,
    paragragh: `Choose from competitive rates with multiple carrier options.`,
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
or a batch - the choice is yours.`,
  },
  {
    svg: `
        
       <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="14" cy="14" r="14" fill="#111827"/>
<path d="M13.9913 12.52C15.4847 12.52 16.658 12.8733 17.5113 13.58C18.378 14.2867 18.8113 15.2667 18.8113 16.52C18.8113 17.9733 18.378 19.12 17.5113 19.96C16.658 20.8 15.4847 21.22 13.9913 21.22C12.6313 21.22 11.518 20.9133 10.6513 20.3C9.78466 19.6733 9.26466 18.82 9.09133 17.74L10.8513 17.54C11.038 18.14 11.4113 18.6133 11.9713 18.96C12.5313 19.3067 13.2047 19.48 13.9913 19.48C14.9513 19.48 15.7047 19.22 16.2513 18.7C16.8113 18.1667 17.0913 17.44 17.0913 16.52C17.0913 15.7733 16.8113 15.1867 16.2513 14.76C15.7047 14.32 14.9513 14.1 13.9913 14.1H10.8513V14.06L9.71133 14.1L10.6313 7H18.3913V8.72H12.1313L11.6713 12.52H13.9913Z" fill="white"/>
</svg>
        `,
    header: `Ship`,
    paragragh: `Schedule free pickups with any carrier.`,
  },
  {
    svg: `
        
<svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="19" cy="19" r="19" fill="#111827"/>
<path d="M18.96 14.552C19.872 14.552 20.704 14.704 21.456 15.008C22.224 15.296 22.88 15.704 23.424 16.232C23.984 16.76 24.416 17.384 24.72 18.104C25.04 18.808 25.2 19.584 25.2 20.432C25.2 21.28 25.04 22.064 24.72 22.784C24.416 23.488 23.984 24.104 23.424 24.632C22.88 25.144 22.224 25.552 21.456 25.856C20.704 26.144 19.872 26.288 18.96 26.288C18.064 26.288 17.232 26.144 16.464 25.856C15.712 25.552 15.056 25.144 14.496 24.632C13.952 24.104 13.52 23.488 13.2 22.784C12.896 22.064 12.744 21.28 12.744 20.432C12.744 19.888 12.808 19.368 12.936 18.872C13.08 18.376 13.272 17.92 13.512 17.504L13.536 17.456C13.568 17.392 13.6 17.336 13.632 17.288C13.664 17.24 13.696 17.184 13.728 17.12L18.744 9.2H21.264L17.832 14.648C18.008 14.616 18.192 14.592 18.384 14.576C18.576 14.56 18.768 14.552 18.96 14.552ZM18.96 16.664C18.4 16.664 17.88 16.76 17.4 16.952C16.92 17.144 16.496 17.408 16.128 17.744C15.776 18.08 15.496 18.48 15.288 18.944C15.096 19.408 15 19.904 15 20.432C15 20.96 15.104 21.456 15.312 21.92C15.52 22.368 15.8 22.76 16.152 23.096C16.504 23.432 16.92 23.696 17.4 23.888C17.896 24.064 18.416 24.152 18.96 24.152C19.536 24.152 20.064 24.056 20.544 23.864C21.04 23.672 21.464 23.408 21.816 23.072C22.168 22.736 22.44 22.344 22.632 21.896C22.84 21.448 22.944 20.96 22.944 20.432C22.944 19.904 22.84 19.416 22.632 18.968C22.44 18.504 22.16 18.104 21.792 17.768C21.44 17.416 21.024 17.144 20.544 16.952C20.064 16.76 19.536 16.664 18.96 16.664Z" fill="white"/>
</svg>

        `,
    header: `Track`,
    paragragh: `Track and trace your shipments with any carrier from our unified dashboard.`,
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
 * COMPONENT - ICON TEXT BLOCK
 * FOR
 * TAILORED SOLUTIONS BUILT FOR GROWTH
 */

const tailored_built_for_growth = [
  {
    svg: `
        
       
<svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="19" cy="19" r="19" fill="white"/>
<path d="M14.2894 10.2946C14.1865 10.0947 14.1828 9.85837 14.2795 9.65543C14.3762 9.45249 14.5622 9.30631 14.7822 9.26048C15.5083 9.11311 16.7095 9.10002 18.4299 9.76L18.3528 8.80966V8.80949C18.3382 8.66346 18.3841 8.51777 18.4797 8.40649C18.5752 8.29504 18.7124 8.22773 18.8589 8.22001C20.2705 8.15573 21.6779 8.41622 22.973 8.9812C23.1405 9.05573 23.2733 9.19168 23.3441 9.36104C23.4147 9.53023 23.4183 9.72023 23.3535 9.89192L21.6594 14.3998H21.6596C20.7854 14.5888 19.894 14.6853 18.9997 14.688C18.1269 14.689 17.2563 14.6005 16.4014 14.4239L14.2894 10.2946ZM10.7541 27.6372C10.9602 27.0165 11.2853 26.4418 11.7111 25.9453C11.8467 25.7895 11.9141 25.5859 11.8981 25.38C11.6275 21.0264 13.878 17.4269 15.5786 15.3614C16.6957 15.6531 17.8452 15.801 18.9997 15.8013C20.1541 15.801 21.3037 15.6531 22.4207 15.3614C24.1213 17.4273 26.3807 21.0264 26.1013 25.38C26.0858 25.5841 26.1523 25.786 26.2861 25.941C26.7119 26.4375 27.0369 27.0122 27.2431 27.6329C27.2938 27.7802 27.299 27.9395 27.2577 28.0898C27.2166 28.2401 27.1308 28.3746 27.012 28.4755C25.692 29.6041 24.3148 29.8814 23.1839 29.3951H23.1841C23.0439 29.3397 22.8898 29.3305 22.744 29.3686C21.5205 29.6757 20.2607 29.814 18.9996 29.78C17.7406 29.8181 16.4824 29.6839 15.2597 29.3818C15.1138 29.3436 14.9597 29.3528 14.8196 29.4082C13.6888 29.8944 12.3182 29.6171 10.9915 28.4886H10.9917C10.87 28.3878 10.7819 28.2524 10.7394 28.1002C10.6969 27.9479 10.7021 27.7865 10.754 27.6373L10.7541 27.6372ZM16.67 21.3539C16.67 22.3813 17.4423 22.9093 18.5753 23.2898C19.3585 23.5539 19.6973 23.809 19.6973 24.2116C19.6973 24.6143 19.2837 24.8716 18.6808 24.8716C18.2914 24.8693 17.905 24.8031 17.537 24.6759C17.4717 24.6539 17.4034 24.6427 17.3345 24.6428C17.062 24.6391 16.8215 24.8201 16.7493 25.0827L16.736 25.1333L16.7362 25.1334C16.6564 25.4468 16.8335 25.7681 17.1409 25.8683C17.5511 25.9969 17.9764 26.0709 18.4059 26.0882V26.5744C18.3965 26.7177 18.447 26.8584 18.545 26.9631C18.6432 27.0679 18.7804 27.1275 18.924 27.1275C19.0675 27.1275 19.2047 27.0679 19.3029 26.9631C19.4011 26.8584 19.4514 26.7177 19.4422 26.5744V26.0222C20.6587 25.8021 21.3254 25.0057 21.3254 24.0643C21.3254 23.1226 20.8172 22.5243 19.5654 22.0843C18.6656 21.7455 18.2959 21.5234 18.2959 21.1736C18.2959 20.8767 18.516 20.5818 19.2067 20.5818V20.5816C19.5239 20.5805 19.8396 20.6256 20.1439 20.7159C20.1988 20.732 20.2559 20.7403 20.3133 20.7401C20.6192 20.7367 20.8761 20.5086 20.9155 20.2052C20.9548 19.9017 20.7646 19.6155 20.4695 19.5345C20.1535 19.4536 19.8297 19.4071 19.5037 19.3958V18.9823C19.5037 18.6956 19.2713 18.4631 18.9844 18.4631C18.6977 18.4631 18.4653 18.6956 18.4653 18.9823V19.4685C17.3279 19.6907 16.67 20.421 16.67 21.3539L16.67 21.3539Z" fill="#111827"/>
</svg>


        `,
    header: `Keep Savings at the Forefront`,
    paragragh: `Leverage our specialized programs with Canada Post and USPS to get access to the most cost-effective solution.`,
  },

  {
    svg: `
        
<svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="19" cy="19" r="19" fill="white"/>
<g clip-path="url(#clip0_43_2626)">
<path d="M13.6 18.4C12.6455 18.401 11.7304 18.7807 11.0555 19.4556C10.3807 20.1304 10.001 21.0455 10 22C10.0221 23.1801 10.3337 24.3366 10.9076 25.3679C11.4815 26.3993 12.3001 27.2738 13.2912 27.9145C13.3845 27.9704 13.4911 28 13.6 28C13.7088 28 13.8155 27.9704 13.9088 27.9145C14.8999 27.2738 15.7184 26.3993 16.2923 25.3679C16.8663 24.3366 17.1778 23.1801 17.2 22C17.1989 21.0455 16.8193 20.1305 16.1444 19.4556C15.4696 18.7807 14.5545 18.401 13.6 18.4H13.6ZM13.6 23.2C13.2817 23.2 12.9766 23.0736 12.7514 22.8486C12.5264 22.6235 12.4 22.3183 12.4 22C12.4 21.6817 12.5264 21.3766 12.7514 21.1514C12.9766 20.9264 13.2817 20.8 13.6 20.8C13.9183 20.8 14.2234 20.9264 14.4486 21.1514C14.6736 21.3766 14.8 21.6817 14.8 22C14.7997 22.3182 14.6731 22.6232 14.4481 22.8482C14.2231 23.0732 13.9181 23.1997 13.6 23.2Z" fill="#111827"/>
<path d="M24.3998 10C23.4453 10.001 22.5302 10.3807 21.8554 11.0555C21.1805 11.7304 20.8008 12.6455 20.7998 13.6C20.8219 14.7801 21.1335 15.9366 21.7074 16.9678C22.2814 17.9992 23.0999 18.8737 24.091 19.5145C24.1843 19.5704 24.2909 19.6 24.3998 19.6C24.5086 19.6 24.6153 19.5704 24.7086 19.5145C25.6997 18.8737 26.5182 17.9992 27.0921 16.9678C27.6661 15.9366 27.9776 14.7801 27.9998 13.6C27.9987 12.6455 27.6191 11.7304 26.9442 11.0555C26.2694 10.3807 25.3543 10.001 24.3998 10H24.3998ZM24.3998 14.8C24.0815 14.8 23.7764 14.6736 23.5512 14.4486C23.3262 14.2234 23.1998 13.9183 23.1998 13.6C23.1998 13.2817 23.3262 12.9766 23.5512 12.7514C23.7764 12.5264 24.0815 12.4 24.3998 12.4C24.7181 12.4 25.0232 12.5264 25.2484 12.7514C25.4734 12.9766 25.5998 13.2817 25.5998 13.6C25.5995 13.9182 25.473 14.2231 25.248 14.4481C25.023 14.6731 24.718 14.7997 24.3998 14.8Z" fill="#111827"/>
<path d="M26.7996 25C26.7993 25.7956 26.4832 26.5585 25.9206 27.121C25.3581 27.6836 24.5952 27.9998 23.7996 28H15.7236C16.1148 27.6309 16.4739 27.2295 16.7977 26.8H23.7997C24.4427 26.8 25.037 26.457 25.3585 25.9C25.6801 25.3431 25.6801 24.657 25.3585 24.1C25.037 23.5431 24.4427 23.2 23.7997 23.2H20.7997C19.9423 23.2 19.15 22.7426 18.7212 22C18.2924 21.2575 18.2924 20.3426 18.7212 19.6C19.15 18.8575 19.9423 18.4 20.7997 18.4H21.2016C21.5254 18.8295 21.8845 19.2309 22.2757 19.6H20.7997C20.3709 19.6 19.9749 19.8287 19.7605 20.2C19.5461 20.5714 19.5461 21.0287 19.7605 21.4C19.9748 21.7714 20.3709 22 20.7997 22H23.7997C24.5953 22.0003 25.3582 22.3164 25.9207 22.8791C26.4833 23.4416 26.7994 24.2045 26.7997 25H26.7996Z" fill="#111827"/>
</g>
<defs>
<clipPath id="clip0_43_2626">
<rect width="18" height="18" fill="white" transform="translate(10 10)"/>
</clipPath>
</defs>
</svg>




        `,
    header: `Get Peace of Mind With Shipment Tracking`,
    paragragh: `Access advanced tracking technology and give your customers full visibility of their shipments.`,
  },

  {
    svg: `
        
<svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="19" cy="19" r="19" fill="white"/>
<g clip-path="url(#clip0_43_1216)">
<path d="M20.1222 12.6687C19.7611 13.4952 19.8408 14.4481 20.3343 15.203C20.8277 15.9577 21.6682 16.4128 22.5698 16.413C22.9737 16.412 23.372 16.3199 23.7354 16.1435L26.8553 14.6313C26.2705 13.5728 25.4776 12.6438 24.5245 11.9C23.5713 11.1563 22.4775 10.6133 21.3091 10.3036L20.1222 12.6687Z" fill="#111827"/>
<path d="M15.3811 25.6433L15.3097 25.5436C14.6506 24.6187 13.9699 23.6621 13.9699 22.4465C13.9702 21.5819 14.227 20.7367 14.7079 20.0183C15.0342 19.5278 15.2133 18.954 15.2236 18.3648C15.2342 17.7758 15.0756 17.196 14.7671 16.6941L12.7277 13.3795C12.6121 13.2129 12.5014 13.0579 12.3928 12.9125V12.9126C12.1476 13.1782 11.9175 13.4574 11.7036 13.7487C10.5931 15.2759 9.99656 17.1167 10 19.0051C10.0033 21.1017 10.7369 23.1318 12.0747 24.7455C13.4123 26.3595 15.2703 27.4566 17.3291 27.8481C16.6085 27.1794 15.9559 26.4407 15.3813 25.6431L15.3811 25.6433Z" fill="#111827"/>
<path d="M25.5846 21.9641C25.4784 21.8739 25.3563 21.8044 25.2246 21.7588C24.9507 21.6555 24.6484 21.656 24.3747 21.7599C24.1009 21.8639 23.8746 22.0643 23.7381 22.3236C23.6017 22.5827 23.5645 22.8828 23.6335 23.1675L24.3825 26.2286C24.8645 25.8676 25.3097 25.4598 25.7113 25.0109C25.8598 24.8495 25.9935 24.6804 26.1247 24.5079C26.4178 24.1263 26.68 23.722 26.9091 23.2988L25.5846 21.9641Z" fill="#111827"/>
<path d="M22.3823 23.4648C22.2413 22.8769 22.3189 22.2579 22.6004 21.723C22.8822 21.1881 23.3487 20.774 23.9129 20.5581C24.4773 20.342 25.1009 20.3388 25.6675 20.5489C25.9664 20.6567 26.241 20.8222 26.4762 21.0359L27.4708 22.0381C27.7273 21.326 27.8915 20.5838 27.9594 19.8299C27.987 19.5558 28.0008 19.2807 28.0005 19.0052C28.001 18.7378 27.9875 18.4705 27.96 18.2043C27.8885 17.3794 27.7022 16.5683 27.4065 15.7949L24.2942 17.3014H24.2943C23.756 17.5619 23.166 17.6981 22.5681 17.6995C21.2252 17.6993 19.9741 17.0176 19.2452 15.8892C18.5163 14.7607 18.4092 13.3393 18.9608 12.1144L19.9895 10.0593C19.661 10.0217 19.3306 10.002 19.0001 10.0001C17.1508 9.99269 15.3455 10.5641 13.8368 11.6345C13.7759 11.6708 13.7186 11.7127 13.6657 11.76C13.5519 11.8435 13.4427 11.9355 13.332 12.0251C13.4838 12.227 13.6394 12.4406 13.8026 12.676L15.8598 16.0207H15.86C16.2977 16.7322 16.5226 17.5543 16.508 18.3898C16.4935 19.2252 16.24 20.039 15.7777 20.7348C15.4376 21.242 15.2557 21.839 15.255 22.4497C15.255 23.2543 15.7655 23.9702 16.3562 24.8L16.4277 24.901C17.2934 26.0845 18.3339 27.1294 19.5136 28C19.6647 27.9917 19.8106 27.9807 19.9528 27.9647H19.9526C20.2745 27.9323 20.5944 27.8816 20.9105 27.813C21.586 27.6676 22.2423 27.4442 22.8662 27.1472C22.9948 27.0873 23.1131 27.014 23.2365 26.9477L22.3823 23.4648Z" fill="#111827"/>
</g>
<defs>
<clipPath id="clip0_43_1216">
<rect width="18" height="18" fill="white" transform="translate(10 10)"/>
</clipPath>
</defs>
</svg>


        `,
    header: `Nationwide Coverage`,
    paragragh: `Expand your reach with 100% coverage across Canada through Canada Post, including PO Boxes and rural areas..
    `,
  },

  //   {
  //     svg: `

  // <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
  // <circle cx="19" cy="19" r="19" fill="white"/>
  // <path d="M23.512 19.7151C21.0402 19.7151 19.0241 21.8006 19.0241 24.3575C19.0241 26.9145 21.0402 29 23.512 29C25.9839 29 28 26.9145 28 24.3575C28 21.8006 25.9839 19.7151 23.512 19.7151ZM25.5281 23.7718L23.7605 25.8787C23.6363 26.0287 23.4568 26.1145 23.2634 26.1216H23.2427C23.0562 26.1216 22.8836 26.0502 22.7525 25.9145L21.6684 24.7931C21.399 24.5145 21.399 24.0646 21.6684 23.779C21.9378 23.5003 22.3727 23.5003 22.6419 23.779L23.2012 24.3647L24.4856 22.8363C24.7342 22.5364 25.1691 22.5078 25.4591 22.7648C25.7421 23.022 25.7766 23.4719 25.5282 23.7718L25.5281 23.7718ZM23.1392 10.9372C22.4073 10.8087 21.6753 10.6373 20.9643 10.423C19.8528 10.0801 18.7618 9.63007 17.7262 9.0803C17.5259 8.97323 17.2911 8.97323 17.0979 9.0803C16.0622 9.63025 14.9712 10.0801 13.8526 10.423C13.1483 10.6373 12.4164 10.8087 11.6847 10.9372C10.7112 11.1086 10 11.9799 10 13.0084V19.7149C10 21.422 10.7388 23.0074 12.023 24.0716L16.5593 27.8213C16.8079 28.0285 17.1048 28.1284 17.4085 28.1284C17.7123 28.1284 18.0161 28.0285 18.2578 27.8213L18.5477 27.5856C17.9815 26.6499 17.6432 25.5428 17.6432 24.3573C17.6432 21.0076 20.2737 18.2863 23.5121 18.2863C23.9608 18.2863 24.3959 18.3435 24.8169 18.4434V13.0082C24.8169 11.9798 24.1127 11.1084 23.1392 10.937L23.1392 10.9372ZM16.7939 16.8581H17.4844C18.4371 16.8581 19.2105 17.6581 19.2105 18.6437C19.2105 19.5079 18.6166 20.2293 17.8296 20.3935V21.1435C17.8296 21.5363 17.5189 21.8577 17.1391 21.8577C16.7594 21.8577 16.4487 21.5363 16.4487 21.1435V20.4292H15.7582C15.3784 20.4292 15.0678 20.1079 15.0678 19.715C15.0678 19.3222 15.3784 19.0008 15.7582 19.0008H17.4844C17.6708 19.0008 17.8296 18.8437 17.8296 18.6437C17.8296 18.4437 17.6708 18.2866 17.4844 18.2866H16.7939C15.8412 18.2866 15.0678 17.4866 15.0678 16.501C15.0678 15.6368 15.6616 14.9154 16.4487 14.7512V14.0012C16.4487 13.6084 16.7594 13.287 17.1391 13.287C17.5189 13.287 17.8296 13.6084 17.8296 14.0012V14.7154H18.52C18.8998 14.7154 19.2105 15.0368 19.2105 15.4297C19.2105 15.8225 18.8998 16.1439 18.52 16.1439H16.7939C16.6006 16.1439 16.4487 16.301 16.4487 16.501C16.4487 16.701 16.6006 16.8581 16.7939 16.8581Z" fill="#111827"/>
  // </svg>

  //         `,
  //     header: `Get Free Insurance`,
  //     paragragh: `Get free insurance up to $100 in value, then pay $1* for every additional $100 in value <br> *Average price. Varies by carrier.`,
  //   },
];

document
  .querySelectorAll(
    ".tailored_built_for_growth .card-item .Icon_Text_Block-container"
  )
  .forEach((div, index) => {
    if (index < tailored_built_for_growth.length) {
      // Check if the feature exists to avoid errors
      div.innerHTML = Icon_text_block(
        tailored_built_for_growth[index].svg,
        tailored_built_for_growth[index].header,
        tailored_built_for_growth[index].paragragh
      ); // Populate div with the corresponding feature
    }
  });

/**
 *
 * TOGGLE ESHIPPER_HEADER_INSTANT QUOTE FORM
 */

// document.querySelector("#canada").addEventListener("click", function (e) {
//   // Call your function here
//   eshipperHeaderInstantQuote(e);
// });
// document
//   .querySelector("#worldwide")
//   .addEventListener("click", eshipperHeaderInstantQuote);

/**
 *
 * SCROLL JS
 * SOLUTION SECTION
 */

const swiper = new Swiper(".solution-mobile .swiper", {
  grabCursor: true,
  spaceBetween: 24,
  slidesPerView: 1,

  keyboard: {
    enabled: true,
  },

  mousewheel: {
    releaseOnEdges: true,
  },
  freeMode: true,

  loop: false,
  pagination: {
    el: ".solution-mobile .swiper-pagination",
    clickable: true,
  },
});

const desktop_swiper = new Swiper(".solution-desktop .swiper", {
  grabCursor: true,
  spaceBetween: 24,
  slidesPerView: 3,

  keyboard: {
    enabled: true,
  },

  mousewheel: {
    releaseOnEdges: true,
  },
  freeMode: true,

  loop: false,
  pagination: {
    el: ".solution-desktop .swiper-pagination",
    clickable: true,
  },

  on: {
    init: function () {
      updatePaginationVisibility(this); // Call the function when slide changes
    },
    slideChange: function () {
      updatePaginationVisibility(this); // Call the function when slide changes
    },
  },
});

function updatePaginationVisibility(swiper) {
  // Select all bullets
  const allBullets = document.querySelectorAll(
    ".solution-desktop .swiper-pagination-bullet"
  );

  const totalBullets = allBullets.length;
  // Remove 'visible' class from all bullets initially
  allBullets.forEach((bullet) => bullet.classList.remove("visible"));

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
  }
}
