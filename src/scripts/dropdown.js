import $ from "jquery";

$(document).ready(() => {
  $("#mobile-btn").click(() => {
    $("#mobile-menu").toggleClass("mobile-menu-toggle");
  });

  $("#cart-btn").click(() => {
    $("#cart").toggleClass("cart-toggle");
  });
});
