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
 * BUTTON FOR CARDS SECTION
 */

document.querySelector(".benefit-btn").innerHTML = buildButton({
  text: "Book a Meeting",
  className: "button-black-bg text-white rounded-pill",
});

/**
 *
 * CREATE BUTTON SECTION
 */

// CTA SECTION
createButton(
  ".CTA .include-btn",
  "Book a Meeting",
  "btn button-teal-txt-white-bg rounded-pill"
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
<g clip-path="url(#clip0_111_5335)">
<path d="M19.204 13.8678C19.9863 14.0701 20.7538 14.3318 21.5001 14.6509C22.4947 14.221 23.5284 13.8996 24.5852 13.6915C23.7737 11.9627 22.6884 11 21.5001 11C20.3118 11 19.2265 11.9627 18.415 13.6915C18.6806 13.7367 18.9284 13.7993 19.204 13.8678Z" fill="#111827"/>
<path d="M16.7823 26.6508C16.5545 25.8404 16.3845 25.0133 16.2735 24.1763C15.6384 23.6541 15.0399 23.0842 14.483 22.4712C14.3054 22.2876 14.113 22.0527 13.9419 21.844C12.9307 23.4474 12.6827 24.922 13.272 25.9998C13.8067 26.9761 14.9498 27.488 16.5117 27.488C16.6792 27.488 16.8531 27.4812 17.0301 27.4711C16.9388 27.2005 16.8576 26.933 16.7823 26.6508Z" fill="#111827"/>
<path d="M23.7962 28.1324C23.0139 27.9302 22.2464 27.6685 21.5001 27.3494C20.5055 27.7792 19.4718 28.1006 18.415 28.3087C19.2265 30.0376 20.3118 31.0003 21.5001 31.0003C22.6884 31.0003 23.7737 30.0376 24.5852 28.3087C24.3215 28.2594 24.0706 28.2034 23.7962 28.1324Z" fill="#111827"/>
<path d="M28.9231 22.0067C28.2563 22.7995 27.521 23.5259 26.7269 24.1762C26.58 25.2972 26.3266 26.3999 25.9701 27.4677C27.7993 27.5931 29.1357 27.0812 29.7282 25.9998C30.3175 24.9218 30.0696 23.4474 29.0583 21.844C29.0133 21.8981 28.9682 21.9524 28.9231 22.0067L28.9231 22.0067Z" fill="#111827"/>
<path d="M26.2179 15.3491C26.4457 16.1595 26.6157 16.9866 26.7268 17.8236C27.3618 18.3458 27.9603 18.9157 28.5173 19.5288C28.6948 19.7123 28.8873 19.9472 29.0583 20.1559C30.0695 18.5526 30.3175 17.0779 29.7282 16.0001C29.1324 14.9187 27.7991 14.4068 25.9701 14.5323C26.0646 14.8011 26.1415 15.0681 26.2179 15.3491L26.2179 15.3491Z" fill="#111827"/>
<path d="M14.0773 19.9934C14.7441 19.2005 15.4794 18.4742 16.2735 17.8239C16.4221 16.7035 16.6745 15.6012 17.027 14.5324C15.2011 14.4104 13.8647 14.9189 13.2721 16.0002C12.6827 17.0783 12.9307 18.5527 13.9419 20.1561C13.9871 20.102 14.0322 20.0477 14.0773 19.9934L14.0773 19.9934Z" fill="#111827"/>
<path d="M27.8153 21.7728C28.5838 20.9216 28.6047 21.0894 27.8153 20.2271V20.2272C27.2006 19.5522 26.534 18.9321 25.8219 18.3729C25.684 17.1014 25.4019 15.8517 24.9815 14.6509C23.7836 14.8697 22.615 15.2385 21.5003 15.7491C20.512 15.2996 19.4825 14.9577 18.4281 14.7288C17.7971 14.4787 17.9469 15.0548 17.7098 15.6271H17.7099C17.4602 16.5252 17.2826 17.4437 17.1786 18.3729C16.2001 19.1335 15.3123 20.0155 14.5347 21C15.3123 21.9845 16.2001 22.8666 17.1786 23.6271C17.2826 24.5564 17.4602 25.4748 17.7099 26.373C18.0196 27.4871 17.8895 27.4278 18.9788 27.1424V27.1423C19.8409 26.9178 20.6842 26.6197 21.5003 26.251C22.615 26.7616 23.7837 27.1302 24.9815 27.3492C25.402 26.1483 25.6841 24.8987 25.822 23.6272C26.534 23.068 27.2006 22.4478 27.8153 21.7728ZM23.8446 21.3594L21.8415 23.4679L21.8416 23.4678C21.7512 23.5633 21.6284 23.6169 21.5003 23.6169C21.3721 23.6169 21.2493 23.5633 21.1589 23.4678L19.1558 21.3592L19.1559 21.3594C19.0647 21.2644 19.0133 21.1351 19.0133 21C19.0133 20.865 19.0647 20.7357 19.1559 20.6407L21.159 18.5321L21.1589 18.5323C21.2491 18.4363 21.3719 18.3822 21.5003 18.3822C21.6286 18.3822 21.7514 18.4363 21.8416 18.5323L23.8448 20.6408L23.8446 20.6407C23.9358 20.7357 23.9872 20.865 23.9872 21C23.9872 21.1351 23.9358 21.2644 23.8446 21.3594Z" fill="#111827"/>
<path d="M20.1798 21L21.5002 19.6101L22.8206 21L21.5002 22.3899L20.1798 21Z" fill="#111827"/>
</g>
<defs>
<clipPath id="clip0_111_5335">
<rect width="19" height="20" fill="white" transform="translate(12 11)"/>
</clipPath>
</defs>
</svg>


    `,
  title: `
        Fulfilling orders, everywhere you sell
    `,
  mobileDesc: `
 Whether you’re selling on your own eCommerce store, a marketplace like Amazon, or juggling multiple online sales channels, connect them all to our shipping platform
    
      `,
  DesktopDesc: `

Whether you’re selling on your own eCommerce store, a marketplace like Amazon, or juggling multiple online sales channels, connect them all to our shipping platform, and ship all your orders from one place. Plus, receive just one invoice for all your shipping.
    `,
  mobileImg: `

    <img
        src="/eShipperRedesign/assets/svgFolder/Ecommerce/card-1.svg"
        alt=""
        class="d-block d-xl-none"
        />
    `,

  lottiePlayer: `

  <img
        src="/eShipperRedesign/assets/svgFolder/Ecommerce/card-1.svg"
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M15 12C15 11.4477 15.4477 11 16 11H26C26.5523 11 27 11.4477 27 12V30C27 30.5523 26.5523 31 26 31H16C15.4477 31 15 30.5523 15 30V12ZM17.8008 23.9333C17.8008 23.3933 18.2385 22.9556 18.7786 22.9556H23.6674C24.2075 22.9556 24.6452 23.3933 24.6452 23.9333C24.6452 24.4734 24.2075 24.9111 23.6674 24.9111H18.7786C18.2385 24.9111 17.8008 24.4734 17.8008 23.9333ZM21.2772 21.8H20.6748L20.6748 21.8C20.5363 21.8 20.4245 21.6944 20.4243 21.5634V21.0623L20.2759 21.0481C19.8153 20.9992 19.3816 20.8811 19.0896 20.7219C18.9762 20.662 18.9328 20.5328 18.9845 20.4209L19.2148 19.9371C19.2431 19.8772 19.2966 19.8315 19.3616 19.8094C19.3883 19.8016 19.4151 19.7968 19.4417 19.7968C19.4835 19.7968 19.5235 19.8063 19.5602 19.8252C19.9106 20.0017 20.381 20.1073 20.8182 20.1073C21.332 20.1073 21.7057 19.9088 21.7057 19.6362C21.7057 19.4597 21.5972 19.247 20.7981 19.0011C19.9323 18.7442 19.0497 18.3691 19.0497 17.5275C19.0497 16.8893 19.5419 16.3897 20.3661 16.1927L20.4912 16.1627V15.6348C20.4912 15.5057 20.6046 15.4 20.7414 15.4H21.3337C21.4722 15.4 21.584 15.5056 21.584 15.6348V16.1092L21.7309 16.1265C22.0829 16.1659 22.3949 16.2479 22.6818 16.3755C22.7419 16.4023 22.7886 16.4496 22.8103 16.5095C22.8337 16.5678 22.8303 16.634 22.802 16.6892L22.5633 17.1667C22.5216 17.2487 22.4332 17.3023 22.3365 17.3023C22.3014 17.3023 22.2665 17.2943 22.2331 17.2801C22.0779 17.2124 21.7142 17.0564 21.1337 17.0564C20.6065 17.0564 20.3712 17.2486 20.3712 17.4409C20.3712 17.6553 20.6165 17.8002 21.3839 18.0398C22.2014 18.292 23.0356 18.6718 23.0356 19.5858C23.0356 20.0791 22.6735 20.7425 21.6525 20.9852L21.5274 21.0168V21.5636C21.5274 21.6944 21.414 21.8 21.2772 21.8Z" fill="#111827"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M28 14H32C32.5523 14 33 14.4477 33 15V27C33 27.5523 32.5523 28 32 28H28V14ZM30.2641 22.8H30.6387C30.7238 22.8 30.7944 22.7373 30.7944 22.6596V22.3349L30.8722 22.3162C31.5073 22.1721 31.7326 21.7782 31.7326 21.4853C31.7326 20.9426 31.2137 20.7171 30.7051 20.5674C30.2278 20.4251 30.0752 20.339 30.0752 20.2118C30.0752 20.0976 30.2216 19.9834 30.5495 19.9834C30.9106 19.9834 31.1368 20.0761 31.2333 20.1163C31.2541 20.1247 31.2759 20.1294 31.2977 20.1294C31.3578 20.1294 31.4128 20.0976 31.4388 20.0489L31.5872 19.7654C31.6048 19.7327 31.6069 19.6934 31.5924 19.6587C31.5789 19.6232 31.5498 19.5951 31.5125 19.5792C31.334 19.5034 31.1399 19.4547 30.921 19.4313L30.8296 19.4211V19.1394C30.8296 19.0627 30.7601 19 30.6739 19H30.3055C30.2204 19 30.1498 19.0627 30.1498 19.1394V19.4529L30.072 19.4707C29.5593 19.5876 29.2532 19.8842 29.2532 20.2632C29.2532 20.7629 29.8022 20.9856 30.3408 21.1381C30.8378 21.2841 30.9053 21.4104 30.9053 21.5152C30.9053 21.6771 30.6728 21.795 30.3532 21.795C30.0813 21.795 29.7887 21.7322 29.5708 21.6274C29.548 21.6162 29.523 21.6106 29.4971 21.6106C29.4805 21.6106 29.4638 21.6134 29.4472 21.6181C29.4068 21.6312 29.3735 21.6583 29.3559 21.6939L29.2127 21.9811C29.1805 22.0476 29.2075 22.1243 29.2781 22.1598C29.4597 22.2544 29.7294 22.3245 30.0159 22.3535L30.1083 22.362V22.6595C30.1084 22.7373 30.178 22.8 30.2641 22.8Z" fill="#111827"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9 15C9 14.4477 9.44772 14 10 14H14V28H10C9.44772 28 9 27.5523 9 27V15ZM11.2641 22.8H11.6387C11.7238 22.8 11.7944 22.7373 11.7944 22.6596V22.3349L11.8722 22.3162C12.5073 22.1721 12.7326 21.7782 12.7326 21.4853C12.7326 20.9426 12.2137 20.7171 11.7051 20.5674C11.2278 20.4251 11.0752 20.339 11.0752 20.2118C11.0752 20.0976 11.2216 19.9834 11.5495 19.9834C11.9106 19.9834 12.1368 20.0761 12.2333 20.1163C12.2541 20.1247 12.2759 20.1294 12.2977 20.1294C12.3578 20.1294 12.4128 20.0976 12.4388 20.0489L12.5872 19.7654C12.6048 19.7327 12.6069 19.6934 12.5924 19.6587C12.5789 19.6232 12.5498 19.5951 12.5125 19.5792C12.334 19.5034 12.1399 19.4547 11.921 19.4313L11.8296 19.4211V19.1394C11.8296 19.0627 11.7601 19 11.6739 19H11.3055C11.2204 19 11.1498 19.0627 11.1498 19.1394V19.4529L11.072 19.4707C10.5593 19.5876 10.2532 19.8842 10.2532 20.2632C10.2532 20.7629 10.8022 20.9856 11.3408 21.1381C11.8378 21.2841 11.9053 21.4104 11.9053 21.5152C11.9053 21.6771 11.6728 21.795 11.3532 21.795C11.0813 21.795 10.7887 21.7322 10.5708 21.6274C10.548 21.6162 10.523 21.6106 10.4971 21.6106C10.4805 21.6106 10.4638 21.6134 10.4472 21.6181C10.4068 21.6312 10.3735 21.6583 10.3559 21.6939L10.2127 21.9811C10.1805 22.0476 10.2075 22.1243 10.2781 22.1598C10.4597 22.2544 10.7294 22.3245 11.0159 22.3535L11.1083 22.362V22.6595C11.1084 22.7373 11.178 22.8 11.2641 22.8Z" fill="#111827"/>
</svg>




    `,
  title: `
        Flexible and competitive shipping rates
    `,
  mobileDesc: `
    Get competitive rates on shipping, up to 70% off. Choose to display flat, live, or free shipping rates at checkout, and enjoy hassle-free returns.

    
      `,
  DesktopDesc: `

    Get competitive rates on shipping, up to 70% off. Choose to display flat, live, or free shipping rates at checkout, and enjoy hassle-free returns.

    `,
  mobileImg: `

    <img
        src="/eShipperRedesign/assets/svgFolder/Ecommerce/card-2.svg"

        alt=""
        class="d-block d-xl-none"
        />
    `,

  lottiePlayer: `

<img
        src="/eShipperRedesign/assets/svgFolder/Ecommerce/card-2.svg"
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
<path d="M25.2842 10H16.7158C13.0104 10 10 13.0105 10 16.7158V25.2842C10 28.9896 13.0105 32 16.7158 32H25.2842C28.9896 32 32 28.9895 32 25.2842V16.7158C32 13.0104 28.9895 10 25.2842 10ZM25.7012 19.4717L20.7684 24.4045C20.5136 24.6593 20.1663 24.7981 19.8189 24.7981C19.4715 24.7981 19.1242 24.6593 18.8694 24.4045L16.2989 21.834C15.7662 21.3013 15.7662 20.4677 16.2989 19.935C16.8316 19.4023 17.6652 19.4023 18.1978 19.935L19.8189 21.5561L23.802 17.573C24.3346 17.0403 25.1682 17.0403 25.7009 17.573C26.2336 18.1055 26.2337 18.9623 25.7012 19.4717Z" fill="#111827"/>
</svg>




    `,
  title: `
        The power of choice
    `,
  mobileDesc: `
    With over 100+ carriers on our platform, you can choose who you want to ship with at any time. We’re constantly adding new and non-traditional carriers to our platform.
      `,
  DesktopDesc: `

    With over 100+ carriers on our platform, you can choose who you want to ship with at any time. We’re constantly adding new and non-traditional carriers to our platform.

    `,
  mobileImg: `

    <img
        src="/eShipperRedesign/assets/svgFolder/Ecommerce/card-3.svg"

        alt=""
        class="d-block d-xl-none"
        />
    `,

  lottiePlayer: `
<img
        src="/eShipperRedesign/assets/svgFolder/Ecommerce/card-3.svg"

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
<g clip-path="url(#clip0_111_5926)">
<path d="M16.1016 26.2247L16.1087 26.2318C15.175 27.2902 14.58 28.6534 14.4911 30.1534C14.4791 30.3694 14.2991 30.5397 14.0832 30.5397L9.53045 30.5399C9.41527 30.5399 9.31676 30.4967 9.23528 30.415C9.15599 30.331 9.11534 30.2303 9.12011 30.1175C9.22338 27.1583 10.4114 24.4751 12.293 22.4492L16.1016 26.2247ZM20.616 24.0239V20.8079C20.2993 20.7143 20.0305 20.503 19.8576 20.2055L19.056 18.8135C16.6655 19.2072 14.5151 20.3135 12.8305 21.9071L16.6393 25.6847L16.6464 25.6919C17.7121 24.7366 19.092 24.127 20.616 24.0383L20.616 24.0239ZM29.7074 22.4496L25.8987 26.2247L25.8891 26.2318C26.8228 27.2902 27.4179 28.6534 27.5067 30.1534C27.5188 30.3694 27.6988 30.5397 27.9147 30.5397H32.4698C32.585 30.5397 32.6859 30.4965 32.765 30.4149C32.8442 30.3308 32.8825 30.2301 32.8801 30.1173C32.777 27.1559 31.5914 24.4751 29.7074 22.4496ZM22.9443 18.8135L22.1403 20.2055C21.9699 20.503 21.6987 20.7143 21.3843 20.8079V24.036C21.5571 24.0456 21.7274 24.0624 21.8979 24.0864L23.2443 22.4088C23.5563 22.02 24.0868 21.8928 24.5427 22.0944C24.9986 22.2984 25.2579 22.7809 25.1762 23.2729L24.8474 25.2841C25.0226 25.4113 25.1905 25.5481 25.3515 25.692L25.3586 25.6849L29.1674 21.9072C27.4852 20.3111 25.3349 19.2072 22.9443 18.8135ZM14.8851 17.0207V10.1493C14.8851 9.84682 15.1323 9.59961 15.4348 9.59961H26.5657C26.8706 9.59961 27.1154 9.8468 27.1154 10.1493V17.0207C27.1154 17.3232 26.8706 17.5704 26.5657 17.5704H23.0928C22.8912 17.5704 22.7183 17.6713 22.6176 17.8464L21.4776 19.8215C21.3767 19.9968 21.204 20.0975 21.0024 20.0975C20.8008 20.0975 20.628 19.9966 20.5273 19.8215L19.3873 17.8464C19.2864 17.6711 19.1137 17.5704 18.9121 17.5704H15.4344C15.1321 17.5704 14.8851 17.3232 14.8851 17.0207ZM23.9981 15.0168C23.9981 14.8105 23.8326 14.6447 23.626 14.6447H18.3751C18.1711 14.6447 18.003 14.8103 18.003 15.0168C18.003 15.2232 18.1711 15.3889 18.3751 15.3889H23.6265C23.8326 15.3863 23.9981 15.2208 23.9981 15.0168ZM16.6495 12.6216C16.6495 12.828 16.815 12.9937 17.0216 12.9937H24.9847C25.1887 12.9937 25.3567 12.8281 25.3567 12.6216C25.3567 12.4152 25.1887 12.2495 24.9847 12.2495H17.0187C16.8148 12.2495 16.6495 12.4152 16.6495 12.6216ZM24.4209 23.1455L23.2137 30.5063C22.9833 31.9222 21.3321 32.8006 20.0265 32.22C18.721 31.6392 18.2722 29.8224 19.1722 28.704L23.8402 22.8863C23.9338 22.7688 24.0922 22.7303 24.229 22.7928C24.3705 22.8526 24.4472 22.9966 24.4209 23.1455ZM22.0425 30.0385C22.0425 29.4648 21.5745 28.9968 21.0008 28.9968C20.4272 28.9968 19.9591 29.4648 19.9591 30.0385C19.9591 30.6121 20.4272 31.0802 21.0008 31.0802C21.5745 31.0776 22.0425 30.612 22.0425 30.0385Z" fill="#111827"/>
</g>
<defs>
<clipPath id="clip0_111_5926">
<rect width="24" height="24" fill="white" transform="translate(9 9)"/>
</clipPath>
</defs>
</svg>




    `,
  title: `
        Setting high performance standards since 2005
    `,
  mobileDesc: `
    Our platform doesn’t just ship, it streamlines. From auto and batch shipping capabilities to powerful insights on your custom dashboard.

      `,
  DesktopDesc: `

    Our platform doesn’t just ship, it streamlines. From auto and batch shipping capabilities to powerful insights on your custom dashboard, take your shipping process to the next level of efficiency. Plus, use our 4D boxing algorithm to calculate the best box size for your shipment to save the environment – and your wallet.
    `,
  mobileImg: `

    <img
        src="/eShipperRedesign/assets/svgFolder/Ecommerce/card-4.svg"

        alt=""
        class="d-block d-xl-none"
        />
    `,

  lottiePlayer: `


   <img
        src="/eShipperRedesign/assets/svgFolder/Ecommerce/card-4.svg"

        alt=""
        class="d-none d-xl-block"
        />

`,
  buttonText: "Learn More",
  buttonClass: "d-none",
};

document.querySelector(".benefit .card-item-4").innerHTML = eShipperCard(card);

card = {
  svg: `
    
<svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="21" cy="21" r="21" fill="#F3F4F6"/>
<path d="M20.9842 19.3995C19.7057 19.4132 18.4847 19.9256 17.5885 20.8246C16.6925 21.7235 16.1945 22.9359 16.2037 24.196C16.2054 24.7228 16.293 25.2461 16.4631 25.7457L14.0806 27.6207C13.9102 27.7549 13.804 27.9529 13.7875 28.1672C13.771 28.3818 13.8459 28.5933 13.9939 28.7512C14.1421 28.909 14.35 28.9992 14.5682 29H20.9843C22.7027 28.968 24.277 28.0462 25.1268 26.5741C25.9768 25.1021 25.9768 23.2974 25.1268 21.8255C24.277 20.3534 22.7027 19.4315 20.9843 19.3995L20.9842 19.3995ZM22.6433 24.7384C22.3976 24.7367 22.1768 24.5899 22.0835 24.3659C21.9902 24.1418 22.0427 23.8845 22.2164 23.7133C22.3901 23.5421 22.6512 23.4904 22.8787 23.5824C23.1059 23.6743 23.2551 23.8918 23.2566 24.134C23.2563 24.4675 22.9817 24.7381 22.6433 24.7384ZM19.4982 24.7384C19.2525 24.7367 19.0317 24.5899 18.9384 24.3659C18.8451 24.1418 18.8975 23.8845 19.0713 23.7133C19.245 23.5421 19.5061 23.4904 19.7336 23.5824C19.9608 23.6743 20.11 23.8918 20.1115 24.134C20.1111 24.4675 19.8366 24.7381 19.4982 24.7384ZM32 19.8799V23.8239C32 24.6518 31.552 25.4166 30.8246 25.8305C30.0973 26.2442 29.201 26.2442 28.4737 25.8305C27.7463 25.4166 27.2981 24.6518 27.2981 23.8239V20.2675C27.3115 18.5001 26.6425 16.7938 25.4268 15.4944C24.2952 14.2649 22.6923 13.5593 21.0079 13.5497C17.5247 13.5497 14.7019 16.5637 14.7019 20.2676V23.8242V23.824C14.7019 24.6518 14.2539 25.4166 13.5265 25.8306C12.7992 26.2443 11.9029 26.2443 11.1756 25.8306C10.4482 25.4167 10 24.6518 10 23.824V19.8801C10.0004 19.2657 10.2482 18.6766 10.689 18.2423C11.1299 17.808 11.7277 17.5637 12.351 17.5633C12.7447 17.5607 13.1324 17.6594 13.4755 17.8499C13.9147 16.2004 14.8875 14.7368 16.2469 13.6812C17.6061 12.6254 19.2778 12.0352 21.0079 12C23.131 12.0087 25.1532 12.894 26.5826 14.4407C27.4925 15.4081 28.1579 16.5736 28.5247 17.8421C29.254 17.454 30.1366 17.4721 30.849 17.8898C31.5612 18.3073 31.9985 19.0632 32 19.8801V19.8799Z" fill="#111827"/>
</svg>




    `,
  title: `
        Our undivided attention, every step of the way
    `,
  mobileDesc: `
    Whether you're looking for help with integrating your sales channels, or need us to help you ship larger orders, you’ll receive one-on-one support for life, free of charge.

      `,
  DesktopDesc: `

    Whether you're looking for help with integrating your sales channels, or need us to help you ship larger orders, you’ll receive one-on-one support for life, free of charge.
    `,
  mobileImg: `

    <img
        src="/eShipperRedesign/assets/svgFolder/Ecommerce/card-5.svg"

        alt=""
        class="d-block d-xl-none"
        />
    `,

  lottiePlayer: `


<img
        src="/eShipperRedesign/assets/svgFolder/Ecommerce/card-5.svg"

        alt=""
        class="d-none d-xl-block"
        />
    

`,
  buttonText: "Learn More",
  buttonClass: "d-none",
};

document.querySelector(".benefit .card-item-5").innerHTML = eShipperCard(card);

card = {
  svg: `
    
<svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="21" cy="21" r="21" fill="#F3F4F6"/>
<g clip-path="url(#clip0_111_6237)">
<path d="M25.0915 13.6731C25.0519 13.5511 24.9787 13.4427 24.8807 13.3599C24.7825 13.2772 24.6633 13.2236 24.5362 13.2052L22.5187 12.9121L21.6167 11.0843C21.4878 10.8661 21.2534 10.7323 21 10.7323C20.7467 10.7323 20.5123 10.8661 20.3834 11.0843L19.4814 12.9121L17.4639 13.2052C17.2937 13.2299 17.1387 13.3173 17.03 13.4506C16.921 13.5837 16.866 13.7529 16.8759 13.9246C16.8856 14.0963 16.9593 14.2581 17.0825 14.3781L18.5424 15.8013L18.1977 17.8107C18.1686 17.9801 18.2041 18.1543 18.2972 18.2988C18.3902 18.4435 18.534 18.5479 18.7004 18.5917C18.8666 18.6355 19.0431 18.6154 19.1954 18.5353L21.0001 17.5867L22.8048 18.5353V18.5355C22.957 18.6155 23.1336 18.6357 23.2999 18.5919C23.4662 18.5481 23.6101 18.4435 23.7031 18.299C23.796 18.1543 23.8315 17.9801 23.8024 17.8107L23.4577 15.8011L24.9176 14.3779C25.0094 14.2885 25.0744 14.1748 25.1051 14.0503C25.1358 13.9257 25.1311 13.7952 25.0915 13.6731Z" fill="#111827"/>
<path d="M15.5284 15.5H14.0963C13.8507 15.5 13.6236 15.3689 13.501 15.1562C13.3781 14.9436 13.3781 14.6814 13.501 14.4688C13.6237 14.2561 13.8508 14.125 14.0963 14.125H15.5284C15.7739 14.125 16.001 14.2561 16.1237 14.4688C16.2466 14.6814 16.2466 14.9436 16.1237 15.1562C16.001 15.3689 15.7739 15.5 15.5284 15.5Z" fill="#111827"/>
<path d="M16.6223 12.2736C16.4762 12.2736 16.3338 12.2269 16.2162 12.1403L15.0614 11.2924C14.9113 11.1856 14.8104 11.0233 14.7812 10.8415C14.752 10.6598 14.797 10.4738 14.9059 10.3254C15.0149 10.177 15.1789 10.0785 15.361 10.052C15.5431 10.0255 15.7284 10.0731 15.8751 10.1842L17.0301 11.0319C17.187 11.147 17.2877 11.3231 17.3072 11.5168C17.3268 11.7103 17.2635 11.903 17.1331 12.0474C17.0025 12.1915 16.8171 12.2738 16.6225 12.2736L16.6223 12.2736Z" fill="#111827"/>
<path d="M15.4691 19.6885C15.2745 19.6887 15.0891 19.6066 14.9585 19.4623C14.8279 19.3179 14.7646 19.1252 14.7842 18.9315C14.8039 18.738 14.9046 18.5619 15.0615 18.4468L16.2165 17.5991C16.4145 17.4538 16.675 17.4251 16.8999 17.5239C17.1249 17.6226 17.2799 17.8339 17.3068 18.0781C17.3337 18.3222 17.2282 18.5622 17.0302 18.7076L15.8752 19.5552C15.7576 19.6418 15.6152 19.6886 15.469 19.6885L15.4691 19.6885Z" fill="#111827"/>
<path d="M27.9034 15.5H26.4713C26.2257 15.5 25.9986 15.3689 25.876 15.1562C25.7531 14.9436 25.7531 14.6814 25.876 14.4688C25.9987 14.2561 26.2258 14.125 26.4713 14.125H27.9034C28.1489 14.125 28.376 14.2561 28.4987 14.4688C28.6216 14.6814 28.6216 14.9436 28.4987 15.1562C28.376 15.3689 28.1489 15.5 27.9034 15.5Z" fill="#111827"/>
<path d="M25.3777 12.2736C25.1831 12.2738 24.9976 12.1915 24.8671 12.0473C24.7366 11.903 24.6734 11.7103 24.693 11.5168C24.7126 11.3231 24.8133 11.147 24.9701 11.0319L26.1251 10.1842C26.2718 10.0719 26.4574 10.0236 26.6404 10.0496C26.8231 10.0758 26.9878 10.1745 27.0971 10.3234C27.2063 10.4722 27.2511 10.6589 27.2214 10.8412C27.1916 11.0235 27.0897 11.1861 26.9386 11.2924L25.7837 12.14C25.666 12.2268 25.5237 12.2736 25.3777 12.2736Z" fill="#111827"/>
<path d="M26.5309 19.6886C26.3847 19.6888 26.2424 19.6419 26.1247 19.5553L24.9698 18.7077C24.7717 18.5623 24.6663 18.3223 24.6932 18.0783C24.72 17.8341 24.8751 17.6227 25.1 17.5241C25.325 17.4252 25.5855 17.4539 25.7835 17.5993L26.9385 18.4469C27.0954 18.562 27.1961 18.7381 27.2157 18.9316C27.2354 19.1253 27.1721 19.318 27.0415 19.4624C26.9109 19.6067 26.7255 19.6888 26.5309 19.6886L26.5309 19.6886Z" fill="#111827"/>
<path d="M18.5027 24.186L20.4546 23.3837C20.7483 23.2672 21.0756 23.2671 21.3695 23.3834L23.3309 24.1861L24.8496 23.564L22.7465 19.9496C22.5184 19.528 22.1455 19.2028 21.6964 19.0348C21.2476 18.8666 20.7528 18.8666 20.304 19.0348C19.855 19.2028 19.482 19.528 19.2539 19.9496L17.1184 23.6197L18.5027 24.186Z" fill="#111827"/>
<path d="M29.1568 30.9666L25.5895 24.8363L23.7885 25.5738C23.4949 25.6901 23.168 25.6901 22.8743 25.5738L20.9135 24.7711L18.9616 25.5734C18.6677 25.6901 18.3404 25.6901 18.0466 25.5734L16.3784 24.8911L12.8434 30.9665C12.762 31.1065 12.7324 31.2706 12.7603 31.4301C12.788 31.5895 12.8712 31.7342 12.9951 31.8384C13.119 31.9427 13.2756 31.9997 13.4376 31.9997H28.5626C28.7245 31.9997 28.8811 31.9427 29.005 31.8384C29.1289 31.7342 29.2121 31.5895 29.2398 31.4301C29.2677 31.2706 29.2381 31.1065 29.1567 30.9665L29.1568 30.9666Z" fill="#111827"/>
<path d="M31.8969 31.6769C31.771 31.8785 31.5499 32.0007 31.3124 32H30.5012C30.7048 31.4295 30.6471 30.7984 30.3431 30.2744L25.4893 21.935C25.7346 21.7485 26.0338 21.6471 26.3418 21.6461H26.3487C26.6409 21.6527 26.9253 21.743 27.1678 21.9063C27.4103 22.0694 27.6008 22.299 27.7168 22.5674L31.9311 31.0031C32.0338 31.2191 32.0209 31.4722 31.8969 31.6768L31.8969 31.6769Z" fill="#111827"/>
<path d="M11.6568 30.2743C11.3529 30.7983 11.2951 31.4294 11.4987 31.9999H10.6875C10.45 32.0006 10.229 31.8784 10.1031 31.6768C9.97901 31.4722 9.96609 31.2191 10.0688 31.0031L14.29 22.5606C14.4051 22.2935 14.5948 22.0654 14.8362 21.9033C15.0775 21.7411 15.3605 21.6518 15.6512 21.6461H15.6581C15.9661 21.6471 16.2654 21.7485 16.5106 21.935L11.6568 30.2743Z" fill="#111827"/>
</g>
<defs>
<clipPath id="clip0_111_6237">
<rect width="22" height="22" fill="white" transform="translate(10 10)"/>
</clipPath>
</defs>
</svg>




    `,
  title: `
        Your success is our success
    `,
  mobileDesc: `
    Every business receives a dedicated account manager obsessed with their success.

      `,
  DesktopDesc: `

    Every business receives a dedicated account manager obsessed with their success. When you join eShipper, you get a free consultation to understand your business goals, and ongoing support from your account manager who will help optimize your supply chain and shipping routes.  
    `,
  mobileImg: `

    <img
        src="/eShipperRedesign/assets/svgFolder/Ecommerce/card-6.svg"

        alt=""
        class="d-block d-xl-none"
        />
    `,

  lottiePlayer: `


<img
        src="/eShipperRedesign/assets/svgFolder/Ecommerce/card-6.svg"

        alt=""
        class="d-none d-xl-block"
        />

`,
  buttonText: "Learn More",
  buttonClass: "d-none",
};

document.querySelector(".benefit .card-item-6").innerHTML = eShipperCard(card);

/**
 *
 * CARDS FOR SOLUTION CARDS SECTION
 */

card = {
  title: `
       Courier Shipping
    `,
  Desc: `
    Ship your products within Canada, USA, and internationally with rates up to 70% off and fully tracked services for your peace of mind.
    
      `,
  Img: `

   <img
        src="https://live-eshipper-media-wprocket.s3.ca-central-1.amazonaws.com/wp-content/uploads/2024/04/16154442/Frame-1597879237.png"
        alt=""
      />
    `,
};

document.querySelector(".solution .card-item-1").innerHTML =
  eShipperCard2(card);

card = {
  title: `
       Sameday & Next Day Shipping
    `,
  Desc: `
Give your customers the option to place last-minute orders with sameday and next-day shipping, fully tracked, at affordable rates.
      `,
  Img: `
   <img
        src="https://live-eshipper-media-wprocket.s3.ca-central-1.amazonaws.com/wp-content/uploads/2024/04/16154446/Group-1000006097.png"
        alt=""
      />
    `,
};

document.querySelector(".solution .card-item-2").innerHTML =
  eShipperCard2(card);

card = {
  title: `
       Postal Shipping
    `,
  Desc: `
    Get better rates on postal services without having to leave your front door. Our postal partner network services 100% of Canada, including P.O. boxes and remote locations.
    
      `,
  Img: `

   <img
        src="https://live-eshipper-media-wprocket.s3.ca-central-1.amazonaws.com/wp-content/uploads/2024/04/16154449/Frame-1000004893-2.png"
        alt=""
      />
    `,
};

document.querySelector(".solution .card-item-3").innerHTML =
  eShipperCard2(card);

card = {
  title: `
       FBA Fulfillment
    `,
  Desc: `
    Deliver to Marketplace Distribution and Fulfillment centers including Amazon, Walmart and more. Access Amazon-compliant prep services and pre-approved carriers to make delivery to Amazon Fulfillment centers a breeze.
    
      `,
  Img: `

   <img
        src="https://live-eshipper-media-wprocket.s3.ca-central-1.amazonaws.com/wp-content/uploads/2024/04/16154452/Frame-1597879238.png"
        alt=""
      />
    `,
};

document.querySelector(".solution .card-item-4").innerHTML =
  eShipperCard2(card);

card = {
  title: `
       Cross-Border Solution 
    `,
  Desc: `
    Ship across the border confidently. Get access to free pickups, customs clearance support, consultations on product regulations including FDA and section 321, education on duties and taxes, and final mile delivery to your customers south of the border.
    
      `,
  Img: `

   <img
        src="https://live-eshipper-media-wprocket.s3.ca-central-1.amazonaws.com/wp-content/uploads/2024/04/16154455/Frame-1597879239.png"
        alt=""
      />
    `,
};

document.querySelector(".solution .card-item-5").innerHTML =
  eShipperCard2(card);

card = {
  title: `
      LTL Solutions
    `,
  Desc: `
 Easily ship pallets, barrels, crates and more when you require less than a truckload, directly from our platform. 
    
      `,
  Img: `

   <img
        src="https://live-eshipper-media-wprocket.s3.ca-central-1.amazonaws.com/wp-content/uploads/2024/04/16154458/Frame-1000005023-2.png"
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
// loop_arrow();
