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

// CTA SECTION
createButton(
  ".CTA .include-btn",
  "Book a Meeting",
  "btn button-teal-txt-white-bg rounded-pill "
);

// BENEFIT SECTION

createButton(
  ".benefit .benefit-btn",
  "Start Now",
  "btn button-black-bg text-white rounded-pill "
);
// SUSTAINABLE SECTION

createButton(
  ".sustainable_delivery .include-btn",
  "Learn More",
  "btn h-100 p-0 m-0 button-learn-more-purple-text"
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
 * BUTTON FOR MORE SERVICES SECTION
 */

document.querySelectorAll(".swiper-btn").forEach((btn) => {
  btn.innerHTML = buildButton({
    text: "More Services",
    className: "button-black-bg text-white rounded-pill",
  });
});
/**
 *
 * CARDS FOR BENEFIT CARDS SECTION
 */

let card = {
  svg: `
<svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="21" cy="21" r="21" fill="#F3F4F6"/>
<path d="M18.2959 22.144C18.2959 23.574 19.4658 24.744 20.8958 24.744C22.3258 24.744 23.4958 23.574 23.4958 22.144C23.4958 20.714 22.3258 19.5441 20.8958 19.5441C19.4658 19.5441 18.2959 20.714 18.2959 22.144Z" fill="#111827"/>
<path d="M15.0983 30.5676C15.0983 31.4723 14.3649 32.2057 13.4602 32.2057C12.5556 32.2057 11.8223 31.4724 11.8223 30.5676C11.8223 29.6631 12.5556 28.9297 13.4602 28.9297C14.3649 28.9297 15.0983 29.663 15.0983 30.5676Z" fill="#111827"/>
<path d="M11.9264 17.8541C11.9264 18.7588 11.1931 19.4922 10.2883 19.4922C9.38377 19.4922 8.65039 18.7589 8.65039 17.8541C8.65039 16.9496 9.38372 16.2162 10.2883 16.2162C11.193 16.2162 11.9264 16.9495 11.9264 17.8541Z" fill="#111827"/>
<path d="M30.4117 30.5676C30.4117 31.4723 29.6784 32.2057 28.7738 32.2057C27.8691 32.2057 27.1357 31.4724 27.1357 30.5676C27.1357 29.6631 27.8691 28.9297 28.7738 28.9297C29.6784 28.9297 30.4117 29.663 30.4117 30.5676Z" fill="#111827"/>
<path d="M33.3502 19.4917C33.3502 20.3963 32.6169 21.1296 31.7123 21.1296C30.8076 21.1296 30.0742 20.3963 30.0742 19.4917C30.0742 18.587 30.8076 17.8536 31.7123 17.8536C32.6168 17.8536 33.3502 18.587 33.3502 19.4917Z" fill="#111827"/>
<path d="M17.4904 21.4418C17.5684 20.9998 17.7505 20.6098 17.9843 20.2458L12.7843 18.1398C12.7324 18.5817 12.5503 18.9977 12.3164 19.3357L17.4904 21.4418Z" fill="#111827"/>
<path d="M21.4678 18.7382L21.5198 13.8501C21.3117 13.9021 21.1038 13.928 20.8958 13.928C20.6617 13.928 20.4538 13.8761 20.2457 13.8241L20.2197 18.7122C20.4278 18.6602 20.6617 18.6342 20.8957 18.6342C21.0778 18.6862 21.2859 18.7122 21.4678 18.7382Z" fill="#111827"/>
<path d="M24.0166 20.6881C24.1987 21.0781 24.3026 21.4941 24.3286 21.936L29.5027 20.6881C29.3206 20.3241 29.1907 19.9341 29.1907 19.4922V19.4402L24.0166 20.6881Z" fill="#111827"/>
<path d="M29.3725 18.5558C29.5284 18.1399 29.8144 17.8018 30.1524 17.5418L23.2106 12.3677C23.0547 12.7836 22.7687 13.1217 22.4307 13.3817L29.3725 18.5558Z" fill="#111827"/>
<path d="M23.7047 24.1718C23.4446 24.5098 23.1326 24.8218 22.7686 25.0557L26.6686 29.1896C26.9027 28.8256 27.2407 28.5395 27.6307 28.3316L23.7047 24.1718Z" fill="#111827"/>
<path d="M18.1148 24.224L14.5527 28.3059C14.9427 28.488 15.2807 28.7739 15.5408 29.1379L19.0768 25.1079C18.7128 24.8741 18.3748 24.5881 18.1148 24.2241V24.224Z" fill="#111827"/>
<path d="M15.9043 29.9181C15.9563 30.1262 16.0082 30.3341 16.0082 30.5681C16.0082 30.8022 15.9823 31.0101 15.9043 31.2182H26.3561C26.3041 31.0101 26.2522 30.8022 26.2522 30.5681C26.2522 30.3341 26.2781 30.1262 26.3561 29.9181H15.9043Z" fill="#111827"/>
<path d="M28.7744 28.0459C29.2164 28.0459 29.6324 28.1758 30.0223 28.3839L31.7124 22.0139C31.2704 22.0139 30.8544 21.884 30.4645 21.6759L28.7744 28.0459Z" fill="#111827"/>
<path d="M19.1285 13.2523C18.8165 12.9662 18.5824 12.5763 18.4785 12.1603L12.0303 16.0603C12.3423 16.3464 12.5764 16.7363 12.6803 17.1523L19.1285 13.2523Z" fill="#111827"/>
<path d="M13.4603 28.0458H13.4863L11.4842 20.0376C11.1202 20.2457 10.7043 20.3496 10.2623 20.3496H10.2363L12.2384 28.3578C12.6284 28.1757 13.0444 28.0458 13.4603 28.0458Z" fill="#111827"/>
<path d="M22.5084 11.432C22.5084 12.3366 21.7751 13.0699 20.8705 13.0699C19.9658 13.0699 19.2324 12.3366 19.2324 11.432C19.2324 10.5273 19.9658 9.79395 20.8705 9.79395C21.775 9.79395 22.5084 10.5273 22.5084 11.432Z" fill="#111827"/>
</svg>


    `,
  title: `
        Vast Network Coverage
    `,
  mobileDesc: `
    Access Canada’s Most Expansive Carrier Network, servicing 99.5% of the country, including P.O. boxes and rural locations.
    
      `,
  DesktopDesc: `

    Access Canada’s Most Expansive Carrier Network, servicing 99.5% of the country, including P.O. boxes and rural locations.

    `,
  mobileImg: `

    <img
        src="/eShipperRedesign/assets/svgFolder/Skip/card-1.svg"
        alt=""
        class="d-block d-xl-none"
        />
    `,

  lottiePlayer: `

  <img
        src="/eShipperRedesign/assets/svgFolder/Skip/card-1.svg"
        alt=""
        class="d-none d-xl-block"
        />
`,
  buttonText: "Learn More",
  buttonClass: "d-none",
};

document.querySelector(".benefit .card-item-1").innerHTML = eShipperCard(card);

card = {
  svg: `
<svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="21" cy="21" r="21" fill="#F3F4F6"/>
<g clip-path="url(#clip0_124_5847)">
<path d="M27.6539 15.6434L24.3109 16.8136L18.6169 12.0008C17.8609 11.2399 16.8135 10.9772 15.9414 11.2825L13.9894 11.9658L19.0221 18.6185L17.9215 19.0038C17.6516 19.0983 17.3889 19.2135 17.1335 19.3495L14.7924 20.5187L12.4646 19.329L10.8866 19.8814L13.3726 26.9831L14.9715 26.4234L16.0491 24.0416L18.5875 23.5027C18.872 23.4497 19.1492 23.3759 19.4192 23.2814L20.5197 22.8962L20.7214 31.2632L22.6733 30.58C23.5869 30.2601 24.2005 29.416 24.3167 28.3497L25.7729 21.0571L29.1161 19.8868C30.4658 19.4144 32.2494 17.7178 31.8423 16.555C31.4353 15.3922 29.0038 15.1712 27.654 15.6437L27.6539 15.6434Z" fill="#111827"/>
</g>
<defs>
<clipPath id="clip0_124_5847">
<rect width="22" height="22" fill="white" transform="translate(7.9834 13.2522) rotate(-19.2931)"/>
</clipPath>
</defs>
</svg>




    `,
  title: `
        Experience Speed and Affordability
    `,
  mobileDesc: `
    With 2-3 day shipping across Canada, and 3-5 day shipping to the U.S., reduce transit times by an average of 60% without paying extra for air services.
    
      `,
  DesktopDesc: `

    With 2-3 day shipping across Canada, and 3-5 day shipping to the U.S., reduce transit times by an average of 60% without paying extra for air services.

    `,
  mobileImg: `

    <img
        src="/eShipperRedesign/assets/svgFolder/Skip/card-2.svg"

        alt=""
        class="d-block d-xl-none"
        />
    `,

  lottiePlayer: `

   <img
        src="/eShipperRedesign/assets/svgFolder/Skip/card-2.svg"
        alt=""
        class="d-none d-xl-block"
        />

`,
  buttonText: "Learn More",
  buttonClass: "d-none",
};

document.querySelector(".benefit .card-item-2").innerHTML = eShipperCard(card);

card = {
  svg: `


<svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="21" cy="21" r="21" fill="#F3F4F6"/>
<g clip-path="url(#clip0_124_6036)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.8564 19.0856C15.8564 17.822 16.9133 16.8568 18.1423 16.8568H23.8564C25.0854 16.8568 26.1423 17.822 26.1423 19.0856V23.1998C26.1423 24.4634 25.0854 25.4286 23.8564 25.4286H18.1423C16.9133 25.4286 15.8564 24.4634 15.8564 23.1998V19.0856ZM22.7138 18.5712H19.2851V20.2855H22.7138V18.5712Z" fill="#111827"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.2867 33.6189C20.4457 33.8574 20.7132 34.0006 20.9999 34.0006C21.2865 34.0006 21.554 33.8574 21.713 33.6189L22.6861 32.1594C28.0405 31.3462 32.1429 26.7245 32.1429 21.1432C32.1429 14.9887 27.1539 10 20.9997 10C14.8454 10 9.85645 14.989 9.85645 21.1432C9.85645 26.7245 13.959 31.3462 19.3132 32.1594L20.2867 33.6189ZM20.9999 29.7147C25.7337 29.7147 29.5716 25.8771 29.5716 21.143C29.5716 16.409 25.7337 12.5713 20.9999 12.5713C16.266 12.5713 12.4282 16.409 12.4282 21.143C12.4282 25.8771 16.266 29.7147 20.9999 29.7147Z" fill="#111827"/>
</g>
<defs>
<clipPath id="clip0_124_6036">
<rect width="24" height="24" fill="white" transform="translate(9 10)"/>
</clipPath>
</defs>
</svg>






    `,
  title: `
        Enjoy Precise 
Tracking Technology
    `,
  mobileDesc: `
    Give your customers’ peace of mind with precise tracking technology including multiple scanning points, configurable alerts and notifications, and picture POD (proof of delivery)
      `,
  DesktopDesc: `

    Give your customers’ peace of mind with precise tracking technology including multiple scanning points, configurable alerts and notifications, and picture POD (proof of delivery)
    `,
  mobileImg: `

    <img
        src="/eShipperRedesign/assets/svgFolder/Skip/card-3.svg"

        alt=""
        class="d-block d-xl-none"
        />
    `,

  lottiePlayer: `
  
  <img
  src="/eShipperRedesign/assets/svgFolder/Skip/card-3.svg"
  
  alt=""
  class="d-none d-xl-block"
  />
  
  `,
  buttonText: "Learn More",
  buttonClass: "d-none",
};

document.querySelector(".benefit .card-item-3").innerHTML = eShipperCard(card);

card = {
  svg: `
    
<svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="21" cy="21" r="21" fill="#F3F4F6"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M34.5006 14.6233H7.50059L7.5007 12.6872C7.5007 12.0589 7.75845 11.4872 8.17295 11.0729C8.58744 10.6581 9.15943 10.4006 9.78727 10.4006H32.214C32.8433 10.4006 33.4154 10.6572 33.8283 11.0729C34.2431 11.4872 34.5006 12.0589 34.5006 12.6872V14.6233ZM7.5 15.556H34.5L34.4998 29.3129C34.4998 29.9421 34.2432 30.5143 33.8276 30.9292C33.4144 31.3426 32.8424 31.5992 32.2133 31.5992H9.7865C9.12393 31.5992 8.62311 31.3493 8.1491 30.9057C7.74811 30.4944 7.5 29.9309 7.5 29.3126V15.556ZM20.9997 17.4644C17.6313 17.4644 14.8926 20.2028 14.8926 23.5715C14.8926 26.9402 17.631 29.6786 20.9997 29.6786C24.3684 29.6786 27.1069 26.9402 27.1069 23.5715C27.1069 20.2028 24.3684 17.4644 20.9997 17.4644ZM24.2527 27.2486C23.6741 25.7443 22.4398 24.7414 20.9997 24.7414C19.5596 24.7414 18.3253 25.7444 17.7468 27.2486C16.731 26.3486 16.0882 25.0372 16.0882 23.5715C16.0882 20.8587 18.2868 18.6599 20.9998 18.6599C23.7126 18.6599 25.9111 20.8586 25.9111 23.5715C25.9111 25.0372 25.2684 26.3486 24.2527 27.2486ZM22.8768 22.2858C22.8768 23.3225 22.0364 24.1629 20.9996 24.1629C19.9629 24.1629 19.1224 23.3225 19.1224 22.2858C19.1224 21.249 19.9629 20.4086 20.9996 20.4086C22.0364 20.4086 22.8768 21.249 22.8768 22.2858ZM11 12.5001C11 13.0523 10.5523 13.5001 10 13.5001C9.44772 13.5001 9 13.0523 9 12.5001C9 11.9478 9.44772 11.5001 10 11.5001C10.5523 11.5001 11 11.9478 11 12.5001ZM14 12.5001C14 13.0523 13.5523 13.5001 13 13.5001C12.4477 13.5001 12 13.0523 12 12.5001C12 11.9478 12.4477 11.5001 13 11.5001C13.5523 11.5001 14 11.9478 14 12.5001ZM16 13.5001C16.5523 13.5001 17 13.0523 17 12.5001C17 11.9478 16.5523 11.5001 16 11.5001C15.4477 11.5001 15 11.9478 15 12.5001C15 13.0523 15.4477 13.5001 16 13.5001Z" fill="#111827"/>
</svg>



    `,
  title: `
      Get Started Effortlessly
    `,
  mobileDesc: `
We activate SKIP rates directly to your existing eShipper account. If you don’t have an eShipper account, start today for free. 
      `,
  DesktopDesc: `

We activate SKIP rates directly to your existing eShipper account. If you don’t have an eShipper account, start today for free. 
  

    `,
  mobileImg: `

    <img
        src="/eShipperRedesign/assets/svgFolder/Skip/card-4.svg"

        alt=""
        class="d-block d-xl-none"
        />
    `,

  lottiePlayer: `


   <img
        src="/eShipperRedesign/assets/svgFolder/Skip/card-4.svg"
        alt=""
        class="d-none d-xl-block"
        />

`,
  buttonText: "Learn More",
  buttonClass: "d-none",
};

document.querySelector(".benefit .card-item-4").innerHTML = eShipperCard(card);

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
 * TOGGLE ESHIPPER HEADER INSTANT QUOTE FORM
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
    header: `Pick Up`,
    paragragh: `Packages are picked up for free from your facility*`,
  },

  {
    svg: `
        
       <svg width="28" height="28" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="19" cy="19" r="19" fill="#111827"/>
<path d="M13.128 25.352C13.192 24.68 13.336 23.976 13.56 23.24C13.784 22.488 14.096 21.776 14.496 21.104C14.912 20.416 15.416 19.784 16.008 19.208C16.616 18.632 17.328 18.168 18.144 17.816C18.72 17.56 19.272 17.32 19.8 17.096C20.344 16.856 20.824 16.6 21.24 16.328C21.656 16.04 21.992 15.712 22.248 15.344C22.504 14.96 22.632 14.504 22.632 13.976C22.632 13.464 22.52 13.016 22.296 12.632C22.088 12.248 21.816 11.928 21.48 11.672C21.144 11.416 20.768 11.224 20.352 11.096C19.952 10.968 19.568 10.904 19.2 10.904C18.704 10.904 18.216 10.96 17.736 11.072C17.272 11.168 16.848 11.328 16.464 11.552C16.08 11.776 15.76 12.064 15.504 12.416C15.248 12.752 15.08 13.16 15 13.64L12.912 13.4C13.024 12.664 13.272 12.016 13.656 11.456C14.04 10.896 14.512 10.432 15.072 10.064C15.648 9.68 16.288 9.392 16.992 9.2C17.712 9.008 18.448 8.912 19.2 8.912C19.872 8.912 20.536 9.024 21.192 9.248C21.864 9.456 22.456 9.768 22.968 10.184C23.496 10.6 23.92 11.12 24.24 11.744C24.576 12.368 24.744 13.08 24.744 13.88C24.744 14.712 24.592 15.416 24.288 15.992C23.984 16.568 23.568 17.072 23.04 17.504C22.512 17.936 21.896 18.312 21.192 18.632C20.504 18.952 19.768 19.28 18.984 19.616C18.12 20 17.408 20.584 16.848 21.368C16.304 22.152 15.904 23 15.648 23.912H25.128V26H13.128V25.352Z" fill="white"/>
</svg>


        `,
    header: `Air Zone Skipping`,
    paragragh: `Packages are tendered to the airport by evening, where they will fly on a passenger plane to arrive at the destination province by the next morning`,
  },

  {
    svg: `
        
      <svg width="28" height="28" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="19" cy="19" r="19" fill="#111827"/>
<path d="M24.336 13.52C24.336 14.272 24.16 14.952 23.808 15.56C23.456 16.152 22.968 16.648 22.344 17.048C23.112 17.48 23.712 18.048 24.144 18.752C24.592 19.456 24.816 20.264 24.816 21.176C24.816 21.912 24.664 22.592 24.36 23.216C24.072 23.84 23.664 24.376 23.136 24.824C22.608 25.272 21.984 25.624 21.264 25.88C20.544 26.136 19.76 26.264 18.912 26.264C18.176 26.264 17.48 26.16 16.824 25.952C16.168 25.744 15.584 25.456 15.072 25.088C14.56 24.704 14.128 24.256 13.776 23.744C13.44 23.216 13.224 22.648 13.128 22.04L15.408 21.848C15.632 22.568 16.064 23.144 16.704 23.576C17.36 24.008 18.096 24.224 18.912 24.224C19.456 24.224 19.952 24.144 20.4 23.984C20.864 23.824 21.264 23.608 21.6 23.336C21.936 23.048 22.192 22.712 22.368 22.328C22.56 21.944 22.656 21.528 22.656 21.08C22.656 20.632 22.56 20.224 22.368 19.856C22.192 19.472 21.936 19.144 21.6 18.872C21.264 18.584 20.864 18.368 20.4 18.224C19.952 18.064 19.456 17.984 18.912 17.984H18.072V16.184H18.912C19.392 16.184 19.832 16.12 20.232 15.992C20.632 15.848 20.976 15.664 21.264 15.44C21.552 15.2 21.776 14.92 21.936 14.6C22.112 14.264 22.2 13.904 22.2 13.52C22.2 13.136 22.112 12.784 21.936 12.464C21.776 12.144 21.552 11.864 21.264 11.624C20.976 11.384 20.624 11.2 20.208 11.072C19.808 10.928 19.368 10.856 18.888 10.856C18.216 10.856 17.592 11.016 17.016 11.336C16.44 11.64 16.016 12.096 15.744 12.704L13.56 12.536C13.672 12.008 13.888 11.528 14.208 11.096C14.528 10.648 14.92 10.264 15.384 9.944C15.864 9.624 16.4 9.376 16.992 9.2C17.584 9.008 18.216 8.912 18.888 8.912C19.688 8.912 20.416 9.032 21.072 9.272C21.744 9.496 22.32 9.816 22.8 10.232C23.28 10.632 23.656 11.112 23.928 11.672C24.2 12.232 24.336 12.848 24.336 13.52Z" fill="white"/>
</svg>



        `,
    header: `Induct`,
    paragragh: `Packages are inducted in the local carrier network, or at the airport for air-zone skipping depending on destination`,
  },

  {
    svg: `
        
       <svg width="28" height="28" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="19" cy="19" r="19" fill="#111827"/>
<path d="M21.168 22.328H12.552V20.264L18.24 9.2H20.664L15 20.264H21.168V15.92H23.376V20.264H25.416V22.328H23.376V26H21.168V22.328Z" fill="white"/>
</svg>



        `,
    header: `Deliver`,
    paragragh: `Last-mile delivery of packages is done by a local carrier with picture POD`,
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
