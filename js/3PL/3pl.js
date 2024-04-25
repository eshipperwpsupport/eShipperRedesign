import buildButton from "../../assets/Button/button.js";
import eShipperCard from "../../assets/Card/eShipperCard.js";
import eShipperCard2 from "../../assets/Card/eshipperCard-2.js";
import { sliderLogo } from "../helper.js";
import { sliderInput } from "../helper.js";
import { eshipperHeaderInstantQuote } from "../helper.js";
import { play_lottie } from "../helper.js";
import { loop_arrow } from "../helper.js";
import { createButton } from "../helper.js";

/**
 *
 * BUTTON FOR HERO SECTION
 */

// DESKTOP VERSION
document.querySelectorAll(".include-btn").forEach((btn) => {
  if (btn.classList.contains("btn-support")) {
    btn.innerHTML = buildButton({
      text: "Book a Meeting",
      className: "button-white-bg-black  rounded-pill",
    });

    return;
  }

  btn.innerHTML = buildButton({
    text: "Book a Meeting",
    className: "button-black-bg text-white rounded-pill",
  });
});

/**
 *
 * CREATE BUTTON SECTION
 */

// SERVICES SECTION
createButton(
  ".skip-content .include-btn",
  "Contact Us",
  "btn button-white-bg-black text-dark rounded-pill "
);

// CTA SECTION
createButton(
  ".CTA .include-btn",
  "Book a Meeting",
  "btn button-teal-txt-white-bg rounded-pill "
);

/**
 *
 * BUTTON FOR CARDS SECTION
 */

document.querySelector(".benefit-btn").innerHTML = buildButton({
  text: "Book a Meeting",
  className: "button-black-bg text-white rounded-pill",
});

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
       <svg width="43" height="42" viewBox="0 0 43 42" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="21.7686" cy="21" r="21" fill="#F3F4F6"/>
<path d="M14.6916 16.3334C16.1532 16.3334 17.3583 15.1283 17.3583 13.6667C17.3583 12.2051 16.1532 11 14.6916 11C13.23 11 12.0249 12.2051 12.0249 13.6667C12.0249 15.1539 13.23 16.3334 14.6916 16.3334Z" fill="#111827"/>
<path d="M28.8456 11.025C27.6406 11.025 26.6405 11.8198 26.3071 12.9224H24.3069C23.9735 11.8198 22.9734 11.025 21.7683 11.025C20.3067 11.025 19.1016 12.23 19.1016 13.6917C19.1016 14.1788 19.2298 14.6149 19.4606 14.9995L15.8449 18.615C15.4859 18.4354 15.1013 18.3585 14.6911 18.3585C13.2295 18.333 12.0244 19.5382 12.0244 20.9997C12.0244 22.4613 13.2295 23.6664 14.6911 23.6664C16.1527 23.6664 17.3578 22.4613 17.3578 20.9997C17.3578 20.5126 17.2296 20.0509 16.9731 19.6406L20.563 16.0507C20.922 16.2303 21.3323 16.3328 21.7681 16.3328C22.9732 16.3328 23.9733 15.538 24.3067 14.4354H26.3069C26.6402 15.538 27.6403 16.3328 28.8455 16.3328C30.3071 16.3328 31.5121 15.1278 31.5121 13.6661C31.5123 12.2043 30.3072 11.0249 28.8457 11.0249L28.8456 11.025Z" fill="#111827"/>
<path d="M21.7684 23.6671C23.23 23.6671 24.4351 22.462 24.4351 21.0004C24.4351 19.5388 23.23 18.3337 21.7684 18.3337C20.3068 18.3337 19.1017 19.5388 19.1017 21.0004C19.1017 22.462 20.3068 23.6671 21.7684 23.6671Z" fill="#111827"/>
<path d="M31.5126 28.3339C31.5126 26.8723 30.3075 25.6672 28.8459 25.6672C27.3843 25.6672 26.1792 26.8723 26.1792 28.3339C26.1792 29.7955 27.3843 31.0006 28.8459 31.0006C30.3075 30.975 31.5126 29.7955 31.5126 28.3339Z" fill="#111827"/>
<path d="M28.8456 18.3333C27.384 18.3333 26.179 19.5384 26.179 21C26.179 21.7179 26.4611 22.3591 26.9226 22.8462L23.4865 26.2823C23.025 25.8976 22.4352 25.6668 21.7684 25.6668C20.5633 25.6668 19.5632 26.4617 19.2298 27.5643H17.2296C16.8963 26.4617 15.8962 25.6668 14.6911 25.6668C13.2295 25.6668 12.0244 26.8719 12.0244 28.3335C12.0244 29.7951 13.2295 31.0002 14.6911 31.0002C15.8962 31.0002 16.8962 30.2053 17.2296 29.1027H19.2298C19.5632 30.2053 20.5633 31.0002 21.7684 31.0002C23.23 31.0002 24.4351 29.7951 24.4351 28.3335C24.4351 28.077 24.4095 27.8463 24.3326 27.6411L28.3327 23.641C28.5123 23.6666 28.6661 23.6923 28.8455 23.6923C30.3073 23.6666 31.5123 22.4615 31.5123 20.9999C31.5123 19.5383 30.3073 18.3333 28.8456 18.3333Z" fill="#111827"/>
</svg>


    `,
  title: `
        Technology that delivers
    `,
  mobileDesc: `
    Integrate your warehouse management systems with customizable EDI and API 
integrations.
    
      `,
  DesktopDesc: `

    Integrate your warehouse management systems with customizable EDI and API integrations, and view all your shipping operations from a single dashboard, and book palletized shipments in a few clicks.

    `,
  mobileImg: `

    <img
        src="/eShipperRedesign/assets/svgFolder/3PL/card-1.svg"
        alt=""
        class="d-block d-xl-none"
        />
    `,

  lottiePlayer: `

    <dotlottie-player src="https://lottie.host/a827683e-7057-49e3-afb4-de4461ee983e/T0ERmzESOs.json" background="transparent" speed="1" style="width: 280px; height: 270px;" loop hover class="d-none d-xl-block"></dotlottie-player>

`,
  buttonText: "Learn More",
  buttonClass: "d-none",
};

document.querySelector(".benefit .card-item-1").innerHTML = eShipperCard(card);

card = {
  svg: `
      <svg width="43" height="42" viewBox="0 0 43 42" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="21.7686" cy="21" r="21" fill="#F3F4F6"/>
<g clip-path="url(#clip0_299_2981)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.7686 12C15.7686 11.4477 16.2163 11 16.7686 11H26.7686C27.3208 11 27.7686 11.4477 27.7686 12V30C27.7686 30.5523 27.3208 31 26.7686 31H16.7686C16.2163 31 15.7686 30.5523 15.7686 30V12ZM18.5693 23.9333C18.5693 23.3933 19.0071 22.9556 19.5471 22.9556H24.436C24.976 22.9556 25.4138 23.3933 25.4138 23.9333C25.4138 24.4734 24.976 24.9111 24.436 24.9111H19.5471C19.0071 24.9111 18.5693 24.4734 18.5693 23.9333ZM22.0457 21.8H21.4434L21.4434 21.8C21.3049 21.8 21.1931 21.6944 21.1929 21.5634V21.0623L21.0444 21.0481C20.5839 20.9992 20.1501 20.8811 19.8582 20.7219C19.7448 20.662 19.7013 20.5328 19.7531 20.4209L19.9833 19.9371C20.0117 19.8772 20.0651 19.8315 20.1302 19.8094C20.1569 19.8016 20.1836 19.7968 20.2103 19.7968C20.252 19.7968 20.2921 19.8063 20.3288 19.8252C20.6791 20.0017 21.1496 20.1073 21.5867 20.1073C22.1005 20.1073 22.4743 19.9088 22.4743 19.6362C22.4743 19.4597 22.3658 19.247 21.5667 19.0011C20.7009 18.7442 19.8183 18.3691 19.8183 17.5275C19.8183 16.8893 20.3104 16.3897 21.1346 16.1927L21.2597 16.1627V15.6348C21.2597 15.5057 21.3732 15.4 21.51 15.4H22.1023C22.2408 15.4 22.3526 15.5056 22.3526 15.6348V16.1092L22.4994 16.1265C22.8514 16.1659 23.1634 16.2479 23.4504 16.3755C23.5104 16.4023 23.5571 16.4496 23.5788 16.5095C23.6022 16.5678 23.5989 16.634 23.5705 16.6892L23.3319 17.1667C23.2902 17.2487 23.2017 17.3023 23.105 17.3023C23.07 17.3023 23.035 17.2943 23.0016 17.2801C22.8465 17.2124 22.4828 17.0564 21.9022 17.0564C21.375 17.0564 21.1398 17.2486 21.1398 17.4409C21.1398 17.6553 21.385 17.8002 22.1525 18.0398C22.97 18.292 23.8042 18.6718 23.8042 19.5858C23.8042 20.0791 23.4421 20.7425 22.4211 20.9852L22.296 21.0168V21.5636C22.296 21.6944 22.1825 21.8 22.0457 21.8Z" fill="#111827"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M28.7686 14H32.7686C33.3208 14 33.7686 14.4477 33.7686 15V27C33.7686 27.5523 33.3208 28 32.7686 28H28.7686V14ZM31.0326 22.8H31.4073C31.4924 22.8 31.563 22.7373 31.563 22.6596V22.3349L31.6408 22.3162C32.2759 22.1721 32.5011 21.7782 32.5011 21.4853C32.5011 20.9426 31.9822 20.7171 31.4737 20.5674C30.9963 20.4251 30.8438 20.339 30.8438 20.2118C30.8438 20.0976 30.9901 19.9834 31.3181 19.9834C31.6792 19.9834 31.9054 20.0761 32.0019 20.1163C32.0227 20.1247 32.0444 20.1294 32.0662 20.1294C32.1264 20.1294 32.1814 20.0976 32.2073 20.0489L32.3558 19.7654C32.3734 19.7327 32.3755 19.6934 32.3609 19.6587C32.3474 19.6232 32.3184 19.5951 32.281 19.5792C32.1025 19.5034 31.9085 19.4547 31.6895 19.4313L31.5982 19.4211V19.1394C31.5982 19.0627 31.5286 19 31.4425 19H31.0741C30.989 19 30.9184 19.0627 30.9184 19.1394V19.4529L30.8406 19.4707C30.3279 19.5876 30.0218 19.8842 30.0218 20.2632C30.0218 20.7629 30.5708 20.9856 31.1093 21.1381C31.6064 21.2841 31.6739 21.4104 31.6739 21.5152C31.6739 21.6771 31.4414 21.795 31.1218 21.795C30.8499 21.795 30.5573 21.7322 30.3393 21.6274C30.3165 21.6162 30.2916 21.6106 30.2656 21.6106C30.249 21.6106 30.2324 21.6134 30.2158 21.6181C30.1753 21.6312 30.1421 21.6583 30.1245 21.6939L29.9812 21.9811C29.949 22.0476 29.9761 22.1243 30.0466 22.1598C30.2282 22.2544 30.498 22.3245 30.7845 22.3535L30.8768 22.362V22.6595C30.8769 22.7373 30.9465 22.8 31.0326 22.8Z" fill="#111827"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.76855 15C9.76855 14.4477 10.2163 14 10.7686 14H14.7686V28H10.7686C10.2163 28 9.76855 27.5523 9.76855 27V15ZM12.0326 22.8H12.4073C12.4924 22.8 12.563 22.7373 12.563 22.6596V22.3349L12.6408 22.3162C13.2759 22.1721 13.5011 21.7782 13.5011 21.4853C13.5011 20.9426 12.9822 20.7171 12.4737 20.5674C11.9963 20.4251 11.8438 20.339 11.8438 20.2118C11.8438 20.0976 11.9901 19.9834 12.3181 19.9834C12.6792 19.9834 12.9054 20.0761 13.0019 20.1163C13.0227 20.1247 13.0444 20.1294 13.0662 20.1294C13.1264 20.1294 13.1814 20.0976 13.2073 20.0489L13.3558 19.7654C13.3734 19.7327 13.3755 19.6934 13.3609 19.6587C13.3474 19.6232 13.3184 19.5951 13.281 19.5792C13.1025 19.5034 12.9085 19.4547 12.6895 19.4313L12.5982 19.4211V19.1394C12.5982 19.0627 12.5286 19 12.4425 19H12.0741C11.989 19 11.9184 19.0627 11.9184 19.1394V19.4529L11.8406 19.4707C11.3279 19.5876 11.0218 19.8842 11.0218 20.2632C11.0218 20.7629 11.5708 20.9856 12.1093 21.1381C12.6064 21.2841 12.6739 21.4104 12.6739 21.5152C12.6739 21.6771 12.4414 21.795 12.1218 21.795C11.8499 21.795 11.5573 21.7322 11.3393 21.6274C11.3165 21.6162 11.2916 21.6106 11.2656 21.6106C11.249 21.6106 11.2324 21.6134 11.2158 21.6181C11.1753 21.6312 11.1421 21.6583 11.1245 21.6939L10.9812 21.9811C10.949 22.0476 10.9761 22.1243 11.0466 22.1598C11.2282 22.2544 11.498 22.3245 11.7845 22.3535L11.8768 22.362V22.6595C11.8769 22.7373 11.9465 22.8 12.0326 22.8Z" fill="#111827"/>
</g>
<defs>
<clipPath id="clip0_299_2981">
<rect width="24" height="24" fill="white" transform="translate(9.76855 9)"/>
</clipPath>
</defs>
</svg>



    `,
  title: `
        Rates that drive your 
competitive edge
    `,
  mobileDesc: `
    Offer your clients competitive shipping rates up to 70% off to supercharge your service.

    
      `,
  DesktopDesc: `

    Offer your clients competitive shipping rates up to 70% off to supercharge your service offering. No monthly or annual fees required.

    `,
  mobileImg: `

    <img
        src="/eShipperRedesign/assets/svgFolder/3PL/card-2.svg"

        alt=""
        class="d-block d-xl-none"
        />
    `,

  lottiePlayer: `

   <dotlottie-player src="https://lottie.host/15deea79-342f-4156-a587-d347b9843911/dLKF7tVeYi.json" background="transparent" speed="1" style="width: 280px; height: 270px;" loop class="d-none d-xl-block"></dotlottie-player>


`,
  buttonText: "Learn More",
  buttonClass: "d-none",
};

document.querySelector(".benefit .card-item-2").innerHTML = eShipperCard(card);

card = {
  svg: `
       <svg width="43" height="42" viewBox="0 0 43 42" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="21.7686" cy="21" r="21" fill="#F3F4F6"/>
<path d="M24.6286 20.2214C24.6462 20.0504 24.5717 19.8829 24.4329 19.7815C24.2986 19.6771 24.1505 19.5919 23.9928 19.5284C23.8585 19.469 23.7222 19.4139 23.5879 19.3612H23.5881C23.266 19.2396 22.954 19.0924 22.6552 18.9213C21.8302 18.4285 21.4539 17.784 21.5046 16.9545C21.564 15.9866 22.0899 15.3155 23.071 14.9591C23.291 14.8799 23.291 14.8799 23.291 14.6622V14.5303V14.2839C23.291 13.8989 23.434 13.7647 23.8191 13.7515H24.1512C24.8112 13.7515 24.8728 13.8901 24.875 14.5412C24.875 14.7832 24.875 14.7832 25.117 14.8207V14.8205C25.4485 14.8737 25.7718 14.9699 26.0784 15.1065C26.2006 15.1461 26.3012 15.2344 26.3562 15.3507C26.4111 15.4669 26.4158 15.6006 26.3688 15.7203L26.3072 15.9404C26.2543 16.123 26.2038 16.3078 26.1444 16.4904V16.4902C26.1159 16.6297 26.0284 16.7501 25.9047 16.8202C25.7624 16.8657 25.6075 16.8472 25.4801 16.7697C25.063 16.5674 24.6007 16.4758 24.138 16.5035C24.0302 16.5045 23.9236 16.5255 23.8234 16.5651C23.695 16.6104 23.5997 16.7199 23.5727 16.8533C23.5633 16.9854 23.6244 17.1124 23.7333 17.1876C23.909 17.3222 24.1031 17.4312 24.3097 17.5111L24.444 17.5683H24.4438C24.7958 17.7053 25.1397 17.8624 25.4736 18.0391C26.0904 18.3718 26.5268 18.9621 26.6637 19.6495C26.7866 20.2948 26.6147 20.9613 26.1951 21.4667C25.8749 21.8563 25.4398 22.1349 24.952 22.2632C24.8332 22.2962 24.8223 22.3226 24.8267 22.4194V22.8221V22.8617V23.0332V23.0331C24.8408 23.1626 24.7964 23.2919 24.706 23.3857C24.6155 23.4795 24.4881 23.5286 24.358 23.5193H23.6959C23.5634 23.5247 23.4349 23.4732 23.3429 23.3778C23.2508 23.2823 23.2039 23.1521 23.214 23.0198V22.5799V22.4171L23.0666 22.3929C22.6462 22.3364 22.2363 22.2184 21.8501 22.0431C21.4739 21.8605 21.3969 21.6933 21.5068 21.2907C21.5728 21.0486 21.6344 20.8309 21.7027 20.613C21.7423 20.4877 21.8237 20.2324 22.0834 20.2324L22.0832 20.2325C22.1883 20.2386 22.2904 20.2703 22.3803 20.3248C22.7598 20.5184 23.1712 20.6414 23.5947 20.6879C23.8445 20.7228 24.0989 20.6902 24.3317 20.5932C24.4895 20.5306 24.6024 20.3893 24.6286 20.2215L24.6286 20.2214ZM16.5105 14.9105C17.1324 14.9105 17.7289 14.6634 18.1688 14.2237C18.6086 13.784 18.8556 13.1874 18.8556 12.5654C18.8556 11.9433 18.6086 11.3468 18.1688 10.907C17.7289 10.4673 17.1324 10.2202 16.5105 10.2202C15.8884 10.2202 15.2919 10.4673 14.8521 10.907C14.4124 11.3468 14.1653 11.9433 14.1653 12.5654C14.1658 13.1872 14.4131 13.7833 14.8528 14.223C15.2924 14.6628 15.8886 14.91 16.5105 14.9105ZM30.7645 22.1705H30.7643C30.5973 22.003 30.3597 21.9268 30.1263 21.9659L27.1608 22.4543C26.9978 22.4812 26.8488 22.5623 26.7378 22.6845C26.6269 22.8066 26.5604 22.9627 26.5492 23.1275C26.5352 23.3431 26.6155 23.5542 26.7692 23.7061L27.2731 24.21L24.2722 27.2173L22.4286 25.3826C22.2372 25.1912 21.9776 25.0838 21.707 25.0838C21.4364 25.0838 21.1767 25.1912 20.9854 25.3826L18.396 27.9807L18.9152 23.1407C19.1909 23.0217 19.4305 22.8322 19.6097 22.5912C19.7888 22.3503 19.9014 22.0663 19.936 21.7679L20.4486 17.8784C20.4987 17.4379 20.3995 16.9935 20.1668 16.6161C19.9344 16.2388 19.5819 15.9505 19.1659 15.7971C18.9355 15.7137 18.6918 15.6727 18.4466 15.6762H17.8086C17.7144 15.6762 17.6253 15.7192 17.5665 15.7927L16.4886 17.1238L15.4238 15.8038C15.3644 15.7298 15.2744 15.687 15.1796 15.6871H14.5636C14.319 15.6843 14.076 15.7261 13.8464 15.8103C13.4338 15.9648 13.0844 16.2525 12.8537 16.6279C12.6229 17.0032 12.5241 17.4448 12.5726 17.8827L13.0808 21.7724C13.1493 22.3682 13.5238 22.8852 14.0686 23.1363L14.9112 30.9772C14.936 31.1983 15.0416 31.4026 15.2076 31.5508C15.3736 31.6988 15.5884 31.7806 15.811 31.7802H17.1727C17.4451 31.7806 17.7031 31.6575 17.8745 31.4459C17.9826 31.3051 18.0979 31.1699 18.2199 31.041L21.7156 27.5475L23.5505 29.3822C23.7419 29.5735 24.0015 29.681 24.2721 29.681C24.5427 29.681 24.8023 29.5735 24.9937 29.3822L28.7227 25.6533L29.2199 26.1505C29.363 26.297 29.5584 26.3809 29.7633 26.3836C29.8021 26.387 29.8411 26.387 29.8798 26.3836C30.0297 26.3583 30.1678 26.2868 30.2751 26.179C30.3824 26.0714 30.4534 25.9329 30.4782 25.783L30.9666 22.8173V22.8175C31.0051 22.5849 30.9289 22.3482 30.762 22.1817L30.7645 22.1705Z" fill="#111827"/>
</svg>



    `,
  title: `
        Driving success behind-the-scenes
    `,
  mobileDesc: `
    We can handle your customers’ shipping queries and create efficiencies in their current logistics practices.
      `,
  DesktopDesc: `

    We can handle your customers’ shipping queries and create efficiencies in their current logistics practices – all while acting as a representative of your 3PL, at no extra cost.

    `,
  mobileImg: `

    <img
        src="/eShipperRedesign/assets/svgFolder/3PL/card-3.svg"

        alt=""
        class="d-block d-xl-none"
        />
    `,

  lottiePlayer: `

   <dotlottie-player src="https://lottie.host/4b55a108-cbcd-45a7-aae4-caa7028de7b5/LS4yIwSnDK.json" background="transparent" speed="1" style="width: 280px; height: 270px;" loop class="d-none d-xl-block"></dotlottie-player>

  
  `,
  buttonText: "Learn More",
  buttonClass: "d-none",
};
{
  /* <dotlottie-player src="https://lottie.host/fc25e103-6bdc-4219-a4ad-e3c45d574e39/mFiSMWu8Ml.json" background="transparent" speed="1" style="width: 280px; height: 270px;" loop hover class="d-none d-xl-block"></dotlottie-player> */
}

document.querySelector(".benefit .card-item-3").innerHTML = eShipperCard(card);

card = {
  svg: `
    
   <svg width="43" height="42" viewBox="0 0 43 42" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="21.7686" cy="21" r="21" fill="#F3F4F6"/>
<g clip-path="url(#clip0_299_3686)">
<path d="M12.1227 16.1875C12.1227 13.5182 14.2867 11.3542 16.9561 11.3542H19.3623C19.3664 11.3542 19.3686 11.3549 19.3702 11.3555C19.3722 11.3564 19.3746 11.3579 19.377 11.3603C19.3794 11.3627 19.3809 11.3651 19.3818 11.3671C19.3824 11.3687 19.3831 11.3709 19.3831 11.375C19.3831 11.3791 19.3824 11.3813 19.3818 11.3829C19.3809 11.3849 19.3794 11.3873 19.377 11.3897C19.3746 11.3921 19.3722 11.3936 19.3702 11.3945C19.3686 11.3951 19.3664 11.3958 19.3623 11.3958H16.9561C14.3097 11.3958 12.1644 13.5411 12.1644 16.1875V17.9062C12.1644 17.9103 12.1637 17.9126 12.163 17.9141C12.1622 17.9161 12.1607 17.9186 12.1583 17.921C12.1559 17.9233 12.1534 17.9249 12.1514 17.9257C12.1499 17.9264 12.1476 17.9271 12.1436 17.9271C12.1395 17.9271 12.1372 17.9264 12.1357 17.9257C12.1337 17.9249 12.1312 17.9233 12.1288 17.921C12.1265 17.9186 12.1249 17.9161 12.1241 17.9141C12.1234 17.9126 12.1227 17.9103 12.1227 17.9062V16.1875Z" fill="#111827" stroke="#111827" stroke-width="1.33333"/>
<path d="M31.3936 21.6667C31.3976 21.6667 31.3999 21.6674 31.4014 21.668C31.4034 21.6689 31.4059 21.6704 31.4083 21.6728C31.4107 21.6752 31.4122 21.6776 31.413 21.6796C31.4137 21.6812 31.4144 21.6834 31.4144 21.6875V25.8125C31.4144 28.4818 29.2504 30.6458 26.5811 30.6458H24.8623C24.8582 30.6458 24.856 30.6451 24.8544 30.6445C24.8524 30.6436 24.85 30.6421 24.8476 30.6397C24.8452 30.6373 24.8437 30.6349 24.8428 30.6329C24.8422 30.6313 24.8415 30.6291 24.8415 30.625C24.8415 30.6209 24.8422 30.6187 24.8428 30.6171C24.8437 30.6151 24.8452 30.6127 24.8476 30.6103C24.85 30.6079 24.8524 30.6064 24.8544 30.6055C24.856 30.6049 24.8582 30.6042 24.8623 30.6042H26.5811C29.2274 30.6042 31.3727 28.4589 31.3727 25.8125V21.6875C31.3727 21.6834 31.3734 21.6812 31.3741 21.6796C31.3749 21.6776 31.3765 21.6752 31.3788 21.6728C31.3812 21.6704 31.3837 21.6689 31.3857 21.668C31.3872 21.6674 31.3895 21.6667 31.3936 21.6667Z" fill="#111827" stroke="#111827" stroke-width="1.33333"/>
<path d="M28.9665 12.0625V11.3958H28.2998H24.8623H24.1956V12.0625V13.4375C24.1956 14.1854 24.8019 14.7917 25.5498 14.7917H27.6123C28.3602 14.7917 28.9665 14.1854 28.9665 13.4375V12.0625ZM21.7477 13.4375C21.7477 12.2868 22.6804 11.3542 23.8311 11.3542H29.3311C30.4817 11.3542 31.4144 12.2868 31.4144 13.4375V17.5625C31.4144 18.7132 30.4817 19.6458 29.3311 19.6458H23.8311C22.6804 19.6458 21.7477 18.7132 21.7477 17.5625V13.4375Z" fill="#111827" stroke="#111827" stroke-width="1.33333"/>
<path d="M15.2165 20.6562C15.2165 19.3157 16.303 18.2292 17.6436 18.2292C18.9841 18.2292 20.0706 19.3157 20.0706 20.6562C20.0706 21.9968 18.9841 23.0833 17.6436 23.0833C16.303 23.0833 15.2165 21.9968 15.2165 20.6562Z" fill="#111827" stroke="#111827" stroke-width="1.33333"/>
<path d="M12.1227 27.5312C12.1227 26.3806 13.0554 25.4479 14.2061 25.4479H21.0811C22.2317 25.4479 23.1644 26.3806 23.1644 27.5312V28.5625C23.1644 29.7132 22.2317 30.6458 21.0811 30.6458H14.2061C13.0554 30.6458 12.1227 29.7132 12.1227 28.5625V27.5312Z" fill="#111827" stroke="#111827" stroke-width="1.33333"/>
</g>
<defs>
<clipPath id="clip0_299_3686">
<rect width="22" height="22" fill="white" transform="translate(10.7686 10)"/>
</clipPath>
</defs>
</svg>



    `,
  title: `
        Hands-on support
    `,
  mobileDesc: `
    Receive an entire team behind your 3PL operation, including client executives, data analysts, and support personnel — ensuring your business receives 

      `,
  DesktopDesc: `

    Receive an entire team behind your 3PL operation, including client executives, data analysts, and support personnel — ensuring your business receives the absolute best care possible, every step of the way.
    `,
  mobileImg: `

    <img
        src="/eShipperRedesign/assets/svgFolder/3PL/card-4.svg"

        alt=""
        class="d-block d-xl-none"
        />
    `,

  lottiePlayer: `


    <dotlottie-player src="https://lottie.host/fc25e103-6bdc-4219-a4ad-e3c45d574e39/mFiSMWu8Ml.json" background="transparent" speed="1" style="width: 280px; height: 270px;" loop hover class="d-none d-xl-block"></dotlottie-player>


`,
  buttonText: "Learn More",
  buttonClass: "d-none",
};

document.querySelector(".benefit .card-item-4").innerHTML = eShipperCard(card);

/**
 *
 * CARDS FOR SOLUTION CARDS SECTION
 */

card = {
  title: `
       Freight Solutions
    `,
  Desc: `
    Ship full truck loads and LTL shipments within Canada and USA with specialized logistics solutions including flatbeds, drayage, and climate-controlled transportation.
    
      `,
  Img: `

   <img
        src="https://live-eshipper-media-wprocket.s3.ca-central-1.amazonaws.com/wp-content/uploads/2024/04/09120703/Frame-1000004893-1.png"
        alt=""
      />
    `,
};

document.querySelector(".solution .card-item-1").innerHTML =
  eShipperCard2(card);

card = {
  title: `
       End-to-end Logistics Capabilities
    `,
  Desc: `
We take a 360-degree approach to logistics including label generation, inbound, receiving at our warehouse, cross docking, labour management, shipment monitoring, and rate analysis – while simultaneously providing you with the most competitive shipping rates.
      `,
  Img: `
   <img
        src="https://live-eshipper-media-wprocket.s3.ca-central-1.amazonaws.com/wp-content/uploads/2024/04/09120710/Frame-1000005023-1.png"
        alt=""
      />
    `,
};

document.querySelector(".solution .card-item-2").innerHTML =
  eShipperCard2(card);

card = {
  title: `
       FBA Delivery
    `,
  Desc: `
    Ship to Marketplace Distribution and Fulfillment centres including Amazon, Walmart and more. Enable your customers to replenish their stock and automate shipping from your facility or ours, directly to the fulfillment centre of your choice.
    
      `,
  Img: `

   <img
        src="https://live-eshipper-media-wprocket.s3.ca-central-1.amazonaws.com/wp-content/uploads/2024/04/09120240/Frame-1597879060.png"
        alt=""
      />
    `,
};

document.querySelector(".solution .card-item-3").innerHTML =
  eShipperCard2(card);

card = {
  title: `
       Courier Shipping
    `,
  Desc: `
    Empower your customers to ship their products within Canada, USA, and internationally with rates up to 70% off and fully tracked services for your peace of mind.
    
      `,
  Img: `

   <img
        src="https://live-eshipper-media-wprocket.s3.ca-central-1.amazonaws.com/wp-content/uploads/2024/04/09120253/Frame-1597879004.png"
        alt=""
      />
    `,
};

document.querySelector(".solution .card-item-4").innerHTML =
  eShipperCard2(card);

card = {
  title: `
       Cross-Border Distribution
    `,
  Desc: `
    Our team of experts will arrange pickups, line haul and customs clearance of your shipments across the border and provide final mile delivery across Canada and USA. 
    
      `,
  Img: `

   <img
        src="https://live-eshipper-media-wprocket.s3.ca-central-1.amazonaws.com/wp-content/uploads/2024/04/09120259/Frame-1597879061.png"
        alt=""
      />
    `,
};

document.querySelector(".solution .card-item-5").innerHTML =
  eShipperCard2(card);

card = {
  title: `
      Postal
    `,
  Desc: `
 Allow your customers to save on fully tracked postal delivery locally and across the globe, perfect for eCommerce businesses.
    
      `,
  Img: `

   <img
        src="https://live-eshipper-media-wprocket.s3.ca-central-1.amazonaws.com/wp-content/uploads/2024/04/11172232/Frame-1597879063.png"
        alt=""
      />
    `,
};

document.querySelector(".solution .card-item-6").innerHTML =
  eShipperCard2(card);

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
