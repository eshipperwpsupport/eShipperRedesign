function pagination(num, title, state) {
  let pagination = `
    
     <div class="pagination">
      <div class="pagination-circle">
        <span>${num}</span>
        <svg
          width="22"
          height="15"
          viewBox="0 0 22 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 7.35L8.06667 13.2L20.2 1.5"
            stroke="white"
            stroke-width="2.4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <span class="pagination-title medium">${title}</span>
    </div>

    `;

  return pagination;
}

export default pagination;
