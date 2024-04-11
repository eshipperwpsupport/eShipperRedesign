import buildButton from "../Button/button.js";

function eShipperCard({
  svg,
  title,
  mobileDesc,
  DesktopDesc,
  mobileImg,
  lottiePlayer,
  buttonText,
  buttonClass,
}) {
  let pagination = `
    
     <div class="d-flex eshipper-card card flex-row">
        <div class="flex-item">
            <div class="d-flex flex-column card-wrapper">
                ${svg}

                <div class="d-flex card-content flex-column">
                    <h5 class="medium">${title}</h5>

                    <div>
                        <span class="d-block d-xl-none">
                            ${mobileDesc}
                        </span>
                        <p class="d-none d-xl-block">
                            ${DesktopDesc}
                        </p>
                    </div>
                </div>
            </div>

            ${buildButton({
              text: buttonText,
              className: buttonClass,
            })}
        </div>
        <div class="flex-item d-flex align-items-center justify-content-center">
            <div class="d-block d-xl-none">
            
            ${mobileImg}

            </div>
            <div class="d-none d-xl-block">
            ${lottiePlayer}
            </div>

           
        </div>
    </div>

    `;

  return pagination;
}

export default eShipperCard;
