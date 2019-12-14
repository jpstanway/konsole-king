import $ from "jquery";

$(document).ready(() => {
  const sliderBtnLeft = $("#slider-btn-left");
  const sliderBtnRight = $("#slider-btn-right");
  const slideOne = $("#slide-one");
  const slideTwo = $("#slide-two");

  sliderBtnLeft.addClass("slider-active");
  slideOne.addClass("show-slide-one");
  slideTwo.addClass("hide-slide-two");

  sliderBtnLeft.add(sliderBtnRight).click(event => {
    $(".slider-active").removeClass("slider-active");
    $(event.target).addClass("slider-active");
    slideOne.toggleClass("show-slide-one hide-slide-one");
    slideTwo.toggleClass("show-slide-two hide-slide-two");
  });
});
