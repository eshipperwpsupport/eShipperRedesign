import buildButton from "../../assets/Button/button.js";
import eShipperCard from "../../assets/Card/eShipperCard.js";
import eShipperCard2 from "../../assets/Card/eshipperCard-2.js";
import { sliderLogo } from "../helper.js";
import { sliderInput } from "../helper.js";
import { eshipperHeaderInstantQuote } from "../helper.js";
import { play_lottie } from "../helper.js";

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
    text: "Start Now",
    className: "button-black-bg text-white rounded-pill",
  });
});

//   .innerHTML = buildButton({
//   text: "Get Started",
//   className: "button-black-bg text-white rounded-pill",
// });

/**
 *
 * BUTTON FOR CARDS SECTION
 */

document.querySelectorAll(".benefit-btn").forEach((btn) => {
  btn.innerHTML = buildButton({
    text: "Get a Quote",
    className: "button-black-bg text-white rounded-pill",
  });
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
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="18" cy="18" r="18" fill="#F3F4F6"/>
            <g clip-path="url(#clip0_68_31932)">
            <path d="M19.4366 18.1388V18.5859C19.4366 19.1491 19.693 19.4108 20.1836 19.4108H20.8024C21.3874 19.4108 21.7854 19.8863 21.7854 20.3927V20.9129C21.7854 21.4761 21.5302 21.8154 20.9336 21.8154H20.2163C19.5887 21.8154 19.2618 21.5285 19.2618 20.9425V20.4581C19.2618 19.9959 18.9297 19.6926 18.5254 19.6926H17.4572C16.9229 19.6926 16.7931 20.0536 16.7931 20.4581V21.4117C16.7931 21.9172 17.0964 22.0905 17.4863 22.0905H18.1442C18.8871 22.0905 19.2442 22.4164 19.2442 22.9367V23.2959C19.2442 23.8871 19.5803 24.1113 20.1153 24.1113H21.2184C21.7645 24.1113 22.0313 23.8231 22.0313 23.3304V22.9273C22.0313 22.2488 22.4076 22.0322 23.1295 22.0322H23.889C24.3079 22.0322 24.5007 21.7722 24.5007 21.4256V20.025C24.5007 19.5632 24.2407 19.3465 23.7356 19.3465H22.8256C22.2825 19.3465 21.7957 18.9361 21.7957 18.1771V17.73C21.7957 17.1667 21.5393 16.9051 21.0486 16.9051H20.4297C19.8447 16.9051 19.4467 16.4297 19.4467 15.9233V15.4031C19.4467 14.8399 19.7022 14.5006 20.2987 14.5006H21.0159C21.6435 14.5006 21.9707 14.7875 21.9707 15.3735V15.8579C21.9707 16.3201 22.3028 16.6231 22.7071 16.6231H23.7749C24.3092 16.6231 24.439 16.2621 24.439 15.8579V14.9043C24.439 14.3991 24.1357 14.2258 23.7458 14.2258H23.0879C22.345 14.2258 21.988 13.8999 21.988 13.3796V13.0394C21.988 12.4484 21.6681 12.2051 21.1333 12.2051H20.0137C19.4676 12.2051 19.2008 12.4933 19.2008 12.9861V13.3891C19.2008 14.0675 18.8246 14.2842 18.1026 14.2842H17.3428C16.9243 14.2842 16.7314 14.5441 16.7314 14.8907V16.2913C16.7314 16.7535 16.9912 16.9701 17.4969 16.9701H18.4064C18.9498 16.9693 19.4366 17.3797 19.4366 18.1387V18.1388Z" fill="#111827"/>
            <path d="M26.209 19.3589C26.6455 19.3589 26.9993 19.0049 26.9993 18.5686V17.9653C26.9993 17.5288 26.6455 17.1748 26.209 17.1748H25.6057C25.1694 17.1748 24.8154 17.5288 24.8154 17.9653V18.5686C24.8154 19.0051 25.1694 19.3589 25.6057 19.3589H26.209Z" fill="#111827"/>
            <path d="M15.0939 14.2837H15.7691C16.2743 14.2837 16.5343 14.067 16.5343 13.6052V13.1622C16.5596 12.4453 17.0335 12.1167 17.5618 12.1167H18.237C18.7426 12.1167 19.0024 11.9001 19.0024 11.4382V10.5065C19.0024 10.1599 18.8098 9.8999 18.3911 9.8999H17.1128C16.6984 9.8999 16.5221 10.0919 16.5221 10.5243V11.0705C16.5221 11.5632 16.1449 12.025 15.5859 12.0501H14.6446C14.2305 12.0501 14.054 12.242 14.054 12.6744V13.2373C14.054 13.7437 13.6565 14.2192 13.071 14.2192H12.4521C11.961 14.2192 11.705 14.4807 11.705 15.0439V15.7332C11.705 16.4921 11.2183 16.9026 10.6751 16.9026H9.76512C9.25996 16.9026 9 17.1192 9 17.5811V19.0997C9 19.5619 9.25995 19.7782 9.76512 19.7782H10.6751C11.2183 19.7782 11.705 20.0137 11.705 20.7728V21.3142C11.705 21.8774 11.9613 22.1389 12.4521 22.1389H13.071C13.6562 22.1389 14.054 22.6144 14.054 23.1208V23.6907C14.054 24.1232 14.2303 24.315 14.6446 24.315H15.5902L15.5854 24.3203C16.1445 24.345 16.5216 24.8072 16.5216 25.2999V25.846C16.5216 26.2785 16.6978 26.4703 17.1122 26.4703H18.3902C18.8091 26.4703 19.0019 26.2104 19.0019 25.8638V24.932C19.0019 24.4698 18.7419 24.2532 18.2368 24.2532H17.5614C17.0343 24.2532 16.5618 23.9261 16.5343 23.2132V22.7524C16.5343 22.2902 16.2743 22.0739 15.7691 22.0739H15.0939C14.5505 22.0739 14.0637 21.6636 14.0637 20.9046V20.5382C14.0637 19.9749 14.3202 19.7135 14.8112 19.7135H15.4297C16.0149 19.7135 16.4129 19.2379 16.4129 18.7316V17.9479C16.4129 17.4416 16.0151 16.966 15.4297 16.966H14.8112C14.3201 16.966 14.0637 16.7044 14.0637 16.1414V15.3872C14.0637 14.6293 14.5506 14.2837 15.0939 14.2837Z" fill="#111827"/>
            </g>
            <defs>
            <clipPath id="clip0_68_31932">
            <rect width="18" height="18" fill="white" transform="translate(9 9)"/>
            </clipPath>
            </defs>
        </svg>

    `,
  title: `
        Technology that delivers
    `,
  mobileDesc: `
    View all your shipping operations
    from a single dashboard
    in a few clicks.
    
      `,
  DesktopDesc: `

    View all your shipping operations from a single dashboard, book palletized shipments in a few clicks, and integrate your warehouse management systems with customizable EDI and API integrations.

    `,
  mobileImg: `

    <img
        src="/eShipperRedesign/assets/svgFolder/B2B/card-1.svg"
        alt=""
        class="d-block d-xl-none"
        />
    `,

  lottiePlayer: `

    <dotlottie-player src="https://lottie.host/362ae685-8203-4e04-a9df-794631440cda/5KRXllPVjF.json" class="d-none d-xl-block" background="transparent" speed="1" style="width: 300px; height: 300px;" loop></dotlottie-player>


`,
  buttonText: "Learn More",
  buttonClass: "d-none",
};

document.querySelector(".benefit .card-item-1").innerHTML = eShipperCard(card);

card = {
  svg: `
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="18" cy="18" r="18" fill="#F3F4F6"/>
            <g clip-path="url(#clip0_68_31954)">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M13 10.5001C13 10.0398 13.3731 9.66675 13.8333 9.66675H22.1667C22.6269 9.66675 23 10.0398 23 10.5001V25.5001C23 25.9603 22.6269 26.3334 22.1667 26.3334H13.8333C13.3731 26.3334 13 25.9603 13 25.5001V10.5001ZM15.334 20.4446C15.334 19.9946 15.6988 19.6298 16.1488 19.6298H20.2229C20.6729 19.6298 21.0377 19.9946 21.0377 20.4446C21.0377 20.8946 20.6729 21.2594 20.2229 21.2594H16.1488C15.6988 21.2594 15.334 20.8946 15.334 20.4446ZM18.2303 18.6668H17.7284L17.7284 18.6668C17.613 18.6668 17.5198 18.5788 17.5196 18.4697V18.0521L17.3959 18.0402C17.0121 17.9995 16.6507 17.901 16.4074 17.7684C16.3129 17.7184 16.2767 17.6108 16.3198 17.5175L16.5117 17.1144C16.5353 17.0645 16.5798 17.0264 16.634 17.008C16.6563 17.0015 16.6786 16.9975 16.7008 16.9975C16.7356 16.9975 16.769 17.0054 16.7995 17.0211C17.0915 17.1682 17.4835 17.2563 17.8478 17.2563C18.276 17.2563 18.5874 17.0908 18.5874 16.8636C18.5874 16.7166 18.497 16.5393 17.8311 16.3344C17.1096 16.1203 16.3741 15.8077 16.3741 15.1064C16.3741 14.5745 16.7842 14.1582 17.4711 13.9941L17.5753 13.9691V13.5292C17.5753 13.4215 17.6699 13.3335 17.7839 13.3335H18.2775C18.3928 13.3335 18.486 13.4215 18.486 13.5292V13.9245L18.6084 13.9389C18.9017 13.9717 19.1617 14.0401 19.4009 14.1464C19.4509 14.1687 19.4898 14.2081 19.5079 14.258C19.5274 14.3067 19.5246 14.3618 19.501 14.4078L19.3021 14.8057C19.2674 14.8741 19.1937 14.9187 19.1131 14.9187C19.0839 14.9187 19.0548 14.9121 19.0269 14.9003C18.8976 14.8438 18.5945 14.7138 18.1107 14.7138C17.6714 14.7138 17.4754 14.874 17.4754 15.0342C17.4754 15.2129 17.6797 15.3337 18.3193 15.5333C19.0005 15.7435 19.6957 16.06 19.6957 16.8217C19.6957 17.2327 19.3939 17.7855 18.5431 17.9878L18.4389 18.0141V18.4698C18.4389 18.5788 18.3443 18.6668 18.2303 18.6668Z" fill="#111827"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M23.834 12.167H27.1673C27.6276 12.167 28.0007 12.5401 28.0007 13.0003V23.0003C28.0007 23.4606 27.6276 23.8337 27.1673 23.8337H23.834V12.167ZM25.7204 19.5004H26.0326C26.1035 19.5004 26.1623 19.4481 26.1623 19.3834V19.1129L26.2272 19.0972C26.7564 18.9771 26.9441 18.6489 26.9441 18.4048C26.9441 17.9526 26.5117 17.7647 26.0879 17.6399C25.6902 17.5213 25.563 17.4496 25.563 17.3435C25.563 17.2484 25.685 17.1533 25.9582 17.1533C26.2592 17.1533 26.4477 17.2305 26.5281 17.264C26.5454 17.271 26.5636 17.2749 26.5817 17.2749C26.6318 17.2749 26.6777 17.2484 26.6993 17.2079L26.823 16.9716C26.8377 16.9443 26.8394 16.9116 26.8273 16.8827C26.8161 16.853 26.7919 16.8297 26.7607 16.8164C26.612 16.7533 26.4503 16.7127 26.2678 16.6932L26.1917 16.6846V16.4499C26.1917 16.386 26.1337 16.3337 26.0619 16.3337H25.7549C25.684 16.3337 25.6252 16.386 25.6252 16.4499V16.7111L25.5604 16.726C25.1331 16.8234 24.878 17.0706 24.878 17.3864C24.878 17.8028 25.3355 17.9884 25.7843 18.1155C26.1985 18.2372 26.2548 18.3424 26.2548 18.4297C26.2548 18.5647 26.061 18.6629 25.7947 18.6629C25.5681 18.6629 25.3242 18.6106 25.1426 18.5233C25.1236 18.5139 25.1028 18.5092 25.0812 18.5092C25.0674 18.5092 25.0535 18.5116 25.0397 18.5155C25.006 18.5264 24.9783 18.549 24.9636 18.5786L24.8442 18.818C24.8174 18.8734 24.8399 18.9373 24.8987 18.9669C25.05 19.0457 25.2749 19.1042 25.5136 19.1284L25.5906 19.1354V19.3833C25.5906 19.4481 25.6486 19.5004 25.7204 19.5004Z" fill="#111827"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M8 13.0001C8 12.5398 8.3731 12.1667 8.83333 12.1667H12.1667V23.8334H8.83333C8.3731 23.8334 8 23.4603 8 23.0001V13.0001ZM9.88642 19.5002H10.1986C10.2695 19.5002 10.3284 19.4479 10.3284 19.3832V19.1126L10.3932 19.097C10.9224 18.9769 11.1101 18.6487 11.1101 18.4046C11.1101 17.9523 10.6777 17.7644 10.254 17.6396C9.85617 17.5211 9.72903 17.4494 9.72903 17.3433C9.72903 17.2482 9.85098 17.153 10.1243 17.153C10.4252 17.153 10.6137 17.2302 10.6941 17.2638C10.7115 17.2708 10.7296 17.2747 10.7477 17.2747C10.7979 17.2747 10.8437 17.2482 10.8653 17.2076L10.989 16.9713C11.0037 16.944 11.0055 16.9113 10.9933 16.8824C10.9821 16.8528 10.9579 16.8294 10.9267 16.8162C10.778 16.753 10.6163 16.7124 10.4338 16.693L10.3577 16.6844V16.4497C10.3577 16.3857 10.2997 16.3335 10.228 16.3335H9.92095C9.85003 16.3335 9.79121 16.3858 9.79121 16.4497V16.7109L9.72637 16.7257C9.29913 16.8232 9.04403 17.0704 9.04403 17.3862C9.04403 17.8026 9.50152 17.9881 9.95031 18.1153C10.3645 18.2369 10.4208 18.3422 10.4208 18.4295C10.4208 18.5644 10.227 18.6626 9.96071 18.6626C9.73412 18.6626 9.49025 18.6104 9.30864 18.523C9.28964 18.5137 9.26886 18.509 9.24723 18.509C9.23342 18.509 9.21954 18.5114 9.2057 18.5152C9.172 18.5262 9.14429 18.5488 9.12959 18.5784L9.01024 18.8178C8.98341 18.8731 9.00593 18.9371 9.06472 18.9667C9.21606 19.0455 9.44088 19.1039 9.6796 19.1281L9.75657 19.1351V19.3831C9.75666 19.4479 9.81464 19.5002 9.88642 19.5002Z" fill="#111827"/>
            </g>
            <defs>
            <clipPath id="clip0_68_31954">
            <rect width="20" height="20" fill="white" transform="translate(8 8)"/>
            </clipPath>
            </defs>
        </svg>


    `,
  title: `
        Rates that don’t break the bank
    `,
  mobileDesc: `
    Use our competitive carrier rates to ship your products to stores, marketplaces, or vendors. No monthly or annual fees necessary.

    
      `,
  DesktopDesc: `

    Use our competitive carrier rates to ship your products to vendors. No monthly or annual fees necessary.

    `,
  mobileImg: `

    <img
        src="/eShipperRedesign/assets/svgFolder/B2B/card-2.svg"

        alt=""
        class="d-block d-xl-none"
        />
    `,

  lottiePlayer: `


 <dotlottie-player src="https://lottie.host/15deea79-342f-4156-a587-d347b9843911/dLKF7tVeYi.json" class="d-none d-xl-block" background="transparent" speed="1" style="width: 300px; height: 300px; padding-right: 1rem;" loop></dotlottie-player>


`,
  buttonText: "Learn More",
  buttonClass: "d-none",
};

document.querySelector(".benefit .card-item-2").innerHTML = eShipperCard(card);

card = {
  svg: `
       <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="18" cy="18" r="18" fill="#F3F4F6"/>
            <g clip-path="url(#clip0_68_32031)">
            <path d="M26.2994 21.5067C25.5579 23.2501 24.2835 24.714 22.6801 25.6921C22.6777 25.6944 22.6729 25.6968 22.6682 25.6992C22.4313 25.8437 22.1874 25.9764 21.9386 26.0972C21.896 26.1185 21.8533 26.1374 21.8108 26.1564C21.7373 26.192 21.6615 26.2274 21.5833 26.2606C21.5265 26.2842 21.4696 26.308 21.4104 26.3316C21.3489 26.3577 21.2849 26.3813 21.2233 26.4074C21.1569 26.431 21.0929 26.4571 21.0266 26.4809C20.9721 26.4998 20.9152 26.5188 20.8584 26.5377C20.7116 26.5851 20.5646 26.6325 20.4155 26.6727C20.3776 26.6822 20.342 26.694 20.3041 26.7035C20.2306 26.7248 20.1573 26.7414 20.0815 26.758C20.0246 26.7722 19.9678 26.7864 19.9109 26.7983C19.8399 26.8124 19.7665 26.8267 19.6953 26.8408C19.6313 26.8526 19.5675 26.8644 19.5035 26.8764C19.4348 26.8882 19.3685 26.8977 19.2998 26.9072C19.2217 26.919 19.1459 26.9284 19.0677 26.9379C19.0109 26.9451 18.954 26.9521 18.8948 26.9569C18.7645 26.971 18.6343 26.9805 18.5016 26.9876C18.4543 26.99 18.4045 26.9923 18.3548 26.9923C18.2624 26.997 18.1725 26.9994 18.08 26.9994H17.9048C17.8219 26.9994 17.739 26.9971 17.6584 26.9923C17.5944 26.99 17.5329 26.9876 17.4713 26.9852C17.3908 26.9805 17.3125 26.9733 17.232 26.9662C17.1728 26.9615 17.1112 26.9567 17.052 26.9496C17.0448 26.9496 17.0402 26.9496 17.033 26.9473C16.9501 26.6512 16.789 26.3361 16.5759 25.9287C16.4291 25.6421 16.2585 25.3176 16.069 24.9078C15.5432 23.7755 15.536 22.6125 16.0454 21.7194C16.4693 20.9803 17.1823 20.5256 18.0541 20.4403C19.0465 20.3432 19.5914 20.9662 20.2191 21.6863C20.8373 22.397 21.5384 23.2046 22.7441 23.2118H22.7583C23.675 23.2118 24.0776 22.7475 24.4023 22.3756C24.7481 21.9752 25.1058 21.5631 26.2996 21.5063L26.2994 21.5067ZM26.9579 17.0489V17.0371C26.9412 16.8973 26.9248 16.7577 26.9033 16.6178C26.3514 13.0551 23.7032 10.1772 20.2613 9.28671C20.2613 9.28671 20.2566 9.28438 20.2518 9.28438C20.1215 9.25128 19.9913 9.22038 19.8586 9.19195C19.842 9.19195 19.8278 9.18481 19.8112 9.18248C19.6904 9.15638 19.5672 9.1351 19.444 9.11615C19.4179 9.11148 19.392 9.10667 19.3659 9.102C19.2522 9.08539 19.1361 9.07124 19.0201 9.05943C18.9845 9.05476 18.9514 9.04996 18.9159 9.04529C18.8021 9.03581 18.6884 9.02634 18.5747 9.0192C18.5368 9.01686 18.5013 9.01453 18.4634 9.01205C18.3117 9.00491 18.1601 9.00024 18.0085 9.00024C17.8569 9.00024 17.7076 9.00491 17.5585 9.01205C17.5254 9.01205 17.4921 9.01672 17.459 9.0192C17.3407 9.02634 17.2245 9.03334 17.1084 9.04529C17.0777 9.04762 17.0469 9.05243 17.016 9.0571C16.8952 9.06891 16.7768 9.08319 16.6583 9.10214C16.6346 9.10681 16.6086 9.11162 16.5825 9.11395C16.4593 9.13524 16.3384 9.15652 16.2177 9.18028C16.1941 9.18495 16.1727 9.18976 16.1514 9.19443C16.0282 9.22052 15.905 9.24895 15.7842 9.27971C15.7629 9.28438 15.7416 9.29152 15.7202 9.29632C15.5993 9.32709 15.481 9.36032 15.3624 9.39822C15.3388 9.40536 15.3151 9.41237 15.2914 9.41951C15.1777 9.45741 15.0664 9.49531 14.9526 9.53555C14.9266 9.54503 14.8981 9.5545 14.8697 9.56631C14.8128 9.5876 14.756 9.61135 14.6991 9.63264C14.8057 10.0258 15.0047 10.2935 15.3031 10.4451C15.938 10.7719 16.4757 10.7624 16.9494 10.7554C16.992 10.7531 17.037 10.7531 17.0797 10.7531C17.9585 10.7531 18.6431 10.9308 18.9131 12.4468C19.2778 14.5124 20.1614 15.6398 21.964 16.3435C23.5819 16.9759 24.0911 17.5208 24.5861 18.0466C24.7259 18.1959 24.8586 18.3381 25.0172 18.4849C25.2114 18.6626 25.7587 18.8142 26.2489 18.6247C26.6823 18.4589 26.9335 18.0776 26.9927 17.4924C26.9855 17.3431 26.9737 17.1963 26.9571 17.0495L26.9579 17.0489ZM26.5907 19.5077C26.3301 19.6096 26.0436 19.657 25.7593 19.657C25.2311 19.657 24.7123 19.4912 24.376 19.1808C24.1912 19.0103 24.0396 18.8492 23.8952 18.6953C23.4357 18.205 23.0377 17.7809 21.6188 17.2243C19.5225 16.4071 18.402 14.9859 17.9805 12.6125C17.817 11.6887 17.6726 11.691 16.9642 11.703C16.4384 11.7101 15.7183 11.722 14.8703 11.2884C14.5078 11.1012 14.0697 10.7365 13.8327 10.0306C13.4395 10.2391 13.0629 10.4735 12.7076 10.7342C13.5817 11.8025 13.8565 12.4254 13.7428 13.4818C13.6859 13.9792 13.4585 14.5975 13.1957 15.3105C12.7503 16.5233 12.196 18.0298 12.5348 19.0343C12.8238 19.8918 12.6816 21.0998 12.1701 22.1159C11.8527 22.746 11.424 23.2387 10.9313 23.5537C12.1701 25.1289 13.923 26.2825 15.9364 26.7586C15.8796 26.6425 15.8109 26.5122 15.7351 26.3654C15.5907 26.0859 15.4083 25.7353 15.2093 25.3066C14.5531 23.8925 14.558 22.412 15.2234 21.2489C15.7943 20.2516 16.7939 19.612 17.9616 19.4983C19.4469 19.3539 20.2357 20.2634 20.9344 21.0665C21.491 21.706 21.972 22.2603 22.7488 22.2651C23.2344 22.2698 23.3883 22.0969 23.6868 21.7534C24.1321 21.2394 24.7338 20.5476 26.6382 20.5548C26.7543 20.1639 26.8467 19.7636 26.9082 19.3538C26.7945 19.4202 26.6856 19.4722 26.5909 19.5078L26.5907 19.5077ZM11.973 11.3307C10.9024 12.2996 10.0662 13.5218 9.55685 14.9005C9.55452 14.9123 9.54971 14.9241 9.54504 14.936C9.5 15.0592 9.45743 15.1847 9.41719 15.3103C9.41005 15.3364 9.40305 15.3623 9.3959 15.3884C9.36034 15.5021 9.32724 15.6182 9.29648 15.7342C9.287 15.7744 9.27753 15.8171 9.26572 15.8597C9.2421 15.9616 9.216 16.0634 9.19472 16.1676C9.18291 16.2268 9.17343 16.286 9.16162 16.3453C9.14501 16.4329 9.12853 16.523 9.11424 16.613C9.10243 16.6888 9.09296 16.7669 9.08348 16.8451C9.07401 16.9185 9.06453 16.9919 9.05505 17.0677C9.04558 17.1648 9.03844 17.2643 9.03143 17.3637C9.0291 17.4183 9.02196 17.4751 9.01962 17.532C9.01248 17.6883 9.00781 17.8447 9.00781 18.001C9.00781 18.1905 9.01495 18.38 9.02676 18.5695C9.03143 18.624 9.03624 18.6809 9.04091 18.7377C9.05038 18.8775 9.067 19.0149 9.08348 19.1547C9.09062 19.2092 9.09529 19.2636 9.10477 19.3181C9.13086 19.4933 9.16162 19.6663 9.19719 19.8392C9.209 19.9008 9.22561 19.9624 9.23976 20.0239C9.26585 20.14 9.29428 20.2537 9.32504 20.3674C9.34633 20.4455 9.36761 20.5237 9.39137 20.5995C9.42447 20.7084 9.46003 20.8151 9.4956 20.9217C9.53584 21.0377 9.57855 21.1514 9.62112 21.2651C9.66136 21.3645 9.69926 21.4618 9.74197 21.5589C9.77754 21.6418 9.81544 21.7246 9.85568 21.8076C9.89358 21.8929 9.93615 21.9758 9.97653 22.0586C10.0239 22.151 10.0713 22.2433 10.121 22.3334C10.1897 22.4566 10.2583 22.5774 10.3318 22.6981C10.3508 22.7242 10.3674 22.7527 10.3863 22.7786C10.7487 22.5607 11.0732 22.1841 11.3243 21.6891C11.7199 20.9002 11.8478 19.9552 11.637 19.3369C11.1916 18.0151 11.8099 16.3357 12.3073 14.9831C12.5394 14.3554 12.7573 13.7609 12.8 13.3771C12.8782 12.6594 12.7337 12.2591 11.9733 11.3304L11.973 11.3307Z" fill="#111827"/>
            </g>
            <defs>
            <clipPath id="clip0_68_32031">
            <rect width="18" height="18" fill="white" transform="translate(9 9)"/>
            </clipPath>
            </defs>
            </svg>


    `,
  title: `
        The entire world, within arm’s reach
    `,
  mobileDesc: `
    Grow your business beyond borders with cross-border and international shipping solutions.
      `,
  DesktopDesc: `

    Grow your business beyond borders with cross-border and international shipping solutions. Optimize your supply chain with our streamlined importing 
and customs clearance for overseas products.

    `,
  mobileImg: `

    <img
        src="/eShipperRedesign/assets/svgFolder/B2B/card-3.svg"
        alt=""
        class="d-block d-xl-none"
        />
    `,

  lottiePlayer: `
 <dotlottie-player src="https://lottie.host/bb082ad5-d060-4fe7-9122-1d4d277c4025/bguWcxfQFc.json" class="d-none d-xl-block" background="transparent" speed="1" style="width: 260px; height: 260px;" loop></dotlottie-player>


`,
  buttonText: "Learn More",
  buttonClass: "d-none",
};

document.querySelector(".benefit .card-item-3").innerHTML = eShipperCard(card);

card = {
  svg: `
    
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="18" cy="18" r="18" fill="#F3F4F6"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.6225 14.623C16.9967 12.2491 18.0958 9.49894 17.0775 8.48058C16.0586 7.46093 13.3071 8.55998 10.9338 10.9342C8.55994 13.3084 7.46089 16.0591 8.48007 17.0774C9.49838 18.0961 12.2494 16.997 14.6229 14.623L14.6225 14.623Z" fill="#111827"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M25.0658 25.0652C27.4399 22.6913 28.5389 19.9407 27.5204 18.9224C26.5016 17.9034 23.7521 19.0023 21.3776 21.3766C19.0036 23.7506 17.9047 26.5006 18.9228 27.519C19.9419 28.5383 22.6927 27.4401 25.0657 25.0653L25.0658 25.0652Z" fill="#111827"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.623 21.3772C12.2496 19.0026 9.4985 17.9036 8.48014 18.9226C7.46079 19.9409 8.56003 22.6921 10.9337 25.0654C13.3079 27.4403 16.0591 28.5385 17.0778 27.5195C18.0972 26.5005 16.9971 23.7512 14.6229 21.3771L14.623 21.3772Z" fill="#111827"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M25.0641 10.9345C22.6909 8.56026 19.94 7.46086 18.9208 8.48055C17.9029 9.49887 19.0016 12.2492 21.3756 14.6229C23.7503 16.9973 26.5005 18.0964 27.5184 17.0777C28.5374 16.059 27.4387 13.3085 25.0638 10.9349L25.0641 10.9345Z" fill="#111827"/>
        <path d="M18.0012 14C18.0012 16.2094 16.2098 18.0001 14.001 18.0001C16.2104 18.0001 18.0012 19.791 18.0012 22C18.0012 19.7911 19.792 18.0001 22.001 18.0001C19.792 18 18.0012 16.2092 18.0012 14Z" fill="#111827"/>
    </svg>


    `,
  title: `
        The power of choice
    `,
  mobileDesc: `
    With 20+ years in the business, we work with established courier, postal, freight and more.

      `,
  DesktopDesc: `

    With 20+ years in the business, we work with established courier, postal, LTL and freight carriers, as well as non-traditional carriers to ensure you receive the best deal, regardless of who you choose to ship with.

    `,
  mobileImg: `

    <img
        src="/eShipperRedesign/assets/svgFolder/B2B/card-4.svg"
        alt=""
        class="d-block d-xl-none"
        />
    `,

  lottiePlayer: `
 <dotlottie-player src="https://lottie.host/196f7d71-86db-469e-a0fb-ae80c538cfc8/6Gx5vObiTD.json" class="d-none d-xl-block" background="transparent" speed="1" style="width: 280px; height: 280px;" loop ></dotlottie-player>

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
       Courier & Postal
    `,
  Desc: `
    Ship your products within Canada, USA, and internationally with rates up to 70% off and fully tracked services for your peace of mind.
    
      `,
  Img: `

   <img
        src="https://live-eshipper-media-wprocket.s3.ca-central-1.amazonaws.com/wp-content/uploads/2024/04/09163916/0001.png"
        alt=""
      />
    `,
};

document.querySelector(".solution .card-item-1").innerHTML =
  eShipperCard2(card);

card = {
  title: `
       Sameday & Next Day
    `,
  Desc: `
In a pinch? Don’t let low inventory get in the way of sales. Get your products shipped to retailers within hours.    
      `,
  Img: `
   <img
        src="https://live-eshipper-media-wprocket.s3.ca-central-1.amazonaws.com/wp-content/uploads/2024/04/09163937/0002.png"
        alt=""
      />
    `,
};

document.querySelector(".solution .card-item-2").innerHTML =
  eShipperCard2(card);

card = {
  title: `
       Freight Solutions
    `,
  Desc: `
    Ship globally via ground, air, rail, or ocean freight. Access specialized logistics solutions including flatbeds, drayage, and climate-controlled transportation.
    
      `,
  Img: `

   <img
        src="https://live-eshipper-media-wprocket.s3.ca-central-1.amazonaws.com/wp-content/uploads/2024/04/09163930/0003.png"
        alt=""
      />
    `,
};

document.querySelector(".solution .card-item-3").innerHTML =
  eShipperCard2(card);

card = {
  title: `
       FBA & Marketplace Delivery
    `,
  Desc: `
    Ship your products to Amazon Fulfillment and Walmart Distribution Centres. Replenish your stock and automate shipping from your facility or ours, directly to the fulfillment centre of your choice.
    
      `,
  Img: `

   <img
        src="https://live-eshipper-media-wprocket.s3.ca-central-1.amazonaws.com/wp-content/uploads/2024/04/09163951/0004.png"
        alt=""
      />
    `,
};

document.querySelector(".solution .card-item-4").innerHTML =
  eShipperCard2(card);

card = {
  title: `
       Retail and Vendor Delivery  
    `,
  Desc: `
    Manage your imports, sortation and distribution to storefronts and malls across the USA and Canada, so you can deliver accurately and on time, every time.
    
      `,
  Img: `

   <img
        src="https://live-eshipper-media-wprocket.s3.ca-central-1.amazonaws.com/wp-content/uploads/2024/04/09163944/0005.png"
        alt=""
      />
    `,
};

document.querySelector(".solution .card-item-5").innerHTML =
  eShipperCard2(card);

card = {
  title: `
      Warehousing
    `,
  Desc: `
 Store and warehouse inventory, pick and pack, palletize, and distribute your products. Enjoy lower shipping costs and decreased transit times with warehousing and distribution hubs across North America.
    
      `,
  Img: `

   <img
        src="https://live-eshipper-media-wprocket.s3.ca-central-1.amazonaws.com/wp-content/uploads/2024/04/10191526/1000005184-1.png"
        alt=""
      />
    `,
};

document.querySelector(".solution .card-item-6").innerHTML =
  eShipperCard2(card);

/**
 *
 * BUTTON FOR MORE SERVICES SECTION
 */

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
 * TOGGLE ESHIPPER_HEADER_INSTANT QUOTE FORM
 */

document.querySelector("#canada").addEventListener("click", function (e) {
  // Call your function here
  eshipperHeaderInstantQuote(e);
});
document
  .querySelector("#worldwide")
  .addEventListener("click", eshipperHeaderInstantQuote);

/**
 *
 * PLAY ANIMATION ON HOVER ON CARD
 */
play_lottie();

/**
 *
 * TYPEWRITER ANIMAITON
 */

let typed = new Typed(".auto-type", {
  strings: ["terms", "time", "budget"],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true,
});

/**
 *
 * LOOP ANIMATION 3 TIMES
 */

const target = document.querySelector(".CTA");
const lottieArrow = document.querySelector("#lottie-arrow");

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Check if the element is in the viewport
        lottieArrow.play();
      }
    });
  },
  {
    root: null, // null means it uses the viewport
    rootMargin: "0px",
    threshold: 1.0, // 1.0 means 100% of the target must be visible
  }
);

observer.observe(target);
