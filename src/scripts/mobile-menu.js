import $ from "jquery";

$(document).ready(() => {
  $("#mobile-btn").click(() => {
    $("#mobile-menu").toggleClass("mobile-menu-toggle");
  });
});
