/**
 *
 * HOVER ACTION TO OPEN NAV BAR
 */

// const expandMenu = (e) => {
//   const id = e.target.id;
//   e.target.classList.add("show");
//   document.querySelector(`[aria-labelledby="${id}"]`).classList.add("show");
// };
// const closeMenu = (e) => {
//   const id = e.target.id;
//   e.target.classList.remove("show");
//   document.querySelector(`[aria-labelledby="${id}"]`).classList.remove("show");
// };

// Select all elements with the class .hover-menu and attach the event listener to each
// document.querySelectorAll(".hover-menu").forEach(function (element) {
//   element.addEventListener("mouseenter", expandMenu);
//   // If you also want to do something when the mouse leaves the element, you can add:
//   // element.addEventListener("mouseleave", closeMenu);
// });

/**
 *
 * LISTEN TO THE SCROLL EVENT FOR HEADER
 */

window.addEventListener("scroll", function () {
  // Get the navbar element
  var navbar = document.querySelector(".navbar-container");

  // Check if the page is scrolled down more than 50px
  if (window.scrollY === 0) {
    // Add the 'scrolled' class to the navbar
    navbar.classList.remove("scroll");
  } else {
    // Remove the 'scrolled' class from the navbar
    navbar.classList.add("scroll");
  }
});

/**
 * DROPDOWN FUNCTION FOR THE PACKAGE TYPE ON THE FORM
 * */

$(function () {
  $(".dropdown > .caption").on("click", function () {
    $(this).parent().toggleClass("open");
  });

  $(".dropdown > .list > .item").on("click", function () {
    $(".dropdown > .list > .item").removeClass("selected");

    $(this).addClass("selected");

    // Get the HTML of the clicked item, including text and SVG
    var htmlContent = $(this).html();

    // Set the HTML of the caption to the HTML of the clicked item
    $(this)
      .parent()
      .parent()
      .removeClass("open")
      .children(".caption")
      .html(htmlContent);
  });

  $(document).on("keyup", function (evt) {
    if ((evt.keyCode || evt.which) === 27) {
      $(".dropdown").removeClass("open");
    }
  });

  $(document).on("click", function (evt) {
    if ($(evt.target).closest(".dropdown > .caption").length === 0) {
      $(".dropdown").removeClass("open");
    }
  });
});

/**
 *
 *
 * MOBILE HEADER OPEN MENU
 * */

document.querySelector(".mobile-header").addEventListener("click", openHeader);
document.querySelector(".close-menu-btn").addEventListener("click", openHeader);

function openHeader() {
  document.querySelector(".mobile-menu").classList.toggle("active");
}
