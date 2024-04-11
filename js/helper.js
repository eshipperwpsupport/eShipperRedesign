/**
 *
 * Slider Logo JS
 */

// marquee.js
export function sliderLogo(images, id) {
  // const marqueeContainer = document.getElementById("marqueeContainer");
  const marqueeContainer = document.querySelector(`#${id} .marquee`);

  // Create a new marquee content div
  const marqueeContent = document.createElement("div");
  marqueeContent.classList.add("marquee-content", "scroll", "reverse");

  // Generate HTML content using template strings
  const htmlContent = images
    .map(
      (image) => `
    <img src="${image.url}" alt="${image.alt}" id="${image.id}">
  `
    )
    .join("");

  // Set innerHTML of marqueeContent to the generated HTML content
  marqueeContent.innerHTML = htmlContent;

  // Append the marquee content to the marquee container
  marqueeContainer.appendChild(marqueeContent);
}

export function sliderInput() {
  // var slider = document.getElementById("myRange");
  // var output = document.getElementById("demo");
  // output.innerHTML = slider.value; // Display the default slider value

  // // Update the current slider value (each time you drag the slider handle)
  // slider.oninput = function () {
  //   output.innerHTML = this.value;
  // };

  const slider_input = document.getElementById("slider_input"),
    slider_thumb = document.getElementById("slider_thumb"),
    demo = document.getElementById("demo"),
    slider_line = document.getElementById("slider_line");

  function showSliderValue() {
    // slider_thumb.innerHTML = slider_input.value;
    demo.innerHTML = slider_input.value;
    const bulletPosition = slider_input.value / slider_input.max,
      space = slider_input.offsetWidth - slider_thumb.offsetWidth;

    slider_thumb.style.left = bulletPosition * space + "px";
    slider_line.style.width = slider_input.value + "%";
  }

  showSliderValue();
  window.addEventListener("resize", showSliderValue);
  slider_input.addEventListener("input", showSliderValue, false);
}

/**
 *
 * TOGGLE ESHIPPER HEADER INSTANT QUOTE
 */

export function eshipperHeaderInstantQuote(e) {
  if (e.currentTarget.id === "canada") {
    document.querySelector("#WorldwideInstantQuote").classList.remove("active");
    document.querySelector("#CanadaInstantQuote").classList.add("active");
    document.querySelector("#canada").classList.toggle("active");
    document.querySelector("#worldwide").classList.toggle("active");
  } else {
    document.querySelector("#WorldwideInstantQuote").classList.add("active");
    document.querySelector("#CanadaInstantQuote").classList.remove("active");
    document.querySelector("#canada").classList.remove("active");
    document.querySelector("#worldwide").classList.toggle("active");
  }
}

/**
 *
 * PLAY ANIMATION ON HOVER
 */

export function play_lottie() {
  const lottiePlayer = document.querySelectorAll(".lottie");

  // Play animation on hover
  lottiePlayer.forEach((item) => {
    item.addEventListener("mouseenter", (e) => {
      // document.querySelector("#lottie-1").play();

      const player = item.querySelector("dotlottie-player");
      if (player) player.play();
    });
  });

  // Optional: Pause or stop animation when not hovered

  lottiePlayer.forEach((item) => {
    item.addEventListener("mouseleave", () => {
      // document.querySelector("#lottie-1").play();

      const player = item.querySelector("dotlottie-player");
      if (player) player.stop();
    });
  });
}
