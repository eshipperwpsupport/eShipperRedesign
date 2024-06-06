import integration from "../../assets/Integrations/integrations.js";
import { createButton } from "../helper.js";

createButton(
  ".api_integration_container .include-btn",
  "Book a Meeting",
  "btn rounded-pill button-white-bg-teal secondary-500-main"
);

const integration_list = [
  {
    title: "shopify",
    text: "Manage, fulfill, and ship your Shopify orders seamlessly, with features like 4D boxing and automated emails.",
    img_src: "/eShipperRedesign/assets/Partner_logo/shopify.svg",
    img_alt: "",
    link_text: "Get Started",
    link_href: "",
    filters: "marketplace popular featured all",
  },
  {
    title: "Amazon",
    text: "Sync and manage your orders from the world’s largest marketplace on the eShipper platform.",
    img_src: "/eShipperRedesign/assets/Partner_logo/amazon.svg",
    img_alt: "",
    link_text: "Talk to an Expert",
    link_href: "",
    filters: "marketplace popular featured all",
  },
  {
    title: "Etsy",
    text: "Connect your Etsy store for easy, efficient order management and fulfillment.",
    img_src: "/eShipperRedesign/assets/Partner_logo/etsy.svg",
    img_alt: "",
    link_text: "Talk to an Expert",
    link_href: "",
    filters: "marketplace popular all",
  },
  {
    title: "WooCommerce",
    text: "Enhance your shipping and fulfillment process for your WooCommerce store.",
    img_src: "/eShipperRedesign/assets/Partner_logo/woocommerce.svg",
    img_alt: "",
    link_text: "Talk to an Expert",
    link_href: "",
    filters: "marketplace popular featured all",
  },
  {
    title: "ShipStation",
    text: "Fulfill orders at eShipper rates with our ShipStation integration.",
    img_src: "/eShipperRedesign/assets/Partner_logo/shipstation.svg",
    img_alt: "",
    link_text: "Talk to an Expert",
    link_href: "",
    filters: "marketplace popular all",
  },
  {
    title: "eBay",
    text: "Connect your eBay store to eShipper for streamlined shipping and order fulfillment.",
    img_src: "/eShipperRedesign/assets/Partner_logo/ebay.svg",
    img_alt: "",
    link_text: "Talk to an Expert",
    link_href: "",
    filters: "marketplace popular all",
  },
  {
    title: "Magento",
    text: "Connect your Magento store to eShipper to simplify shipping and order fulfillment.",
    img_src: "/eShipperRedesign/assets/Partner_logo/magento.svg",
    img_alt: "",
    link_text: "Talk to an Expert",
    link_href: "",
    filters: "marketplace popular all",
  },
  {
    title: "Best Buy",
    text: "Add products, set up prices and inventory, and manage your Best Buy marketplace orders.",
    img_src: "/eShipperRedesign/assets/Partner_logo/bestbuy.svg",
    img_alt: "",
    link_text: "Talk to an Expert",
    link_href: "",
    filters: "marketplace popular all",
  },
  {
    title: "Walmart",
    text: "Automatically sync your products and orders for a seamless Walmart marketplace experience.",
    img_src: "/eShipperRedesign/assets/Partner_logo/walmart.svg",
    img_alt: "",
    link_text: "Talk to an Expert",
    link_href: "",
    filters: "marketplace popular all",
  },
  {
    title: "Squarespace",
    text: "Enable automated shipping rate calculations, label printing, and Squarespace order fulfillment.",
    img_src: "/eShipperRedesign/assets/Partner_logo/squarespace.svg",
    img_alt: "",
    link_text: "Talk to an Expert",
    link_href: "",
    filters: "marketplace popular all",
  },
  {
    title: "Wix",
    text: "Build your eCommerce website easily and get the expert support you need to start selling online fast.",
    img_src: "/eShipperRedesign/assets/Partner_logo/wix.svg",
    img_alt: "",
    link_text: "Talk to an Expert",
    link_href: "",
    filters: "marketplace popular all",
  },
  {
    title: "Square",
    text: "Sell online with eCommerce tools for creating your website, accepting orders, and adding online payments.",
    img_src: "/eShipperRedesign/assets/Partner_logo/square.svg",
    img_alt: "",
    link_text: "Talk to an Expert",
    link_href: "",
    filters: "marketplace popular all",
  },
  {
    title: "Easyship",
    text: "Fulfill orders at eShipper rates with our Easyship integration.",
    img_src: "/eShipperRedesign/assets/Partner_logo/easyship.svg",
    img_alt: "",
    link_text: "Talk to an Expert",
    link_href: "",
    filters: "marketplace popular all",
  },
  {
    title: "ShipHero",
    text: "Manage your warehouse operations more efficiently with the ShipHero Warehouse Management System.",
    img_src: "/eShipperRedesign/assets/Partner_logo/shiphero.svg",
    img_alt: "",
    link_text: "Talk to an Expert",
    link_href: "",
    filters: "marketplace popular all",
  },
  {
    title: "Lightspeed",
    text: "Streamline transactions with integrated payments from the trusted POS platform.",
    img_src: "/eShipperRedesign/assets/Partner_logo/lightspeed.svg",
    img_alt: "",
    link_text: "Talk to an Expert",
    link_href: "",
    filters: "marketplace popular all",
  },
  {
    title: "Extensiv",
    text: "Experience intelligent order and warehouse management with Extensiv integration.",
    img_src: "/eShipperRedesign/assets/Partner_logo/extensiv.svg",
    img_alt: "",
    link_text: "Talk to an Expert",
    link_href: "",
    filters: "marketplace popular all",
  },
  {
    title: "Ecwid",
    text: "Experience intelligent order and warehouse management with Extensiv integration.",
    img_src: "/eShipperRedesign/assets/Partner_logo/ecwid.svg",
    img_alt: "",
    link_text: "Talk to an Expert",
    link_href: "",
    filters: "marketplace popular all",
  },
  {
    title: "Zoho",
    text: "Manage sales, marketing, and customer support in one place.",
    img_src: "/eShipperRedesign/assets/Partner_logo/zoho.svg",
    img_alt: "",
    link_text: "Talk to an Expert",
    link_href: "",
    filters: "marketplace popular all",
  },
];

// Append generated items to the container
integration_list.forEach((item) => {
  document.querySelector(".integration_container").innerHTML +=
    integration(item);
});

// script.js
document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.querySelector(".search_integration-text");
  const filterButtons = document.querySelectorAll(".filter-button");
  const filterButtons_mobile = document.querySelectorAll(
    ".filter-button-mobile"
  );
  const integrationItems = document.querySelectorAll(".integration-item");

  /**
   * SEARCH FUNCTIONALITY
   */
  // Search Functionality
  searchInput.addEventListener("input", function () {
    const query = searchInput.value.toLowerCase();
    integrationItems.forEach((item) => {
      const title = item.querySelector("h4").textContent.toLowerCase();
      if (title.includes(query)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });

  /**
   * FILTER FUNCTIONALITY FOR DESKTOP
   */
  // Filter Functionality
  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Remove 'active' class from all buttons
      filterButtons.forEach((btn) => {
        btn.classList.remove("active");
      });

      // Add 'active' class to the clicked button
      button.classList.add("active");

      const filter = button.getAttribute("data-filter");
      integrationItems.forEach((item) => {
        if (filter === "all") {
          item.style.display = "block";
        } else if (item.classList.contains(filter)) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });
  });
  /**
   * FILTER FUNCTIONALITY FOR MOBILE
   */
  // Filter Functionality
  filterButtons_mobile.forEach((button) => {
    button.addEventListener("click", function () {
      document.querySelector(".filter_integration_text").innerHTML =
        button.textContent;

      const filter = button.getAttribute("data-filter");
      integrationItems.forEach((item) => {
        if (filter === "all") {
          item.style.display = "block";
        } else if (item.classList.contains(filter)) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });
  });
});
