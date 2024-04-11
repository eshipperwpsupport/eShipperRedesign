const buildButton = ({ text, className }) => {
  return `
    
        <a href="#" class="btn ${className} ">
              ${text}

              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="base-state"
              >
                <path
                  d="M6.75 13.5L11.25 9L6.75 4.5"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="hover-state"
              >
                <path
                  d="M9.5 13.5L14 9M14 9L9.5 4.5M14 9H3.5"
                  stroke="#472F92"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
    
    `;
};

export default buildButton;
