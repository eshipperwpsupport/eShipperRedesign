function input({
  num,
  dimension_form,
  placeholder,
  label,
  id,
  type = "text",
  onfocus,
}) {
  let dimension = "in";
  let span = "";
  let formtype = `
    <input
                type="${type}"
                placeholder="${placeholder}"
                name="${id}${num}"
                id="${id}${num}"
                ${onfocus ? `onfocus="${onfocus}"` : ""}

            />
  `;

  label = label.charAt(0).toUpperCase() + label.slice(1);

  if (dimension_form) {
    if (id === "weight") dimension = "lb";
    span = `<span class="paragraph-small Neural-900">${dimension}</span>`;
  }

  let input = `

    <div class="d-flex flex-column packageDetails-dimensions">
        <fieldset>
            <label for="${id}${num}">${label}</label>
            <div class="d-flex align-items-center dimension">
            ${formtype}
            ${span}
            </div>
            <span class="form-error">Required</span>
        </fieldset>
    </div>


`;

  return input;
}

export default input;
