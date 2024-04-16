const Icon_text_block = (svg, header, paragraph) => {
  return `
        <div class="Icon_Text_Block">
              <div>
                ${svg}
              </div>
              <div>
                <h4>${header}</h4>
                <p>
                  ${paragraph}
                </p>
              </div>
            </div>
    `;
};

export default Icon_text_block;
