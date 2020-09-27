'use strict';

const mediumDesktopBreakPoint = 1200;
const mobileBreakPoint = 768;
const smallMobileBreakPoint = 480;

$(function() {
  $('.slider').slick({
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 3,
    variableWidth: true,

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          variableWidth: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          variableWidth: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: false,
        },
      },
    ],
  });

  $('.slider-game').slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
  });

  $('.nav__item').on('mouseover', function() {
    $('.submenu').hide();
    $(this).children().show();
  });

  $('.nav__item').on('mouseout', function() {
    $('.submenu').hide();
  });

  $('.submenu__item').on('mouseover', function() {
    $('.submenu__list').hide();
    $(this).children().show();
  });

  $('.submenu__item').on('mouseout', function() {
    $('.submenu__list').hide();
  });

  $('.header__mobile-menu').on('click', function() {
    $('.nav').toggleClass('nav-mobile');
    $('.header__toggler').toggleClass('header__toggler--active');
  });
});
