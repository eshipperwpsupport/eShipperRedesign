// import buildButton from "../Button/button.js";

function eShipperCard2({ title, Desc, Img }) {
  let pagination = `
    
     <div class="d-flex eshipper-card-2 card flex-column">
        <div>
            ${Img}
        </div>
        <div>
            <h5>${title}</h5>
            <p>
            ${Desc}
            </p>
        </div>
    </div>

    `;

  return pagination;
}

export default eShipperCard2;
