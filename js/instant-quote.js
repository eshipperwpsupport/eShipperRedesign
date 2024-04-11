// In your main JavaScript file for each page
import pagination from "../Quote/pagination/pagination.js";
import location from "../Quote/location/location-details.js";
import input from "../Quote/dimension/input.js";
import quoteCard from "../Quote/quote-card/quote-card.js";
import {
  getreceiverlocation,
  updateFreightClass,
  eshipperQuote,
} from "../Quote/quoteScript.js";

let state = {
  form: ["first-form", "second-form", "third-form"],
  currentForm: 0,
  getAnotherQuote: false,

  formInfo: {
    package_quantity: "",
    package_type: "Package",

    SenderCountry: "",
    SenderCity: "",
    SenderProvince: "",
    SenderPostalCode: "",
    tailgate_sender: "false",
    residential_sender: "false",

    ReceiverCountry: "",
    ReceiverCity: "",
    ReceiverProvince: "",
    ReceiverPostalCode: "",
    residential_receiver: "false",
    tailgate_receiver: "false",
  },

  shipmentPrices: "",
};

// air: 9.12;
// airTotal: 13.31;
// air_fuel: 2.65;
// air_taxes: 1.54;
// air_transitDays: "1";
// ground: 8.94;
// groundTotal: 13.05;
// ground_fuel: 2.6;
// ground_taxes: 1.51;
// ground_transitDays: "2";
// smartepost: null;
// smartepostTotal: null;

document.addEventListener("DOMContentLoaded", (event) => {
  // Load pagination

  document.querySelector("#pagination-section-1").innerHTML = pagination(
    1,
    "Package"
  );
  document.querySelector("#pagination-section-2").innerHTML = pagination(
    2,
    "Details"
  );
  document.querySelector("#pagination-section-3").innerHTML = pagination(
    3,
    "Quote"
  );

  // Load location details

  let svg = `
  
                <svg
                    width="38"
                    height="38"
                    viewBox="0 0 38 38"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="19" cy="19.0038" r="19" fill="#F3F4F6" />
                    <g clip-path="url(#clip0_455_8314)">
                      <path
                        d="M11.8445 17.9537C11.3484 17.7608 11.1003 17.6643 11.0279 17.5253C10.9651 17.4048 10.9651 17.2613 11.0277 17.1407C11.1 17.0016 11.3479 16.9049 11.8438 16.7113L25.9169 11.2194C26.3646 11.0447 26.5884 10.9574 26.7314 11.0051C26.8556 11.0466 26.9531 11.1441 26.9946 11.2683C27.0424 11.4113 26.955 11.6352 26.7803 12.0828L21.2884 26.1559C21.0949 26.6518 20.9981 26.8998 20.859 26.972C20.7384 27.0347 20.5949 27.0346 20.4744 26.9718C20.3354 26.8994 20.2389 26.6513 20.046 26.1552L17.8559 20.5235C17.8167 20.4228 17.7972 20.3725 17.7669 20.3301C17.7401 20.2925 17.7072 20.2596 17.6697 20.2328C17.6273 20.2026 17.5769 20.183 17.4762 20.1438L11.8445 17.9537Z"
                        stroke="#111827"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_455_8314">
                        <rect
                          width="20"
                          height="20"
                          fill="white"
                          transform="translate(9 9)"
                        />
                      </clipPath>
                    </defs>
                  </svg>

  `;

  document.querySelector(".sender-wrapper").innerHTML = location(svg, "sender");

  svg = `
  
    <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="19" cy="19.0038" r="19" fill="#F3F4F6"/>
    <g clip-path="url(#clip0_455_8328)">
    <path d="M16.8421 10.9495C19.6222 10.2071 22.7115 10.9264 24.8926 13.1075C28.1469 16.3619 28.1469 21.6382 24.8926 24.8926C21.6382 28.147 16.3618 28.147 13.1075 24.8926C10.9264 22.7115 10.2071 19.6222 10.9495 16.8421M21.5001 16.5001V21.5001M21.5001 21.5001H16.5001M21.5001 21.5001L13.1666 13.1667" stroke="#111827" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </g>
    <defs>
    <clipPath id="clip0_455_8328">
    <rect width="20" height="20" fill="white" transform="translate(9 9)"/>
    </clipPath>
    </defs>
    </svg>


  `;

  document.querySelector(".receiver-wrapper").innerHTML = location(
    svg,
    "receiver"
  );

  /* ===================================== */
  /*            API CALL FOR POSTAL CODE
  /* ===================================== */

  document
    .querySelector("#sender_zipcode")
    .addEventListener("change", async (event) => {
      try {
        let location = await getreceiverlocation({
          postalCode: event.currentTarget.value,
          country: document.querySelector("#sender_country").value,
        });

        document.querySelector("#sender_city").value = location.city;
        state.formInfo.SenderCity = location.city;
        state.formInfo.SenderCountry =
          document.querySelector("#sender_country").value;
        state.formInfo.SenderProvince = location.state;
        state.formInfo.SenderPostalCode = event.target.value;

        console.log(state.formInfo);
      } catch (error) {
        // Handle any errors that occur during the getreceiverlocation call
        console.error("Error fetching location data:", error);
        // You can also update the UI to inform the user that an error occurred
      }
    });
  document
    .querySelector("#receiver_zipcode")
    .addEventListener("change", async (event) => {
      try {
        let location = await getreceiverlocation({
          postalCode: event.currentTarget.value,
          country: document.querySelector("#receiver_country").value,
        });

        document.querySelector("#receiver_city").value = location.city;
        state.formInfo.ReceiverCity = location.city;
        state.formInfo.ReceiverCountry =
          document.querySelector("#receiver_country").value;
        state.formInfo.ReceiverProvince = location.state;
        state.formInfo.ReceiverPostalCode = event.target.value;

        console.log(state.formInfo);
      } catch (error) {
        // Handle any errors that occur during the getreceiverlocation call
        console.error("Error fetching location data:", error);
        // You can also update the UI to inform the user that an error occurred
      }
    });

  /* ===================================== */
  /*            UPDATE FREIGHT CLASS
  /* ===================================== */

  function freightClass(event) {
    try {
      let num = event.currentTarget.id;
      num = parseInt(num.slice(-1), 10);
      const freightClass = updateFreightClass({
        length: document.querySelector(`#length${num}`).value,
        width: document.querySelector(`#width${num}`).value,
        height: document.querySelector(`#height${num}`).value,
        weight: document.querySelector(`#weight${num}`).value,
      });

      document.querySelector(`#${event.target.id}`).value = freightClass;
      state.formInfo[`freight-class${num}`] = freightClass;

      console.log(state.formInfo);
    } catch (error) {
      // Handle any errors that occur during the getreceiverlocation call
      console.error("Error fetching location data:", error);
      // You can also update the UI to inform the user that an error occurred
    }
  }

  /* ===================================== */
  /*            UPDATE INPUT
  /* ===================================== */

  function updateInput(event) {
    try {
      const id = event.target.id;
      state.formInfo[`${id}`] = event.target.value;
      state.formInfo.package_quantity =
        document.querySelector("#pkg_num").value;
      console.log(state.formInfo);
    } catch (error) {
      // Handle any errors that occur during the getreceiverlocation call
      console.error("Error fetching location data:", error);
      // You can also update the UI to inform the user that an error occurred
    }
  }

  /* ===================================== */
  /*            CREATE DIMENSION INPUTS
  /* ===================================== */

  function createDimensionStructure({ num, active, packageType }) {
    if (packageType === "Envelope") {
      document.querySelector(".dimension-wrapper").classList.add("d-none");
      document
        .querySelector(".dimension-quatity-container")
        .classList.remove("pak");

      return;
    }
    if (packageType === "Pak") {
      document.querySelector(".dimension-wrapper").classList.remove("d-none");

      document
        .querySelector(".dimension-quatity-container")
        .classList.add("pak");
      return;
    }
    document.querySelector(".dimension-wrapper").classList.remove("d-none");
    document
      .querySelector(".dimension-quatity-container")
      .classList.remove("pak");

    let codeChildren = "";

    for (let i = 1; i <= num; i++) {
      // Use the iterator i to create unique container classes and IDs as needed
      let containerCode = `
        <div class="dimension-container-${i} ${active}">
          <div class="d-flex">
            <div class="dimension-length dimension-item"></div>
            <div class="dimension-width dimension-item"></div>
            <div class="dimension-height dimension-item"></div>
            <div class="dimension-weight dimension-item"></div>
          </div>
          ${
            packageType === "Pallet"
              ? '<div class="dimension-freightClass dimension-item"></div>'
              : ""
          }
        </div>
      `;
      // Append the container code to codeChildren
      codeChildren += containerCode;
    }

    document.querySelector(".dimension-container").innerHTML = codeChildren;

    for (let i = 1; i <= num; i++) {
      document.querySelector(
        `.dimension-container-${i} .dimension-length`
      ).innerHTML = input({
        num: i,
        dimension_form: true,
        placeholder: "Length",
        label: "Length",
        id: "length",
        type: "number",
      });

      document
        .querySelector(`#length${i}`)
        .addEventListener("change", updateInput);

      document.querySelector(
        `.dimension-container-${i} .dimension-width`
      ).innerHTML = input({
        num: i,
        dimension_form: true,
        placeholder: "Width",
        label: "Width",
        id: "width",
        type: "number",
      });

      document
        .querySelector(`#width${i}`)
        .addEventListener("change", updateInput);

      document.querySelector(
        `.dimension-container-${i} .dimension-height`
      ).innerHTML = input({
        num: i,
        dimension_form: true,
        placeholder: "Height",
        label: "Height",
        id: "height",
        type: "number",
      });

      document
        .querySelector(`#height${i}`)
        .addEventListener("change", updateInput);

      document.querySelector(
        `.dimension-container-${i} .dimension-weight`
      ).innerHTML = input({
        num: i,
        dimension_form: true,
        placeholder: "Weight",
        label: "Weight",
        id: "weight",
        type: "number",
      });

      document
        .querySelector(`#weight${i}`)
        .addEventListener("change", updateInput);

      if (packageType === "Pallet") {
        document.querySelector(
          `.dimension-container-${i} .dimension-freightClass`
        ).innerHTML = input({
          num: i,
          dimension_form: false,
          placeholder: "Freight Class",
          label: "Freight Class",
          id: "freightClass",
          type: "number",
        });

        document
          .querySelector(`#freightClass${i}`)
          .addEventListener("focus", freightClass);
      }
    }
  }

  createDimensionStructure({ num: 1, active: "", packageType: "" });

  /* ===================================== */
  /*            CONTACT INFORMATION
  /* ===================================== */
  document.querySelector(".f_name").innerHTML = input({
    num: 1,
    dimension_form: false,
    placeholder: "ex. John",
    label: "First Name",
    id: "f_name",
  });
  document.querySelector(".l_name").innerHTML = input({
    num: 1,
    dimension_form: false,
    placeholder: "ex. John",
    label: "Last Name",
    id: "l_name",
  });
  document.querySelector(".company").innerHTML = input({
    num: 1,
    dimension_form: false,
    placeholder: "ex. XYZ Company Inc",
    label: "Company",
    id: "company",
  });
  document.querySelector(".phone_number").innerHTML = input({
    num: 1,
    dimension_form: false,
    placeholder: "ex. 123-456-7890",
    label: "Phone Number",
    id: "phone_number",
    type: "tel",
  });
  document.querySelector(".email").innerHTML = input({
    num: 1,
    dimension_form: false,
    placeholder: "ex. john@xyz.com",
    label: "Email",
    id: "email",
    type: "email",
  });

  // QUOTE CARD

  let img =
    "https://live-eshipper-media-wprocket.s3.ca-central-1.amazonaws.com/wp-content/uploads/2024/01/18172809/eshipper.png";

  document.querySelector(".exclusive").innerHTML = quoteCard(
    "Member Exclusive",
    img,
    1,
    "active"
  );

  //

  img =
    "https://live-eshipper-media-wprocket.s3.ca-central-1.amazonaws.com/wp-content/uploads/2024/01/18224819/eshipper-ground-services.png";

  document.querySelector(".ground").innerHTML = quoteCard("Ground", img, 2);
  img =
    "https://live-eshipper-media-wprocket.s3.ca-central-1.amazonaws.com/wp-content/uploads/2023/10/23185655/eshipper-air-shipping.png";

  document.querySelector(".air").innerHTML = quoteCard("Air", img, 3);

  //

  /* ===================================== */
  /*      SELECT PACKAGE BUTTON
  /* ===================================== */

  document
    .querySelectorAll(".package-type-container button")
    .forEach((button) => {
      button.addEventListener("click", (event) => {
        // First, remove the 'active' class from any button that has it
        const activeButton = document.querySelector(
          ".package-type-container button.active"
        );
        if (activeButton) {
          activeButton.classList.remove("active");
        }

        // Then, add the 'active' class to the clicked button
        event.currentTarget.classList.add("active");

        // Update package type
        state.formInfo.package_type =
          event.currentTarget.getAttribute("data-type");

        createDimensionStructure({
          num: 1,
          active: "",
          packageType: event.currentTarget.getAttribute("data-type"),
        });
      });
    });

  /* ===================================== */
  /*      TOGGLE FUEL AND TAX
  /* ===================================== */

  document.querySelector(".toggle-icon").addEventListener("click", (event) => {
    event.currentTarget.classList.toggle("active");

    if (event.currentTarget.classList.contains("active")) {
      document.querySelectorAll(".fuel-tax-container").forEach((ele) => {
        ele.classList.remove("d-none");
      });

      document.querySelectorAll(".quote-item-container").forEach((ele) => {
        ele.classList.remove("active");
      });

      document.querySelector(".quote-container").classList.add("active");

      document.querySelector(
        "#quote-item-1 .price"
      ).innerHTML = `$${state.shipmentPrices.air}`;

      document.querySelector(
        "#quote-item-2 .price"
      ).innerHTML = `$${state.shipmentPrices.ground}`;

      document.querySelector(
        "#quote-item-3 .price"
      ).innerHTML = `$${state.shipmentPrices.air}`;
    } else {
      document.querySelectorAll(".fuel-tax-container").forEach((ele) => {
        ele.classList.add("d-none");
      });
      document.querySelectorAll(".quote-item-container").forEach((ele) => {
        ele.classList.add("active");
      });
      document.querySelector(".quote-container").classList.remove("active");

      document.querySelector(
        "#quote-item-1 .price"
      ).innerHTML = `$${state.shipmentPrices.airTotal}`;

      document.querySelector(
        "#quote-item-2 .price"
      ).innerHTML = `$${state.shipmentPrices.groundTotal}`;

      document.querySelector(
        "#quote-item-3 .price"
      ).innerHTML = `$${state.shipmentPrices.airTotal}`;
    }
  });

  /* ===================================== */
  /*                PAGINATION FUNCTIONS
  /* ===================================== */

  function paginationComplete(id) {
    document.querySelector(id).classList.add("complete");
    document.querySelector(id).classList.remove("incomplete");
  }
  function paginationIncomplete(id) {
    document.querySelector(id).classList.remove("complete");
    document.querySelector(id).classList.add("incomplete");
  }

  /* ===================================== */
  /*                MOVE FORM FORWARD
  /* ===================================== */

  document
    .querySelector(".next-form")
    .addEventListener("click", async (event) => {
      // IF getting another quote hide second form
      if (state.getAnotherQuote) {
        state.currentForm = 2;
        document.querySelector(`#first-form`).classList.add("d-none");
        document.querySelector(`.form-advance`).classList.add("d-none");
        document.querySelector(`#third-form`).classList.remove("d-none");

        paginationComplete("#pagination-section-1");
        paginationComplete("#pagination-section-3");

        return;
      }

      /* ============ MOve Pagination ================ */

      if (state.currentForm === 0) {
        paginationComplete("#pagination-section-1");
        paginationIncomplete(`#pagination-section-2`);
      }

      if (state.currentForm === 1) {
        if (!verifyInfo("#f_name1")) {
          document.querySelector(".f_name .form-error").classList.add("d-flex");
          return;
        }
        if (!verifyInfo("#l_name1")) {
          document
            .querySelector(".f_name .form-error")
            .classList.remove("d-flex");
          document.querySelector(".l_name .form-error").classList.add("d-flex");
          return;
        }
        if (!verifyInfo("#company1")) {
          document
            .querySelector(".l_name .form-error")
            .classList.remove("d-flex");
          document
            .querySelector(".company .form-error")
            .classList.add("d-flex");
          return;
        }
        if (!verifyInfo("#phone_number1")) {
          document
            .querySelector(".company .form-error")
            .classList.remove("d-flex");
          document
            .querySelector(".phone_number .form-error")
            .classList.add("d-flex");
          return;
        }
        if (!verifyInfo("#email1")) {
          document
            .querySelector(".phone_number .form-error")
            .classList.remove("d-flex");
          document.querySelector(".email .form-error").classList.add("d-flex");
          return;
        }
        if (!verifyInfo("#CheckTerms")) {
          document
            .querySelector(".email .form-error")
            .classList.remove("d-flex");
          document
            .querySelector(".CheckTerms .form-error")
            .classList.add("d-flex");
          return;
        }

        state.f_name = document.querySelector("#f_name1").value;
        state.l_name = document.querySelector("#l_name1").value;
        state.company = document.querySelector("#company1").value;
        state.phoneNumber = document.querySelector("#phone_number1").value;
        state.email = document.querySelector("#email1").value;
        state.monthly_shipments =
          document.querySelector("#monthly_shipments").value;

        paginationComplete("#pagination-section-2");

        /* ============ GET QUOTE ================ */
        await pacakageDetail();
        return;
      }

      /* ============ Move form forward ================ */

      const currentForm = document.querySelector(
        `#${state.form[state.currentForm]}`
      );
      currentForm.classList.add("d-none");
      state.currentForm++;

      document
        .querySelector(`#${state.form[state.currentForm]}`)
        .classList.remove("d-none");

      if (state.currentForm === 2)
        document.querySelector(`.form-advance`).classList.add("d-none");
    });

  //

  /* ===================================== */
  /*                MOVE FORM BACKWARDS
  /* ===================================== */

  document
    .querySelector(".previous-form")
    .addEventListener("click", (event) => {
      if (state.currentForm > 0) {
        // Move Pagination

        if (state.currentForm === 1) {
          paginationComplete("#pagination-section-1");
          paginationIncomplete(`#pagination-section-2`);
        }

        const currentForm = document.querySelector(
          `#${state.form[state.currentForm]}`
        );
        currentForm.classList.add("d-none");
        state.currentForm--;
        document
          .querySelector(`#${state.form[state.currentForm]}`)
          .classList.remove("d-none");
        if (state.currentForm === 2) {
          document.querySelector(`.form-advance`).classList.add("d-none");
        }
      }
    });

  /* ===================================== */
  /*                GET ANOTHER QUOTE
  /* ===================================== */

  document
    .querySelector(".get-another-quote button")
    .addEventListener("click", (event) => {
      state.currentForm = 0;
      document.querySelector(`#first-form`).classList.remove("d-none");
      document.querySelector(`#third-form`).classList.add("d-none");
      document.querySelector(`.form-advance`).classList.remove("d-none");
      document.querySelector(`#pagination-section-2`).classList.add("d-none");
      document
        .querySelector(`.pagination-container .line`)
        .classList.add("d-none");

      // Change the value of Quote to 2
      document.querySelector(`#pagination-section-3 span`).innerHTML = 2;

      paginationIncomplete(`#pagination-section-1`);

      //  Quote pagination
      document
        .querySelector(`#pagination-section-3`)
        .classList.remove("complete");
      document
        .querySelector(`#pagination-section-3`)
        .classList.remove("incomplete");

      state.getAnotherQuote = true;
    });

  /* ===================================== */
  /*                DECREASE PACKAGE QUANTITY
  /* ===================================== */
  document.querySelector(".reduce-quantity").addEventListener("click", () => {
    if (parseInt(document.querySelector("#pkg_num").value, 10) > 1) {
      document.querySelector("#pkg_num").value =
        parseInt(document.querySelector("#pkg_num").value, 10) - 1;

      $(".dimension-container").empty();
      createDimensionStructure({
        num: parseInt(document.querySelector("#pkg_num").value, 10),
        active: "active",
        packageType: state.formInfo.package_type,
      });
    }
  });

  /* ===================================== */
  /*                INCREASE PACKAGE QUANTITY
  /* ===================================== */
  document.querySelector(".increase-quantity").addEventListener("click", () => {
    document.querySelector("#pkg_num").value =
      parseInt(document.querySelector("#pkg_num").value, 10) + 1;

    // document.querySelector('.dimension-container')
    $(".dimension-container").empty();
    createDimensionStructure({
      num: parseInt(document.querySelector("#pkg_num").value, 10),
      active: "active",
      packageType: state.formInfo.package_type,
    });
  });

  /* ===================================== */
  /*                VERIFY CUSTOMER INFO
  /* ===================================== */

  function verifyInfo(id) {
    if (document.querySelector(id).value) {
      console.log("yo");

      return true;
    }
    console.log("you");
    return false;
  }

  /* ===================================== */
  /*                GET RATES
  /* ===================================== */

  async function pacakageDetail() {
    await eshipperQuote(state.formInfo).then((res) => {
      try {
        console.log(res);
        paginationComplete("#pagination-section-3");
        const currentForm = document.querySelector(
          `#${state.form[state.currentForm]}`
        );
        currentForm.classList.add("d-none");
        state.currentForm++;

        document
          .querySelector(`#${state.form[state.currentForm]}`)
          .classList.remove("d-none");

        if (state.currentForm === 2)
          document.querySelector(`.form-advance`).classList.add("d-none");

        state.shipmentPrices = res;

        /* ============ ADD MEMBER EXCLUSIVE PRICES ================ */

        document.querySelector(
          "#quote-item-1 .estimated-time span"
        ).innerHTML = `Est. ${res.air_transitDays} ${
          res.air_transitDays > 1 ? "Days" : "Day"
        }`;
        document.querySelector(
          "#quote-item-1 .price"
        ).innerHTML = `$${res.airTotal}`;
        document.querySelector(
          "#quote-item-1 .fuel-tax-wrapper div:first-child span"
        ).innerHTML = `$${res.air_fuel}`;
        document.querySelector(
          "#quote-item-1 .fuel-tax-wrapper div:last-child span"
        ).innerHTML = `$${res.air_taxes}`;

        /* ============ ADD GROUND PRICES ================ */

        document.querySelector(
          "#quote-item-2 .estimated-time span"
        ).innerHTML = `Est. ${res.ground_transitDays} ${
          res.ground_transitDays > 1 ? "Days" : "Day"
        }`;
        document.querySelector(
          "#quote-item-2 .price"
        ).innerHTML = `$${res.groundTotal}`;
        document.querySelector(
          "#quote-item-2 .fuel-tax-wrapper div:first-child span"
        ).innerHTML = `$${res.ground_fuel}`;
        document.querySelector(
          "#quote-item-2 .fuel-tax-wrapper div:last-child span"
        ).innerHTML = `$${res.ground_taxes}`;

        /* ============ ADD AIR PRICES ================ */

        document.querySelector(
          "#quote-item-3 .estimated-time span"
        ).innerHTML = `Est. ${res.air_transitDays} ${
          res.air_transitDays > 1 ? "Days" : "Day"
        }`;
        document.querySelector(
          "#quote-item-3 .price"
        ).innerHTML = `$${res.airTotal}`;
        document.querySelector(
          "#quote-item-3 .fuel-tax-wrapper div:first-child span"
        ).innerHTML = `$${res.air_fuel}`;
        document.querySelector(
          "#quote-item-3 .fuel-tax-wrapper div:last-child span"
        ).innerHTML = `$${res.air_taxes}`;
      } catch (error) {
        console.log(error);
      }
    });
  }
});

var requestOptions = {
  method: "GET",
  redirect: "follow",
};

fetch(
  "https://maps.googleapis.com/maps/api/place/details/json?fields=address_components,formatted_address&place_id=ChIJufAjru2qNTERlDEO7WOnoU0&key=AIzaSyDkCNPtgjc6wLp8Zk4KCHIb6lsfg_Z-Whs",
  requestOptions
)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.log("error", error));

// air: 9.12;
// airTotal: 13.31;
// air_fuel: 2.65;
// air_taxes: 1.54;
// air_transitDays: "1";
// ground: 8.94;
// groundTotal: 13.05;
// ground_fuel: 2.6;
// ground_taxes: 1.51;
// ground_transitDays: "2";
// smartepost: null;
// smartepostTotal: null;

// https://live-eshipper-media-wprocket.s3.ca-central-1.amazonaws.com/wp-content/uploads/2024/01/18224819/eshipper-ground-services.png
