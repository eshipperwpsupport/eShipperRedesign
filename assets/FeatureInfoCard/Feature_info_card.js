const Feature_info_card = (
  h2,
  h2_span,
  paragraph,
  button,
  img_src,
  img_alt
) => {
  return `
        <div class="feature_info_card-container">
          <div>
            <div>
              <h2 class="text-white">
                ${h2} <span class="">${h2_span}</span>
              </h2>
              <p class="paragraph-supporting-text">
                ${paragraph}
              </p>
              ${button}
            </div>
          </div>

          <div>
            <img
              src="${img_src}"
              alt="${img_alt}"
            />
          </div>
        </div>
    `;
};

export default Feature_info_card;
