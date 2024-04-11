function quoteCard(title, img, id, active) {
  let icon = `
  
      <img
          src="${img}"
          alt=""
        />
  
  `;

  if (id === 2) {
    icon = `
      
          <img
          src="https://live-eshipper-media-wprocket.s3.ca-central-1.amazonaws.com/wp-content/uploads/2023/10/23185658/eshipper-rivo.png"
          class="d-block d-lg-none"
          alt=""
          />

          <img
          src="${img}"
          alt=""
          class="d-none d-lg-block"
          />
    
    `;
  }

  let card = `
  





    <button class="quote-item ${active}" id="quote-item-${id}">
    <div class="special-delivery-container">

     <div class="special-delivery mobile">
                      <div>
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            cx="7"
                            cy="7.00378"
                            r="6.75"
                            fill="url(#paint0_linear_482_7854)"
                            stroke="#FFE6B5"
                            stroke-width="0.5"
                          />
                          <circle
                            cx="7.00047"
                            cy="7.00388"
                            r="5.72727"
                            fill="url(#paint1_linear_482_7854)"
                          />
                          <path
                            d="M6.57249 5.32588C6.69105 4.85166 7.36498 4.85166 7.48354 5.32588C7.57243 5.68143 7.61687 5.85921 7.70944 6.00387C7.79131 6.13182 7.89998 6.24049 8.02793 6.32236C8.17259 6.41493 8.35037 6.45937 8.70592 6.54826C9.18014 6.66681 9.18013 7.34075 8.70592 7.45931C8.35037 7.5482 8.17259 7.59264 8.02793 7.6852C7.89998 7.76708 7.79131 7.87575 7.70944 8.0037C7.61687 8.14836 7.57243 8.32614 7.48354 8.68169C7.36499 9.1559 6.69105 9.1559 6.57249 8.68169C6.4836 8.32614 6.43916 8.14836 6.3466 8.0037C6.26472 7.87575 6.15605 7.76708 6.0281 7.6852C5.88344 7.59264 5.70566 7.5482 5.35011 7.45931C4.87589 7.34075 4.8759 6.66681 5.35011 6.54826C5.70566 6.45937 5.88344 6.41493 6.0281 6.32236C6.15605 6.24049 6.26472 6.13182 6.34659 6.00387C6.43916 5.85921 6.4836 5.68143 6.57249 5.32588Z"
                            fill="white"
                          />
                          <path
                            d="M6.57249 5.32588C6.69105 4.85166 7.36498 4.85166 7.48354 5.32588C7.57243 5.68143 7.61687 5.85921 7.70944 6.00387C7.79131 6.13182 7.89998 6.24049 8.02793 6.32236C8.17259 6.41493 8.35037 6.45937 8.70592 6.54826C9.18014 6.66681 9.18013 7.34075 8.70592 7.45931C8.35037 7.5482 8.17259 7.59264 8.02793 7.6852C7.89998 7.76708 7.79131 7.87575 7.70944 8.0037C7.61687 8.14836 7.57243 8.32614 7.48354 8.68169C7.36499 9.1559 6.69105 9.1559 6.57249 8.68169C6.4836 8.32614 6.43916 8.14836 6.3466 8.0037C6.26472 7.87575 6.15605 7.76708 6.0281 7.6852C5.88344 7.59264 5.70566 7.5482 5.35011 7.45931C4.87589 7.34075 4.8759 6.66681 5.35011 6.54826C5.70566 6.45937 5.88344 6.41493 6.0281 6.32236C6.15605 6.24049 6.26472 6.13182 6.34659 6.00387C6.43916 5.85921 6.4836 5.68143 6.57249 5.32588Z"
                            fill="white"
                          />
                          <defs>
                            <linearGradient
                              id="paint0_linear_482_7854"
                              x1="7"
                              y1="0.00378418"
                              x2="7"
                              y2="14.0038"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="#FFBF40" />
                              <stop offset="1" stop-color="#FFEBC2" />
                            </linearGradient>
                            <linearGradient
                              id="paint1_linear_482_7854"
                              x1="10.5005"
                              y1="12.0948"
                              x2="5.40956"
                              y2="-2.54157"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="#FFBF40" />
                              <stop offset="1" stop-color="#FFEBC2" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>

                      <span>Special</span>
                    </div>
                    </div>
                <div class="quote-item-container active">
                  <div class="d-flex quote-img-container">
                    <div class="d-none">
                      <div class="quote-outside-circle">
                        <div class="quote-inside-circle"></div>
                      </div>
                    </div>
                    <div>
                      ${icon}
                    </div>
                  </div>
                  <div class="time-price-container">
                    <div class="special-delivery">
                      <div>
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            cx="7"
                            cy="7.00378"
                            r="6.75"
                            fill="url(#paint0_linear_482_7854)"
                            stroke="#FFE6B5"
                            stroke-width="0.5"
                          />
                          <circle
                            cx="7.00047"
                            cy="7.00388"
                            r="5.72727"
                            fill="url(#paint1_linear_482_7854)"
                          />
                          <path
                            d="M6.57249 5.32588C6.69105 4.85166 7.36498 4.85166 7.48354 5.32588C7.57243 5.68143 7.61687 5.85921 7.70944 6.00387C7.79131 6.13182 7.89998 6.24049 8.02793 6.32236C8.17259 6.41493 8.35037 6.45937 8.70592 6.54826C9.18014 6.66681 9.18013 7.34075 8.70592 7.45931C8.35037 7.5482 8.17259 7.59264 8.02793 7.6852C7.89998 7.76708 7.79131 7.87575 7.70944 8.0037C7.61687 8.14836 7.57243 8.32614 7.48354 8.68169C7.36499 9.1559 6.69105 9.1559 6.57249 8.68169C6.4836 8.32614 6.43916 8.14836 6.3466 8.0037C6.26472 7.87575 6.15605 7.76708 6.0281 7.6852C5.88344 7.59264 5.70566 7.5482 5.35011 7.45931C4.87589 7.34075 4.8759 6.66681 5.35011 6.54826C5.70566 6.45937 5.88344 6.41493 6.0281 6.32236C6.15605 6.24049 6.26472 6.13182 6.34659 6.00387C6.43916 5.85921 6.4836 5.68143 6.57249 5.32588Z"
                            fill="white"
                          />
                          <path
                            d="M6.57249 5.32588C6.69105 4.85166 7.36498 4.85166 7.48354 5.32588C7.57243 5.68143 7.61687 5.85921 7.70944 6.00387C7.79131 6.13182 7.89998 6.24049 8.02793 6.32236C8.17259 6.41493 8.35037 6.45937 8.70592 6.54826C9.18014 6.66681 9.18013 7.34075 8.70592 7.45931C8.35037 7.5482 8.17259 7.59264 8.02793 7.6852C7.89998 7.76708 7.79131 7.87575 7.70944 8.0037C7.61687 8.14836 7.57243 8.32614 7.48354 8.68169C7.36499 9.1559 6.69105 9.1559 6.57249 8.68169C6.4836 8.32614 6.43916 8.14836 6.3466 8.0037C6.26472 7.87575 6.15605 7.76708 6.0281 7.6852C5.88344 7.59264 5.70566 7.5482 5.35011 7.45931C4.87589 7.34075 4.8759 6.66681 5.35011 6.54826C5.70566 6.45937 5.88344 6.41493 6.0281 6.32236C6.15605 6.24049 6.26472 6.13182 6.34659 6.00387C6.43916 5.85921 6.4836 5.68143 6.57249 5.32588Z"
                            fill="white"
                          />
                          <defs>
                            <linearGradient
                              id="paint0_linear_482_7854"
                              x1="7"
                              y1="0.00378418"
                              x2="7"
                              y2="14.0038"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="#FFBF40" />
                              <stop offset="1" stop-color="#FFEBC2" />
                            </linearGradient>
                            <linearGradient
                              id="paint1_linear_482_7854"
                              x1="10.5005"
                              y1="12.0948"
                              x2="5.40956"
                              y2="-2.54157"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="#FFBF40" />
                              <stop offset="1" stop-color="#FFEBC2" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>

                      <span>Special</span>
                    </div>
                    <div class="time-price-wrapper">
                      <div class="estimated-time">
                        <h6>${title}</h6>
                        <span>Est. 2 Days</span>
                      </div>
                      <div class="price">$8.54</div>
                    </div>
                  </div>
                </div>
                <div class="fuel-tax-container w-100 d-none">
                  <div class="placeholder-div"></div>
                  <div class="flex-item d-flex fuel-tax-wrapper flex-column">
                    <div class="d-flex">
                      <h7>Fuel Surcharge:</h7>
                      <span>$2.74</span>
                    </div>
                    <div class="d-flex">
                      <h7>Estimated Tax:</h7>
                      <span>$2.74</span>
                    </div>
                  </div>
                </div>
              </button>
`;

  return card;
}

export default quoteCard;
